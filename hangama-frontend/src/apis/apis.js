import { localStorageConstants } from "../utils/constants";

let baseUrlWithSlash = `${process.env.REACT_APP_API_URL}/`;
console.log("baseUrlWithSlash", baseUrlWithSlash);
const apiUrls = {
  auth: {
    signup: "api/v1/signup",
    signin: "api/v1/signin",
  },
  profile: {
    editCampaign: "api/v1/update_influencer_campaign_criteria",
    editProfile: "api/v1/update_influencer_per_detail",
    getDetails: "api/v1/get_influencer_details",
    editPayment: "api/v1/influencer_add_payment_mode",
    editSocial: "api/v1/update_social_add",
    editBio: "api/v1/update_influencer_bio",
  },
  campaigns: {
    getCampaigns: "api/v1/single_campaign_details",
  },
  dashboard: {
    getEngagement: "api/v1/influencer_dashboard_engagement/influencer",
    getInfluBadges: "api/v1/influencer_badges/influencer/17",
    getTopFiveEngagement:
      "api/v1/influencer_dashboard_engagement_details/influencer/:id",
    getEarnings :"api/v1/influencer_dashboard_earnings/influencer",
  },
};

export { baseUrlWithSlash as apiBaseUrl };
export default apiUrls;
