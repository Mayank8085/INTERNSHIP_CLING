const { Joi } = require("celebrate");

const publicSchema = {
  updateInfluencerPerDetail_post_schema: Joi.object().keys({
    profile_photo_path: Joi.string().allow(""),
    first_name: Joi.string().max(50).allow(""),
    last_name: Joi.string().max(50).allow(""),
    dob: Joi.string().allow(""),
    whatsapp_no: Joi.string().max(10).allow(""),
    country_code: Joi.number(),
    state_code: Joi.number(),
    city_code: Joi.number(),
    postal_code: Joi.number(),
    timezone: Joi.string().max(50).allow(""),
    gender: Joi.string().max(6).valid("male", "female", "other").allow(""),
    language_id: Joi.number(),
    specialities: Joi.string().allow(""),
  }),

  updateInfluencerCampaignCriteria_post_schema: Joi.object().keys({
    min_cash_payment: Joi.number().precision(2),
    min_product_value: Joi.number().precision(2),
  }),
  updateInfluencerBio_post_schema: Joi.object().keys({
    bio: Joi.string().max(200).required(),
  }),
  addInfluencerPaymentMode_post_schema: Joi.object().keys({
    beneficiary_name: Joi.string().max(50).required(),
    bank_name: Joi.string().max(50).required(),
    account_no: Joi.string().max(50).required(),
    ifsc_code: Joi.string().max(50).required(),
    set_default: Joi.number().integer().valid(0, 1).required(),
    status: Joi.number().integer().valid(0, 1).required(),
  }),
  influencerSocialAdd_post_schema: Joi.object().keys({
    social_plateform: Joi.string().max(50).required(),
    referance_tag: Joi.string().max(50).required(),
    social_link: Joi.string().max(50).required(),
  }),
  influencerNotification_post_schema: Joi.object().keys({
    emails: Joi.string().max(50).allow(""),
    transaction_status: Joi.string().max(50).allow(""),
    new_message: Joi.string().max(50).allow(""),
    marketplace_offers: Joi.string().max(50).allow(""),
    push_subscriptions: Joi.string().max(50).allow(""),
    status: Joi.number().integer().valid(0, 1).allow(""),
  }),
};

module.exports = publicSchema;
