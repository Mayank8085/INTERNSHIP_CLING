const authService = require("../services/authService");
const { comparePassword } = require("../utils/bcrypt");
const authSchema = require("../validations/authSchema");

const signUp = async (req, res) => {
  try {
    await authSchema.signup_post_schema.validateAsync(req.body);
    const user = await authService.signUp(req.body);
    const token = authService.generateToken(user.insertId);
    res.status(200).send({ token });
  } catch (e) {
    console.log(e);
    res.status(400).send({ error: e });
  }
};

const signin = async (req, res) => {
  try {
    await authSchema.signin_post_schema.validateAsync(req.body);
    const { email_id, password } = req.body;

    const user = await authService.getUserDetailsByEmail(email_id);
    if (!user) {
      return res.status(401).send({ error: "Incorrect username or password." });
    }
    const isValidPassword = await comparePassword(password, user?.password);
    if (!isValidPassword) {
      return res.status(401).send({ error: "Incorrect username or password." });
    }
    const token = authService.generateToken(user?.id);
    res.status(200).send({ token });
  } catch (error) {
    console.log(error);
    res.status(400).send({ error: error });
  }
};

const changePassword = async (req, res) => {
  try {
    await authSchema.changepassword_post_schema.validateAsync(req.body);
    const { old_password, new_password } = req.body;
    const user = await authService.getUserDetailsbyId(req.id);
    const isOldPasswordValid = await comparePassword(
      old_password,
      user?.password
    );
    if (!isOldPasswordValid) {
      return res.status(401).send({ error: "Invalid old password." });
    }
    const passwordChanged = await authService.changePassword(
      req.id,
      new_password
    );
    if (passwordChanged) {
      res.status(200).send({ success: "Password updated successfully" });
    } else {
      return res
        .status(500)
        .send({ error: "Something went wrong. Please try again later." });
    }
  } catch (error) {
    console.log(error);
    res.status(400).send({ error });
  }
};

const socialSignup = async (req, res) => {
  try {
    await authSchema.socialSignup_post_schema.validateAsync(req.body);
    const user = await authService.socialSignup(req.body);
    const token = authService.generateToken(user.insertId);
    res.status(200).send({ token });
  } catch (error) {
    console.log(error);
    res.status(400).send({ error });
  }
};

const socialSignin = async (req, res) => {
  try {
    await authSchema.socialSignin_post_schema.validateAsync(req.body);
    const user = await authService.socialSignin(req.body);
    if (user) {
      const token = authService.generateToken(user.id);
      res.status(200).send({ token });
    } else {
      res.status(401).send({ error: "Incorrect provider or provider user id" });
    }
  } catch (error) {
    console.log(error);
    res.status(400).send({ error });
  }
};

module.exports = { signUp, signin, changePassword, socialSignup, socialSignin };
