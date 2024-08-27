const { Joi } = require("celebrate");

const authSchema = {
  signup_post_schema: Joi.object().keys({
    user_type_id: Joi.number().valid(1,2,3).required(),
    f_name: Joi.string().max(50).required(),
    l_name: Joi.string().max(50).required(),
    email_id: Joi.string().max(100).required(),
    web_url: Joi.string().max(100),
    country_code: Joi.number(),
    phone_no: Joi.string().min(10).max(10),
    Referral_code: Joi.string().min(6).max(6),
    password: Joi.string().max(200),
  }),
  signin_post_schema: Joi.object().keys({
    email_id: Joi.string().max(100).required(),
    password: Joi.string().max(200).required(),
  }),
  changepassword_post_schema: Joi.object().keys({
    old_password: Joi.string().max(100).required(),
    new_password: Joi.string().max(100).required(),
  }),
  socialSignup_post_schema: Joi.object().keys({
    user_type_id: Joi.number().valid(1,2,3).required(),
    f_name: Joi.string().max(50).required(),
    l_name: Joi.string().max(50).required(),
    provider: Joi.string()
      .max(10)
      .required()
      .valid("google", "facebook", "apple", "twitter"),
    provider_user_id: Joi.string().max(100).required(),
  }),
  socialSignin_post_schema: Joi.object().keys({
    provider: Joi.string()
      .max(10)
      .required()
      .valid("google", "facebook", "apple", "twitter"),
    provider_user_id: Joi.string().max(100).required(),
  }),
};

module.exports = authSchema;
