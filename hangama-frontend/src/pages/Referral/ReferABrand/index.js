import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Footer } from "../../components/Footer";
import { AdminPanelLayout } from "../../layouts/admin-panel";
import { checkActivePage } from "../../store/activePageSlice";
import { AddReferral } from "./AddReferral";
import "./referralBrand.css";
import { ReferralCompany } from "./ReferralCompany";
import { ReferralPart } from "./ReferralPart";
import { TopCards } from "./TopCards";

export const ReferralBrand = () => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkActivePage("refer"));
  }, [dispatch]);
  return (
    <AdminPanelLayout>
      <div class="container-fluid pl-0 pr-15">
        <TopCards />
      </div>
      <div class="container-fluid">
        <div class="card card-dashboard-calendar text-center mb-2 ">
          <ReferralPart setShowModal={setShowModal} />
          <div class="row">
            <div class="col-sm-12 col-md-6">
              <div class="dataTables_length" id="DataTables_Table_0_length">
                <label>
                  Show Entries{" "}
                  <select
                    name="DataTables_Table_0_length"
                    aria-controls="DataTables_Table_0"
                    class="form-control form-control-sm"
                  >
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                  </select>
                </label>
              </div>
            </div>
            <div class="col-sm-12 col-md-6">
              <div id="DataTables_Table_0_filter" class="dataTables_filter">
                <label>
                  Search:
                  <input
                    type="search"
                    class="form-control form-control-sm"
                    placeholder="Name of Company"
                  />
               </label>
              </div>
            </div>
          </div>
          <ReferralCompany />
        </div>
      </div>
      {/* </div> */}
      <AddReferral showModal={showModal} setShowModal={setShowModal} />
      <Footer />
    </AdminPanelLayout>
  );
};
