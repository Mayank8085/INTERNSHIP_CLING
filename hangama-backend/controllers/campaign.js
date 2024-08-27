const campaignService = require("../services/campignService");
const campaignSchema = require("../validations/campaignSchema");
const _ = require("lodash");

const getSingleCampaign = async (req, res) => {
  try {
    await campaignSchema.getSingleCampaign_post_schema.validateAsync(req.body);
    const id = req.body.id;
    const result = await campaignService.getSingleCampaign(id);
    let campaign = {};
    if (result.length) {
      campaign = _.keyBy(result, "id");
    }
    res.status(200).send(campaign);
  } catch (error) {
    console.log(error);
    res.status(400).send({ error });
  }
};

const getTopFiveEngagement = async (req, res) => {
  try {
    const id = req.id;
    const result = await campaignService.getTopFiveEngagement(id);
    res.status(200).send(result);
  } catch (error) {
    console.log(error);
    res.status(400).send({ error });
  }
};

module.exports = { getSingleCampaign, getTopFiveEngagement };
