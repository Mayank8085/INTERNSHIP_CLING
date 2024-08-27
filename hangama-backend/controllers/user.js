const userService = require("../services/userService");
const publicSchema = require("../validations/userSchema");

const updateInfluencerPerDetail = async (req, res) => {
  try {
    await publicSchema.updateInfluencerPerDetail_post_schema.validateAsync(
      req.body
    );
    const id = req.id;
    const result = await userService.updateInfluencerPerDetail(req.body, id);
    res.status(200).send({ success: "Profile data updated successfully" });
  } catch (error) {
    console.log(error);
    res.status(400).send({ error });
  }
};

const updateInfluencerCampaignCiteria = async (req, res) => {
  try {
    await publicSchema.updateInfluencerCampaignCriteria_post_schema.validateAsync(
      req.body
    );
    if (Object.keys(req.body).length === 0) {
      return res.status(400).send({
        error: "Please provide min_cash_payment or min_product_value .",
      });
    }
    const id = req.id;
    const result = await userService.updateInfluencerCampaignCiteria(
      req.body,
      id
    );
    res.status(200).send({ success: "Campaign criteria updated successfully" });
  } catch (error) {
    console.log(error);
    res.status(400).send({ error });
  }
};

const updateInfluencerBio = async (req, res) => {
  try {
    await publicSchema.updateInfluencerBio_post_schema.validateAsync(req.body);
    const id = req.id;
    const result = await userService.updateInfluencerBio(req.body, id);
    res.status(200).send({ success: "Biodata updated successfully" });
  } catch (error) {
    console.log(error);
    res.status(400).send({ error });
  }
};

const getInfluencerDetails = async (req, res) => {
  try {
    const id = req.id;
    const result = await userService.getInfluencerDetails(id);
    res.status(200).send({ result });
  } catch (error) {
    console.log(error);
    res.status(400).send({ error });
  }
};

const addInfluencerPaymentMode = async (req, res) => {
  try {
    await publicSchema.addInfluencerPaymentMode_post_schema.validateAsync(
      req.body
    );
    const id = req.id;
    const result = await userService.addInfluencerPaymentMode(req.body, id);
    res.status(200).send({ success: "Account added successfully" });
  } catch (error) {
    console.log(error);
    res.status(400).send({ error });
  }
};

const influencerSocialAdd = async (req, res) => {
  try {
    await publicSchema.influencerSocialAdd_post_schema.validateAsync(req.body);
    const id = req.id;
    const result = await userService.influencerSocialAdd(req.body, id);
    res.status(200).send({ success: "Social link added successfully" });
  } catch (error) {
    console.log(error);
    res.status(400).send({ error });
  }
};

const influencerNotification = async (req, res) => {
  try {
    await publicSchema.influencerNotification_post_schema.validateAsync(
      req.body
    );
    const id = req.id;
    const result = await userService.influencerNotification(req.body, id);
    res
      .status(200)
      .send({ success: "Notification status updated successfully" });
  } catch (error) {
    console.log(error);
    res.status(400).send({ error });
  }
};
const getinfluencerdashboardEngagement = async (req, res) => {
  try {
    const id = req.id;
    console.log(id);
    const result = await userService.influencerdashboardEngagement(id);
    res.status(200).send({ result });
  } catch (error) {
    console.log(error);
    res.status(400).send({ error });
  }
};
const getInfluencerBadges = async (req, res) => {
  try {
    const id = req.id;
    console.log(req.id);
    // const id = req.body.id;
    console.log(id, "id");
    const result = await userService.getInfluencerBadges(id);
    console.log(result);
    res.status(200).send(result);
  } catch (err) {
    console.log(err);
    res.status(403).send({ error: err });
  }
};
module.exports = {
  updateInfluencerPerDetail,
  updateInfluencerCampaignCiteria,
  updateInfluencerBio,
  getInfluencerDetails,
  addInfluencerPaymentMode,
  influencerSocialAdd,
  influencerNotification,
  getinfluencerdashboardEngagement,
  getInfluencerBadges,
};
