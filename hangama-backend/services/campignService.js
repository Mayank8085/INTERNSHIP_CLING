const db = require("../database");

const campaignService = {
  getSingleCampaign: async (id) => {
    const query = `SELECT * FROM campaigns WHERE id = ${id}`;
    const result = await db.query(query);
    return result;
  },

  getTopFiveEngagement: async (id) => {
    const sql = `select * from campaign_influencer  left join campaigns on campaign_influencer.campaign_id=campaigns.id where campaign_influencer.influencer_id=29 order by updated_at desc limit 5`;
    console.log(sql);
    // const query = `SELECT campaigns.id,campaigns.title,campaigns.description,campaigns.image,campaigns.start_date,campaigns.end_date,campaigns.budget,campaigns.status,campaigns.created_at,campaigns.updated_at,COUNT(campaign_influencers.campaign_id) AS count FROM campaign_influencers LEFT JOIN campaigns ON campaign_influencers.campaign_id=campaigns.id WHERE campaign_influencers.influencer_id=${id} GROUP BY campaign_influencers.campaign_id ORDER BY count DESC LIMIT 5`;
    const result = await db.query(sql);
    return result;
  },
};

module.exports = campaignService;
