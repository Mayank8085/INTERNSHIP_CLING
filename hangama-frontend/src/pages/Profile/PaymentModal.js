import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import useQueryMutation from "../../hooks/useQueryMutation";
import apiUrls from "../../apis/apis";
import { SET_LOADER } from "../../redux/actions"
import { toast } from "react-toastify";
import useUserHook from "../../hooks/useUserHook";
export const PaymentModal = ({ paymentModal, setPaymentModal }) => {
  const { getData } = useQueryMutation();
  const { saveUserDetailsInRedux } = useUserHook();
  const dispatch = useDispatch();

  return (
    <div
      class={`${paymentModal ? "opem-modal fade show modal-bg" : "modal fade"}`}
      id="payinformation"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLongTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <Formik
            initialValues={{
              beneficiary_name: "",
              bank_name: "",
              account_no: "",
              ifsc_code: "",
              set_default: "",
              status: "",
            }}
            onSubmit={(values) => {
              dispatch({ type: SET_LOADER, payload: true });
              getData({
                url: apiUrls?.profile?.editPayment,
                postData: {
                  beneficiary_name: values?.beneficiary_name,
                  bank_name: values?.bank_name,
                  account_no: values?.account_no,
                  ifsc_code: values?.ifsc_code,
                  set_default: 1,
                  status: 1,
                },
                onSuccess: async (data) => {
                  setPaymentModal(false);
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
                  <h4>Payment Information</h4>
                  <div class="row pl-4 pr-4">
                    <div class="col-sm-6">
                      <label>Beneficiary name</label>
                      <input
                        id="beneficiary_name"
                        type="text"
                        class="form-control"
                        name="beneficiary_name"
                        value={values?.beneficiary_name}
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                    </div>
                    <div class="col-sm-6">
                      <label>Bank name </label>
                      <input
                        id="bank_name"
                        type="text"
                        class="form-control"
                        name="bank_name"
                        value={values?.bank_name}
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                    </div>
                    <div class="col-sm-6">
                      <label>Account No. </label>
                      <input
                        id="account_no"
                        type="text"
                        class="form-control"
                        name="account_no"
                        value={values?.account_no}
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                    </div>
                    <div class="col-sm-6">
                      <label>IFSC code</label>
                      <input
                        id="ifsc_code"
                        type="text"
                        class="form-control"
                        name="ifsc_code"
                        value={values?.ifsc_code}
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
                    onClick={() => setPaymentModal(false)}
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
