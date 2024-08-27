import { useSelector } from "react-redux";

export const AboutInfo = ({ setAboutModal }) => {
  const userDetails = useSelector(
    (state) => state?.commonReducer?.influencerDetails
  );
  console.log("this is my userDetails", userDetails);
  return (
    <div class="card card-dashboard-calendar br-0 text-left pd-0 mt-2">
      <table class="table-striped table-myaccount">
        <thead class="bg-theme">
          <tr>
            <th>About You</th>
            <th class="pull-right text-right">
              <button
                data-toggle="modal"
                data-target="#bio"
                class="btn btn-white btn-icon-text"
                onClick={() => setAboutModal(true)}
              >
                <i class="fe fe-edit me-2"></i> Edit
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Bio</td>
            <td>{userDetails?.bio || ""}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
