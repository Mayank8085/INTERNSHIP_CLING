const JWT = require("jwt-simple");
const moment = require("moment");
require("dotenv").config();
const db = require("../database");
const referralCode = require("referral-codes");
const { createPassword, comparePassword } = require("../utils/bcrypt");
const { generateInsertSql } = require("../utils/generateSql");

const authService = {
  generateToken: (id) => {
    const payload = {
      id,
    };
    const token = JWT.encode(payload, process.env.SECRET_KEY);
    return token;
  },
 //singup
  signUp: async ({
    user_type_id,
    f_name,
    l_name,
    email_id,
    web_url,
    country_code,
    phone_no,
    Referral_code,
    password,
  }) => {
    const [user_ref_id] = referralCode.generate({ length: 6 });
    const passwordHash = await createPassword(password);
    const obj = {
      first_name: f_name,
      last_name: l_name,
      // web_url,
      country_id: country_code,
      user_type_id: user_type_id,
      password: passwordHash,
      mobile_no: phone_no,
      referral_id: Referral_code,
      user_ref_id: user_ref_id,
      email: email_id,
      status: 1,
      app_installed_on: moment().format("YYYY-MM-DD HH:mm:ss"),
    };
    const sql = generateInsertSql("users", obj);
    console.log(sql);
    const user = await db.query(sql);
    await db.query(
      `insert into details_influencer (user_id) values (${user.insertId})`
    );
    console.log(user);
    return user;
  },

  getUserDetailsByEmail: async (email) => {
    const [user] = await db.query(`select * from users where email='${email}'`);
    return user;
  },

  getUserDetailsbyId: async (id) => {
    const [user] = await db.query(`select * from users where id=${id}`);
    return user;
  },

  getUserDetailsbySpecificColumn: async (column, value) => {
    let sql = "";
    if (typeof value === "string") {
      sql = `select * from users where ${column}='${value}'`;
    } else {
      sql = `select * from users where ${column}=${value}`;
    }
    const [user] = await db.query(sql);
    return user;
  },

  changePassword: async (id, newPassword) => {
    const passwordHash = await createPassword(newPassword);

    const updatePasword = await db.query(
      `update users set password='${passwordHash}' where id=${id}`
    );
    if (updatePasword) {
      return true;
    } else {
      throw "something went wrong";
    }
  },

  socialSignup: async ({
    user_type_id,
    f_name,
    l_name,
    provider,
    provider_user_id,
  }) => {
    console.log(user_type_id);
    const [user_ref_id] = referralCode.generate({ length: 6 });
    const obj = {
      first_name: f_name,
      last_name: l_name,
      provider: provider,
      provider_user_id: provider_user_id,
      user_type_id: user_type_id,
      user_ref_id: user_ref_id,
      app_installed_on: moment().format("YYYY-MM-DD HH:mm:ss"),
    };
    const sql = generateInsertSql("users", obj);
    console.log(sql);
    const user = await db.query(sql);
    return user;
  },

  socialSignin: async ({ provider, provider_user_id }) => {
    const [user] = await db.query(
      `select * from users where provider='${provider}' and provider_user_id='${provider_user_id}'`
    );
    if (user) {
      return user;
    } else {
      return false;
    }
  },
};

module.exports = authService;
