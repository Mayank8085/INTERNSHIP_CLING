import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import useQueryMutation from "../../hooks/useQueryMutation";

import apiUrls from "../../apis/apis";
import moment from "moment";

export const Earnings = () => {
  const { getData } = useQueryMutation();
  const [days, setdays] = useState("30");
  const [details, setdetails] = useState([]);
  const handleChange = (event) => {
    setdays(event.target.value);
  };

  const today = moment().format("YYYY-MM-DD");
  const from_date = moment().subtract(days, "days").format("YYYY-MM-DD");

  const postData =
    days === "all"
      ? { id: 57 }
      : { id: 57, from_date: from_date, to_date: today };
  

  useEffect(() => {
    getData({
      url: apiUrls?.dashboard?.getEarnings,
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
    <div class="col-xl-3 col-md-12 col-lg-6 pl-0 pr-0 pr-xs-0">
      <div class="card custom-card crypto-card overflow-hidden br-0 mb-xs-5 br-g-1 rmv-shadow">
        <div class="bb-1">
          <div class="pt-3 pb-2 pl-40">
            <div class="row">
              <div class="col-sm-6">
                <h4 class="mb-0 heading">Earnings</h4>
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
            <h6>TOTAL</h6>
            <p>{Objarr?.[1]?.earning_payment || 0}</p>
          </div>
          <div class="col-sm-4 col-4 pd-0">
            <h6>PROCESSED</h6>
            <p class="green">{Objarr?.[0]?.total_payment || 0}</p>
          </div>
          <div class="col-sm-4 col-4 pd-0">
            <h6>BALANCE</h6>
            <p class="yellow">{Objarr?.[1]?.earning_payment-Objarr?.[0]?.total_payment || 0}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
