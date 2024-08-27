const db = require("../database");
const {
  generateUpdateSql,
  generateInsertSql,
} = require("../utils/generateSql");
const moment = require("moment");
const JWT = require("jwt-simple");

const userService = {
  updateInfluencerPerDetail: async (
    {
      profile_photo_path,
      first_name,
      last_name,
      dob,
      whatsapp_no,
      country_code,
      state_code,
      city_code,
      postal_code,
      timezone,
      gender,
      language_id,
      // specialities,
    },
    id
  ) => {
    let userObj = {
      image_url: profile_photo_path,
      first_name,
      last_name,
      dob,
      whatsapp_no,
      country_id: country_code,
      state_id: state_code,
      city_id: city_code,
      zip_code: postal_code,
      time_zone: timezone,
      gender,
    };
    let details_influencer_obj = {
      user_id: id,
    };
    // if (specialities) {
    //   details_influencer_obj.Specialities = specialities;
    // }
    if (language_id) {
      details_influencer_obj.languages = language_id;
    }
    let updateUserSql = generateUpdateSql("users", userObj, `id=${id}`);
    const updatedUser = await db.query(updateUserSql);
    console.log(updateUserSql);
    return true;
  },

  updateInfluencerCampaignCiteria: async (
    { min_cash_payment, min_product_value },
    id
  ) => {
    const sql = generateUpdateSql(
      "details_influencer",
      {
        min_cash_payment: parseFloat(min_cash_payment),
        min_product_payment: parseFloat(min_product_value),
      },
      `user_id = ${id}`
    );
    console.log(sql);
    const result = await db.query(sql);
    console.log(result);
    return result;
  },

  updateInfluencerBio: async (data, id) => {
    const sql = generateUpdateSql("details_influencer", data, `user_id=${id}`);
    console.log(sql);
    const result = await db.query(sql);
    return result;
  },

  getInfluencerDetails: async (id) => {
    const sql = `select * from users left join details_influencer on users.id=details_influencer.user_id where users.id=${id}`;
    console.log(sql);
    const [result] = await db.query(sql);
    delete result.password;
    return result;
  },

  addInfluencerPaymentMode: async (
    { beneficiary_name, bank_name, account_no, ifsc_code, set_default, status },
    id
  ) => {
    const obj = {
      user_id: id,
      beneficiary_name,
      bank_name,
      account_no,
      ifsc_code,
      set_default,
      created_at: moment().format("YYYY-MM-DD HH:mm:ss"),
      is_active: 1,
    };
    const sql = generateInsertSql("influ_account", obj);
    console.log(sql);
    const result = await db.query(sql);
    return true;
  },

  influencerSocialAdd: async (
    { social_plateform, referance_tag, social_link },
    id
  ) => {
    const obj = {
      user_id: id,
      social_plateform,
      referance_tag,
      social_account_link: social_link,
      created_on: moment().format("YYYY-MM-DD HH:mm:ss"),
    };
    const sql = generateInsertSql("influ_social", obj);
    console.log(sql);
    const result = await db.query(sql);
    return true;
  },

  influencerNotification: async (
    {
      emails,
      transaction_status,
      new_message,
      marketplace_offers,
      push_subscriptions,
      status,
    },
    id
  ) => {
    const obj = {
      emails: emails,
      transaction_status: transaction_status,
      new_message: new_message,
      marketplace_offers: marketplace_offers,
      push_subscriptions: push_subscriptions,
    };

    const sql = generateUpdateSql("details_influencer", obj, `user_id=${id}`);
    console.log(sql);
    const result = await db.query(sql);
    return true;
  },
  influencerdashboardEngagement: async (id) => {
    const details = await db.query(
      `SELECT status,count(status) as countStatus FROM campaign_influencer where influencer_id =${id} Group BY status;`
    );
    return details;
  },
  getInfluencerBadges: async (id) => {
    console.log(id, "abcbac");
    const sql = `select * from influ_badges left join master_badges on influ_badges.badge_id=master_badges.id where influ_badges.earned_by=${id} LIMIT 10`;
    console.log(sql);
    const result = await db.query(sql);
    return result;
  },
};

module.exports = userService;
