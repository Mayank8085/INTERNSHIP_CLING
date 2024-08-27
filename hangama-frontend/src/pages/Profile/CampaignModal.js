import { Formik } from "formik";
import useQueryMutation from "../../hooks/useQueryMutation";
import { useDispatch, useSelector } from "react-redux";
import { SET_LOADER } from "../../redux/actions";
import apiUrls from "../../apis/apis";
import { toast } from "react-toastify";
import useUserHook from "../../hooks/useUserHook";
export const CampaignModal = ({ campaignModal, setCampaignModal }) => {
  const { getData } = useQueryMutation();
  const { saveUserDetailsInRedux } = useUserHook();
  const dispatch = useDispatch();

  return (
    <div
      class={`${
        campaignModal ? "opem-modal fade show modal-bg" : "modal fade"
      }`}
      id="campaigncriteria"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLongTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <Formik
            initialValues={{
              min_cash_payment: "",
              min_product_value: "",
            }}
            onSubmit={(values) => {
              dispatch({ type: SET_LOADER, payload: true });
              getData({
                url: apiUrls?.profile?.editCampaign,
                postData: {
                  min_cash_payment: values?.min_cash_payment,
                  min_product_value: values?.min_product_value,
                },
                onSuccess: async (data) => {
                  setCampaignModal(false);
                  toast("Data updated Successfully");
                  await saveUserDetailsInRedux();
                  dispatch({ type: SET_LOADER, payload: false });
                },
                onFail: (err) => {},
              });
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
              <form onSubmit={handleSubmit}>
                <div class="modal-body pd-0 modals_body pd-8">
                  <h4>Campaign criteria</h4>
                  <div class="row pl-4 pr-4">
                    <div class="col-sm-6">
                      <label>Min Cash Payment</label>
                      <input
                        id="min_cash_payment"
                        type="number"
                        class="form-control"
                        name="min_cash_payment"
                        value={values?.min_cash_payment}
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                    </div>
                    <div class="col-sm-6">
                      <label>Min Products value</label>
                      <input
                        id="min_product_value"
                        type="number"
                        class="form-control"
                        name="min_product_value"
                        value={values?.min_product_value}
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div class="modal-footer mt-2">
                  <button
                    type="button"
                    class="btn btn-danger"
                    data-dismiss="modal"
                    onClick={() => setCampaignModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    class="btn btn-primary btn-icon-text my-2 me-2"
                    data-dismiss="modal"
                    style={{ background: "#2a76f4", border: 0 }}
                  >
                    Update
                  </button>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};
