var passport = require("passport");
const referralCode = require("referral-codes");
const moment = require("moment");
const db = require("../database");
const { generateInsertSql } = require("../utils/generateSql");

// var User = require('../model/user');
var GoogleStrategy = require("passport-google-oauth20").Strategy;

var FacebookStrategy = require("passport-facebook").Strategy;

//helper function
const storeUser = (profile, next) => {
  db.query(
    `select * from users where provider_user_id='${profile.emails[0].value}'`
  )
    .then((payload) => {
      console.log("Payload", payload);
      if (payload.length > 0) {
        const user = payload[0];
        next(null, user);
        console.log("UserMayank", user);
      } else {
        const [user_ref_id] = referralCode.generate({ length: 6 });
        const obj = {
          first_name: profile.name.givenName,
          last_name: profile.name.familyName,
          provider: profile.provider,
          provider_user_id: profile.emails[0].value,
          user_type_id: 1,
          user_ref_id: user_ref_id,
          app_installed_on: moment().format("YYYY-MM-DD HH:mm:ss"),
          status: 1,
        };

        const sql = generateInsertSql("users", obj);
        console.log(sql);
        db.query(sql)
          .then((data) => {
            db.query(`select * from users where id=${data.insertId}`)
              .then((payload) => {
                console.log("User", payload);
                const user = payload[0];
                next(null, user);
              })
              .catch((err) => {
                next(err, null);
              });
          })
          .catch((err) => {
            next(err, null);
          });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

passport.serializeUser(function (user, done) {
  done(null, user.id);
  console.log("Serialize User", user);
});

passport.deserializeUser(function (id, done) {
  console.log("Deserialize User", id);
  db.query(`select * from users where id=${id}`)
    .then((payload) => {
      const user = payload[0];
      done(null, user);
    })
    .catch();
});

//for google
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
    },
    (accessToken, refreshToken, profile, next) => {
      console.log("MyProfile", profile);

      storeUser(profile, next);
    }
  )
);

//for facebook
passport.use(
  new FacebookStrategy(
    {
      clientID: "484134603886910",
      clientSecret: "703e7057d5545e54483b19231196cebf",
      callbackURL: `${process.env.FACEBOOK_CALLBACK_URL}`,
      profileFields: [
        "id",
        "displayName",
        "photos",
        "email",
        "name",
        "gender",
        "profileUrl",
      ],
    },
    function (accessToken, refreshToken, profile, next) {
      console.log("MyProfile", profile);
      //check if user exists
      db.query(
        `select * from users where first_name='${profile.name.givenName}' and last_name='${profile.name.familyName}' and provider='${profile.provider}'`
      )
        .then((payload) => {
          if (payload.length > 0) {
            const user = payload[0];
            next(null, user);
          } else {
            const [user_ref_id] = referralCode.generate({ length: 6 });
            console.log("emails Mayank", profile.emails[0].value);
            const obj = {
              first_name: profile.name.givenName,
              last_name: profile.name.familyName,
              provider: profile.provider,
              provider_user_id: profile.emails[0].value,
              user_type_id: 1,
              status: 1,
              user_ref_id: user_ref_id,
              app_installed_on: moment().format("YYYY-MM-DD HH:mm:ss"),
            };

            const sql = generateInsertSql("users", obj);
            console.log(sql);

            db.query(sql)
              .then((data) => {
                db.query(`select * from users where id=${data.insertId}`)
                  .then((payload) => {
                    console.log("User", payload);
                    const user = payload[0];
                    next(null, user);
                  })
                  .catch((err) => {
                    next(err, null);
                  });
              })
              .catch((err) => {
                next(err, null);
              });
          }
        })
        .catch((err) => {
          next(err, null);
        });
    }
  )
);

//http://localhost:8000/__/auth/facebook/callback
