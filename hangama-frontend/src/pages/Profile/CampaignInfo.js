import { useSelector } from "react-redux";

export const CampaignInfo = ({ setCampaignModal }) => {
  const userDetails = useSelector(
    (state) => state?.commonReducer?.influencerDetails
  );
  return (
    <div class="card card-dashboard-calendar br-0 text-left pd-0 mt-2">
      <table class="table-striped table-myaccount">
        <thead class="bg-theme">
          <tr>
            <th>Campaign criteria</th>
            <th class="pull-right text-right">
              <button
                data-toggle="modal"
                data-target="#campaigncriteria"
                class="btn btn-white btn-icon-text"
                onClick={() => setCampaignModal(true)}
              >
                <i class="fe fe-edit me-2"></i> Edit
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Min Cash Payment</td>
            <td>{userDetails?.min_cash_payment || 0}</td>
          </tr>
          <tr>
            <td>Min Products value</td>
            <td>{userDetails?.min_product_payment || 0}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
