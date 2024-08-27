const { Joi } = require("celebrate");

const campaignSchema = {
  getSingleCampaign_post_schema: Joi.object().keys({
    id: Joi.number().integer().required(),
  }),
};

module.exports = campaignSchema;
