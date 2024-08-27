const passport = require("passport");
const {
  signUp,
  signin,
  changePassword,
  socialSignup,
  socialSignin,
} = require("../controllers/auth");
const {
  getSingleCampaign,
  getTopFiveEngagement,
} = require("../controllers/campaign");
const {
  updateInfluencerCampaignCiteria,
  updateInfluencerPerDetail,
  updateInfluencerBio,
  getInfluencerDetails,
  addInfluencerPaymentMode,
  influencerSocialAdd,
  influencerNotification,
  getinfluencerdashboardEngagement,
  getInfluencerBadges,
} = require("../controllers/user");
const asyncMiddleware = require("../middlewares/asyncErrorhandler");

const router = require("express").Router();

router.post("/signup", asyncMiddleware(signUp));

router.post("/signin", asyncMiddleware(signin));

router.post("/change_password", asyncMiddleware(changePassword));

router.post("/social_signup", asyncMiddleware(socialSignup));

router.post("/social_signin", asyncMiddleware(socialSignin));

router.post(
  "/update_influencer_per_detail",
  asyncMiddleware(updateInfluencerPerDetail)
);

router.post(
  "/update_influencer_campaign_criteria",
  asyncMiddleware(updateInfluencerCampaignCiteria)
);

router.post("/update_influencer_bio", asyncMiddleware(updateInfluencerBio));

router.post("/get_influencer_details", asyncMiddleware(getInfluencerDetails));

router.post(
  "/influencer_add_payment_mode",
  asyncMiddleware(addInfluencerPaymentMode)
);

router.post("/update_social_add", asyncMiddleware(influencerSocialAdd));

router.post("/single_campaign_details", asyncMiddleware(getSingleCampaign));

router.post(
  "/influencer_notification",
  asyncMiddleware(influencerNotification)
);
router.get(
  "/influencer_dashboard_engagement/influencer/:id",
  asyncMiddleware(getinfluencerdashboardEngagement)
);

router.get(
  "/influencer_dashboard_engagement_details/influencer/:id",
  asyncMiddleware(getTopFiveEngagement)
);

router.get(
  "/influencer_badges/influencer/:id",
  asyncMiddleware(getInfluencerBadges)
);

module.exports = router;
