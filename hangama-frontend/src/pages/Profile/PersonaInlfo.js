import moment from "moment";
import { useSelector } from "react-redux";
export const PersonalInfo = ({ setShowPersonalInfoModal }) => {
  const userDetails = useSelector(
    (state) => state?.commonReducer?.influencerDetails
  );

  return (
    <div class="card card-dashboard-calendar br-0 text-left pd-0">
      <table class="table-striped table-myaccount">
        <thead class="bg-theme">
          <tr>
            <th>Personal Information</th>
            <th class="pull-right text-right">
              <button
                class="btn btn-white btn-icon-text"
                data-toggle="modal"
                data-target="#editprofile"
                onClick={() => setShowPersonalInfoModal(true)}
              >
                <i class="fe fe-edit me-2"></i> Edit
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="strong">Profile Photos </td>
            <td>
              <img
                alt="avatar"
                src={require("../../assets/img/users/1.jpg")}
                width="30px"
                class="img-circle"
              />
            </td>
          </tr>
          <tr>
            <td class="strong">First Name</td>
            <td>{userDetails?.first_name}</td>
          </tr>
          <tr>
            <td class="strong">Last Name</td>
            <td>{userDetails?.last_name}</td>
          </tr>
          <tr>
            <td class="strong">Email </td>
            <td>{userDetails?.email}</td>
          </tr>

          <tr>
            <td class="strong">Age </td>
            <td>{moment(userDetails?.dob)?.format("DD/MM/YYYY")}</td>
          </tr>
          <tr>
            <td class="strong">Mobile Phone No.</td>
            <td>{userDetails?.mobile_no}</td>
          </tr>
          <tr>
            <td class="strong">Whatsapp No.</td>
            <td>{userDetails?.whatsapp_no}</td>
          </tr>
          <tr>
            <td class="strong">Country</td>
            <td>India</td>
          </tr>
          <tr>
            <td class="strong">State / Province</td>
            <td>uttar pradesh</td>
          </tr>
          <tr>
            <td class="strong">City</td>
            <td>lucknow</td>
          </tr>
          <tr>
            <td class="strong">Zip / Postal Code</td>
            <td>{userDetails?.zip_code}</td>
          </tr>
          <tr>
            <td class="strong">Timezone</td>
            <td>(GMT+05:30) Asia/Kolkata</td>
          </tr>
          <tr>
            <td class="strong">Gender</td>
            <td>{userDetails?.gender}</td>
          </tr>
          <tr>
            <td class="strong">Languages</td>
            <td>{userDetails.languages || "English"}</td>
          </tr>
          <tr>
            <td class="strong">Specialities</td>
            <td>Electronics &amp; Apps, Insurance, Marketing, Shoes</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
