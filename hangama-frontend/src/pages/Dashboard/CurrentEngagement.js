import Coco from "../../assets/img/influencer/coco.png";
import Burger from "../../assets/img/influencer/burger.png";
import Mcd from "../../assets/img/influencer/mcd.png";
import Kfc from "../../assets/img/influencer/kfc.png";
import { useState } from "react";
import apiClient from "../../apis/api-client";
import apiUrls from "../../apis/apis";
import { useEffect } from "react";
import moment from "moment/moment";
export const CurrentEngagement = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const engagements = await apiClient.get(
      apiUrls.dashboard.getTopFiveEngagement
    );
    setData(engagements.data);
    console.log(engagements.data, "troyesad");
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div class="card custom-card card-dashboard-calendar pb-4">
      <label class="main-content-label mb-2 pt-1">Current Engagement</label>
      <table class="table table-hover m-b-0 transcations mt-2">
        <tbody>
          {data.map((engagement) => {
            console.log(engagement);
            return (
              <tr>
                <td class="wd-5p">
                  <div class="main-img-user avatar-md">
                    {" "}
                    <img
                      alt="avatar"
                      class="rounded-circle mr-3"
                      src={Coco}
                    />{" "}
                  </div>
                </td>
                <td>
                  <div class="d-flex align-middle ml-3">
                    <div class="d-inline-block">
                      <h6 class="mb-1">{engagement.camp_name}</h6>
                      <p class="mb-0 tx-13 green">
                        <b>{engagement.status}</b>
                      </p>
                    </div>
                  </div>
                </td>
                <td class="text-right">
                  <div class="d-inline-block">
                    <h6 class="mb-2 tx-15 font-weight-semibold">{`$${engagement.min_offer_price}`}</h6>
                    <p class="mb-0 tx-11 text-muted">
                      {moment(engagement.start_date).format("DD-MM-YYYY")}
                    </p>
                  </div>
                </td>
              </tr>
            );
          })}
          {/* <tr>
            <td class="wd-5p">
              <div class="main-img-user avatar-md">
                {" "}
                <img alt="avatar" class="rounded-circle mr-3" src={Coco} />{" "}
              </div>
            </td>
            <td>
              <div class="d-flex align-middle ml-3">
                <div class="d-inline-block">
                  <h6 class="mb-1">Coca Cola Zero Calories</h6>
                  <p class="mb-0 tx-13 green">
                    <b>Active</b>
                  </p>
                </div>
              </div>
            </td>
            <td class="text-right">
              <div class="d-inline-block">
                <h6 class="mb-2 tx-15 font-weight-semibold">$20</h6>
                <p class="mb-0 tx-11 text-muted">8 Jan 2022</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="wd-5p">
              <div class="main-img-user avatar-md">
                {" "}
                <img
                  alt="avatar"
                  class="rounded-circle mr-3"
                  src={Burger}
                />{" "}
              </div>
            </td>
            <td>
              <div class="d-flex align-middle ml-3">
                <div class="d-inline-block">
                  <h6 class="mb-1">Burger King</h6>
                  <p class="mb-0 tx-13 green">
                    <b>Active</b>
                  </p>
                </div>
              </div>
            </td>
            <td class="text-right">
              <div class="d-inline-block">
                <h6 class="mb-2 tx-15 font-weight-semibold">$12</h6>
                <p class="mb-0 tx-11 text-muted">9 Jan 2022</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="wd-5p">
              <div class="main-img-user avatar-md">
                {" "}
                <img alt="avatar" class="rounded-circle mr-3" src={Mcd} />{" "}
              </div>
            </td>
            <td>
              <div class="d-flex align-middle ml-3">
                <div class="d-inline-block">
                  <h6 class="mb-1">McDonald's</h6>
                  <p class="mb-0 tx-13 yellow">
                    <b>Accepted </b>
                  </p>
                </div>
              </div>
            </td>
            <td class="text-right">
              <div class="d-inline-block">
                <h6 class="mb-2 tx-15 font-weight-semibold">$5</h6>
                <p class="mb-0 tx-11 text-muted">10 Jan 2022</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="wd-5p">
              <div class="main-img-user avatar-md">
                {" "}
                <img alt="avatar" class="rounded-circle mr-3" src={Kfc} />{" "}
              </div>
            </td>
            <td>
              <div class="d-flex align-middle ml-3">
                <div class="d-inline-block">
                  <h6 class="mb-1">KFC</h6>
                  <p class="mb-0 tx-13 blue">
                    <b>Completed</b>
                  </p>
                </div>
              </div>
            </td>
            <td class="text-right">
              <div class="d-inline-block">
                <h6 class="mb-2 tx-15 font-weight-semibold">$8</h6>
                <p class="mb-0 tx-11 text-muted">11 Jan 2022</p>
              </div>
            </td>
          </tr> */}
        </tbody>
      </table>
      <a
        href="campaigns.php"
        class="btn ripple btn-outline-primary btn-rounded text-cente"
      >
        View All
      </a>
    </div>
  );
};
