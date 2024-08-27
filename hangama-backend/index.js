const bodyParser = require("body-parser");
const express = require("express");
const { errors } = require("celebrate");
const cors = require("cors");
const router = require("./routers");
const boom = require("boom");
const handleError = require("./errorhandler");
const validateApiKey = require("./middlewares/validateApiKey");
const validateToken = require("./middlewares/validateToken");
require("dotenv").config();
const auth = require("./routers/auth");

const passport = require("passport");
const passportConfig = require("./passport/passportConfig");
const cookieSession = require("cookie-session");

const port = process.env.PORT || 8000;
const app = express();
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(errors());

app.all("/api/v1/*", (req, res, next) => {
  return validateApiKey(req, res, next);
});

app.all("/api/v1/*", (req, res, next) => {
  const pathUrl = req.path.split("/v1/")[1];
  const publicRoutes = ["signup", "signin", "social_signup", "social_signin"];
  if (req && publicRoutes.includes(pathUrl)) {
    return next();
  } else {
    return validateToken(req, res, next);
  }
});

app.use(
  cookieSession({
    maxAge: 3 * 24 * 60 * 60 * 1000,
    keys: ["thisisMayank"], // dotenv
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", auth);

app.use("/api/v1", router);

app.use(function (req, res, next) {
  return next(boom.notFound("Invalid endpoint"));
});

// app.use(handleError());

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
