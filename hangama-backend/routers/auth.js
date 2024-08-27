const router = require("express").Router();
const authService = require("../services/authService");

const passport = require("passport");

//logout
router.get("/logout", (req, res) => {
  req.logout();
});

//google auth
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  }),
  (req, res) => {
    res.send("login with google");
  }
);

//google auth callback
router.get("/google/callback", passport.authenticate("google"), (req, res) => {
  const token = authService.generateToken(req.user?.id);
  res.redirect(`${process.env.HANGAMA_WEB_URL}/?token=${token}`);
});

//facebook auth
router.get(
  "/facebook",
  passport.authenticate("facebook", {
    authType: "reauthenticate",
    scope: ["email"],
  }),
  (req, res) => {
    res.send("login with facebook");
  }
);

//facebook auth callback
router.get(
  "/facebook/callback",
  passport.authenticate("facebook"),
  (req, res) => {
    // res.send("login with facebook callback");
    const token = authService.generateToken(req.user?.id);
    res.redirect(`${process.env.HANGAMA_WEB_URL}/?token=${token}`);
  }
);

module.exports = router;
