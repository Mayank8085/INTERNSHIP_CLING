import { Formik } from "formik";
import useQueryMutation from "../../hooks/useQueryMutation";
import apiUrls from "../../apis/apis";
import { toast } from "react-toastify";
import * as Yup from "yup";
import useUserHook from "../../hooks/useUserHook";
import { useSelector } from "react-redux";
import moment from "moment/moment";

export const PersonalInfoModal = ({
  personalInfoModal,
  setShowPersonalInfoModal,
}) => {
  const { getData } = useQueryMutation();
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const personalInfoValidation = Yup.object({
    whatsapp_no: Yup.string()
      .required("required")
      .matches(phoneRegExp, "Phone number is not valid")
      .min(10, "Phone number is not valid")
      .max(10, "Phone number is not valid"),

    // first_name: Yup.string().required("required"),
    // last_name: Yup.string().required("required"),
    // email: Yup.string().email("Invalid email address").required("required"),
    // state_code: Yup.number().required("required"),
    gender: Yup.string().required("required"),
  });
  const { saveUserDetailsInRedux } = useUserHook();
  const influencer = useSelector(
    (state) => state?.commonReducer?.influencerDetails
  );

  console.log(influencer, "influencer");

  return (
    <div
      class={`${
        personalInfoModal ? "opem-modal fade show modal-bg" : "modal fade"
      }`}
      id="exampleModalLong1"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLongTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <Formik
            initialValues={{
              profile_photo_path: "",
              first_name: influencer.first_name || "",
              last_name: influencer.last_name || "",
              dob: influencer.dob || "",
              whatsapp_no: influencer.mobile_no || "",
              country_code: 1,
              state_code: 1,
              city_code: 1,
              postal_code: influencer.zip_code || "",
              timezone: influencer.time_zone || "",
              gender: influencer.gender || "",
              specialities: "",
            }}
            onSubmit={(values) => {
              console.log(values?.gender, "influencer gender");
              values.dob = moment(values.dob).format("YYYY-MM-DD");
              getData({
                url: apiUrls?.profile.editProfile,
                postData: {
                  profile_photo_path: values?.profile_photo_path,
                  first_name: values?.first_name,
                  last_name: values?.last_name,
                  dob: values?.dob,
                  whatsapp_no: values?.whatsapp_no.toString(),
                  country_code: 1,
                  state_code: 1,
                  city_code: 1,
                  postal_code: values?.postal_code,
                  timezone: "asia",
                  gender: values?.gender,
                  specialities: values?.specialities,
                },
                onSuccess: async (data) => {
                  setShowPersonalInfoModal(false);
                  toast("Data updated Successfully");
                  await saveUserDetailsInRedux();
                },
                onFail: (err) => {},
              });
            }}
            validationSchema={personalInfoValidation}
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
                  <h4>Personal Information</h4>
                  <div class="row pl-4 pr-4">
                    <div class="col-sm-4">
                      <label>Profile Photos </label>
                      <input
                        type="file"
                        class="form-control"
                        name="profile_photo_path"
                        value={values?.profile_photo_path}
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                    </div>
                    <div class="col-sm-4">
                      <label>First Name </label>
                      <input
                        type="text"
                        class="form-control"
                        name="first_name"
                        value={values?.first_name}
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                    </div>
                    <div class="col-sm-4">
                      <label>Last Name </label>
                      <input
                        type="text"
                        class="form-control"
                        name="last_name"
                        value={values?.last_name}
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                    </div>
                    <div class="col-sm-4">
                      <label>DOB</label>
                      <input
                        type="date"
                        class="form-control"
                        name="dob"
                        value={values?.dob}
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                    </div>
                    <div class="col-sm-4">
                      <label>Mobile Phone No. </label>
                      <input
                        type="number"
                        class="form-control"
                        name="whatsapp_no"
                        value={values?.whatsapp_no}
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                      <p className="error-message">
                        {errors.whatsapp_no &&
                          touched.whatsapp_no &&
                          errors.whatsapp_no}
                      </p>
                    </div>
                    <div class="col-sm-4">
                      <label>Timezone </label>
                      <select class="form-control">
                        <option>(GMT+05:30) Asia/Kolkata</option>
                      </select>
                    </div>
                    <div class="col-sm-4">
                      <label>Country</label>
                      <select class="form-control">
                        <option>Asia</option>
                        <option>UK</option>
                      </select>
                    </div>
                    <div class="col-sm-4">
                      <label>State / Province </label>
                      <select class="form-control">
                        <option>uttar pradesh</option>
                      </select>
                    </div>
                    <div class="col-sm-4">
                      <label>City </label>
                      <select class="form-control">
                        <option>lucknow</option>
                      </select>
                    </div>
                    <div class="col-sm-4">
                      <label>Zip / Postal Code</label>
                      <input
                        type="text"
                        class="form-control"
                        name="postal_code"
                        value={values?.postal_code}
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                    </div>
                    <div class="col-sm-4">
                      <label>Gender</label>
                      <select
                        class="form-control select2 select2-hidden-accessible"
                        multiple=""
                        data-select2-id="100"
                        tabindex="-1"
                        aria-hidden="true"
                        value={values?.gender}
                        name="gender"
                        onBlur={handleBlur}
                        onChange={handleChange}
                      >
                        <option value="male" data-select2-id="Bahamas">
                          male
                        </option>
                        <option value="female" data-select2-id="Bahamas">
                          female
                        </option>
                        <option value="other" data-select2-id="Bahamas">
                          other
                        </option>
                      </select>
                      <p className="error-message">
                        {errors.gender && touched.gender && errors.gender}
                      </p>
                    </div>
                    {/* <div class="col-sm-4">
                      <label>Languages</label>
                      <select class="form-control">
                        <option>Hindi</option>
                        <option>English</option>
                      </select>
                    </div> */}
                    <div class="col-sm-12">
                      <label>Specialities </label>
                      <select
                        class="form-control select2 select2-hidden-accessible"
                        multiple=""
                        data-select2-id="100"
                        tabindex="-1"
                        aria-hidden="true"
                        value={values?.specialities}
                        name="specialities"
                        onBlur={handleBlur}
                        onChange={handleChange}
                      >
                        <option
                          selected=""
                          value="Electronics"
                          data-select2-id="101"
                        >
                          Electronics
                        </option>
                        <option value="Apps" data-select2-id="Bahamas">
                          Apps
                        </option>
                        <option value="Insurance" data-select2-id="Bahrain">
                          Insurance
                        </option>
                      </select>
                    </div>
                    {/* <div class="col-sm-12">
                        <label>Bio </label>
                        <textarea class="form-control" name="editor1" id="editor1" rows="4" cols="40"></textarea>
                     </div> */}
                  </div>
                </div>
                <div class="modal-footer mt-2">
                  <button
                    type="button"
                    class="btn btn-danger"
                    data-dismiss="modal"
                    onClick={() => setShowPersonalInfoModal(false)}
                  >
                    Cnacel
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
