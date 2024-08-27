import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import useQueryMutation from "../../hooks/useQueryMutation";
import apiUrls from "../../apis/apis";
import { SET_LOADER } from "../../redux/actions";
import { toast } from "react-toastify";
import useUserHook from "../../hooks/useUserHook";

export const SocialModal = ({ socialModal, setSocialModal }) => {
  const { getData } = useQueryMutation();
  const { saveUserDetailsInRedux } = useUserHook();
  const dispatch = useDispatch();
  return (
    <div
      class={`${socialModal ? "opem-modal fade show modal-bg" : "modal fade"}`}
      id="social"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLongTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <Formik
            initialValues={{
              social_plateform: "",
              referance_tag: "",
              social_link: "",
            }}
            onSubmit={(values) => {
              dispatch({ type: SET_LOADER, payload: true });
              getData({
                url: apiUrls?.profile?.editSocial,
                postData: {
                  social_plateform: values?.social_plateform,
                  referance_tag: values?.referance_tag,
                  social_link: values?.social_link,
                },
                onSuccess: async (data) => {
                setSocialModal(false);
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
            }) => (
              <form onSubmit={handleSubmit}>
                <div class="modal-body pd-0 modals_body pd-8">
                  <h4>Social Accounts</h4>
                  <div class="row pl-4 pr-4">
                    <div class="col-sm-12">
                      <label>Social Platform </label>
                      <select
                        data-select2-id="100"
                        class="form-control"
                        value={values?.social_plateform}
                        name="social_plateform"
                        onBlur={handleBlur}
                        onChange={handleChange}
                      >
                        <option value="facbook" data-select2-id="Bahamas">
                          Facbook{" "}
                        </option>
                        <option value="twitter" data-select2-id="Bahamas">
                          Twitter{" "}
                        </option>
                        <option value="instagram" data-select2-id="Bahamas">
                          instagram{" "}
                        </option>
                      </select>
                    </div>
                    <div class="col-sm-12">
                      <label>Reference tag </label>
                      <input
                        id="referance_tage"
                        type="text"
                        class="form-control"
                        name="referance_tag"
                        value={values?.referance_tag}
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                    </div>
                    <div class="col-sm-12">
                      <label>Social acccount link</label>
                      <input
                        id="social_link"
                        type="text"
                        class="form-control"
                        name="social_link"
                        value={values?.social_link}
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                    </div>
                    <div class="col-sm-12 mt-2">
                      <table class="table-striped" width="100%;">
                        <tr>
                          <th>Social Platform</th>
                          <th>Reference tag</th>
                          <th>Social acccount link</th>
                          <th>Status</th>
                          {/* <!--    <th>Action</th> --> */}
                        </tr>
                        <tr>
                          <td>Facbook</td>
                          <td>Ajay</td>
                          <td>facbook.com/hungamainfluencers</td>
                          <td>
                            <button class="btn btn-danger">Unverified</button>
                          </td>
                    
                        </tr>
                        <tr>
                          <td>Twitter</td>
                          <td>Vijay</td>
                          <td>twitter.com/hungamainfluencers</td>
                          <td>
                            <button class="btn btn-success ">Verified</button>
                          </td>
                       
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>
                <div class="modal-footer mt-2">
                  <button
                    type="button"
                    class="btn btn-danger"
                    data-dismiss="modal"
                    onClick={() => setSocialModal(false)}
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
