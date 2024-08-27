import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import useQueryMutation from "../../hooks/useQueryMutation";
import { SET_LOADER } from "../../redux/actions";
import apiUrls from "../../apis/apis";
import useUserHook from "../../hooks/useUserHook";

export const CampaignsTable = ({ setShowModal }) => {
  const dispatch = useDispatch();
  const { getData } = useQueryMutation();
  const {saveUserDetailsInRedux} = useUserHook();
  const [details, setdetails] = useState([]);


  useEffect(() => {
    dispatch({ type: SET_LOADER, payload: true });
    getData({
      url: apiUrls?.campaigns?.getCampaigns,
      postData: {
        id: 2,
      },    
      onSuccess: async (data) => {
       setdetails(data);
       await saveUserDetailsInRedux();
        dispatch({ type: SET_LOADER, payload: false });

      },
      onFail: (err) => {
        dispatch({ type: SET_LOADER, payload: false });
      },
    });
  },[]);

  return (
    <div class="container-fluid">
      <div class="card card-dashboard-calendar text-center mb-2 ">
        <table class="table table-responsive table-bordered text-inputs-searching width-cstm text-left mt-2">
          <thead class="bg-info text-white campaigns-table">
            <tr>
              <th width="30px">#</th>
              <th>Campaign Name</th>
              <th>Offer Amount</th>
              <th>Campaign Amount</th>
              <th>Brand Name</th>
              <th width="150px">Start Date </th>
              <th width="150px">End Date </th>
              <th>Status</th>
              <th>Overview</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          
          {Object.values(details).map((detail) =>(
            

            <tr>
              <td>3</td>
              <td>
                <img
                  alt="avatar"
                  class="rounded-circle mr-2"
                  src={require("../../assets/img/influencer/mcd.png")}
                  width="20px;"
                />
               {detail?.camp_name}
              </td>
              <td>500</td>
              <td>130</td>
              <td>{detail?.product_name}</td>
              <td>{detail?.start_date}</td>
              <td>{detail?.end_date}</td>
              <td class="blue">Waitlist</td>
              <td>
                <a href="campaigns-overview.php" class="btn btn-success">
                  <i class="fas fa-edit"></i>
                </a>
              </td>
              <td>
                {" "}
                <button
                  class="btn btn-success"
                  data-toggle="modal"
                  data-target="#exampleModalLong1"
                  onClick={() => setShowModal(true)}
                >
                  <i class="fas fa-edit"></i>
                </button>
              </td>
            </tr>
          ))}

          </tbody>
          <tfoot>
            <tr>
              <th>
                <input
                  type="text"
                  class="form-control"
                  placeholder="#"
                  width="30px"
                />{" "}
              </th>
              <th>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Campaign Name"
                />
              </th>
              <th>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Offer Amount"
                />
              </th>
              <th>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Campaign Amount"
                />
              </th>
              <th>
                <select class="form-control">
                  <option value="">Brand Name</option>
                  <option value="Coca Cola">Coca Cola </option>
                  <option value="Burger King">Burger King </option>
                  <option value="McDonald's">McDonald's</option>
                  <option value="KFC">KFC</option>
                </select>
              </th>
              <th>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Start Date"
                  width="150px"
                />{" "}
              </th>
              <th>
                <input
                  type="text"
                  class="form-control"
                  placeholder="End Date"
                  width="150px"
                />
              </th>

              <th>
                <select class="form-control">
                  <option value="">Status</option>
                  <option value="Active">Active</option>
                  <option value="Completed">Completed</option>
                  <option value="Accepted">Accepted</option>
                </select>
              </th>
              <th>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Status"
                  disabled=""
                />{" "}
              </th>
              <th>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Status"
                  disabled=""
                />{" "}
              </th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};
