import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import useQueryMutation from "../../hooks/useQueryMutation";
import { SET_LOADER } from "../../redux/actions";
import apiUrls from "../../apis/apis";
import moment from "moment";
import { checkStatusCount } from "../../utils/checkStatusCount";

export const Engagement = () => {
  const { getData } = useQueryMutation();
  const [days, setdays] = useState("30");
  const [details, setdetails] = useState([]);
  const handleChange = (event) => {
    setdays(event.target.value);
  };

  const today = moment().format("YYYY-MM-DD");
  const from_date = moment().subtract(days, "days").format("YYYY-MM-DD");

  // const getData = async () => {
  //   const result = await apiClient.get(apiUrls?.dashboard?.getEngagement);
  //   setdetails(result.data);
  // };
  const postData =
    days === "all"
      ? { id: 20 }
      : { id: 20, from_date: from_date, to_date: today };



  useEffect(() => {
    getData({
      url: apiUrls?.dashboard?.getEngagement,
      postData: postData,
      onSuccess: async (data) => {
        setdetails(data);
      },
      onFail: (err) => {
        console.log(err);
      },
    });
  }, [days]);

  const Objarr = details?.result;
  console.log(Objarr, "Objarr");

  return (
    <div class="col-xl-3 col-md-12 col-lg-6 pr-0 pl-xs-0">
      <div class="card custom-card crypto-card overflow-hidden br-0 mt-xs-65 br-g-1 mb-xs-5 rmv-shadow">
        <div class="bb-1">
          <div class="pt-3 pb-2 pl-40">
            <div class="row">
              <div class="col-sm-6">
                <h4 class="mb-0 heading">Engagement</h4>
              </div>
              <div class="col-sm-6 pull-right dropdown">
                <select
                  class="form-control select2"
                  name="lastdays"
                  value={days}
                  onChange={handleChange}
                >
                  <option value="30">Last 30 days</option>
                  <option value="60">Last 60 days</option>
                  <option value="90">Last 90 days</option>
                  <option value="all">All</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div class="row dashboard-top pt-4 pb-4 text-center cmr-0">
          <div class="col-sm-4 col-4 pd-0">
            <h6>ACTIVE</h6>

            <p>{checkStatusCount(Objarr, "active") || 0}</p>
          </div>
          <div class="col-sm-4 col-4 pd-0">
            <h6>ACCEPTED</h6>
            <p>{checkStatusCount(Objarr, "waitlist") || 0}</p>
          </div>
          <div class="col-sm-4 col-4 pd-0">
            <h6>CONFIRMED</h6>
            <p>{checkStatusCount(Objarr, "approved") || 0}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
