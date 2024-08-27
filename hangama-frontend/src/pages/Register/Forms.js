import { Link, useHistory } from "react-router-dom";
import { Formik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import { SET_LOADER } from "../../redux/actions";
import useQueryMutation from "../../hooks/useQueryMutation";
import apiUrls from "../../apis/apis";
import { localStorageConstants } from "../../utils/constants";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import "../../pages/Login/styles.css";
const ValidationSchemaBrand = Yup.object({
  f_name: Yup.string().required(),
  l_name: Yup.string().required(),
  email_id: Yup.string().email().required(),
  password: Yup.string().required(),
  web_url: Yup.string().required(),
});

export const BrandRegister = () => {
  const [getError, setError] = React.useState({});
  const history = useHistory();
  const dispatch = useDispatch();
  const { getData } = useQueryMutation();
  const [error, setErrors] = useState(null);
  return (
    <div className="description-wrap">
      <div className="aloa-content">
        <div className="aloa-header">
          <ul
            className="social-media-icons-login justify-content-center "
            style={{ visibility: "hidden" }}
          >
            <li>
              <a className="facebook" href="#">
                <i className="lab la-facebook-f mr-2"></i>Facebook
              </a>
            </li>
            <li>
              <a className="twitter" href="#">
                <i className="lab la-twitter mr-2"></i>Twitter
              </a>
            </li>
            <li>
              <a className="youtube" href="#">
                <i className="lab la-google mr-2"></i>Youtube
              </a>
            </li>
          </ul>
        </div>
        <div className="aloa-form">
          <Formik
            initialValues={{
              user_type_id: 2,
              f_name: "",
              l_name: "",
              email_id: "",
              web_url: "",
              country_code: 91,
              // phone_no: "",
              // Referral_code: "",
              password: "",
            }}
            onSubmit={(values) => {
              dispatch({ type: SET_LOADER, payload: true });
              getData({
                url: apiUrls?.auth?.signup,
                postData: {
                  user_type_id: 2,
                  f_name: values?.f_name,
                  l_name: values?.l_name,
                  email_id: values?.email_id,
                  web_url: values?.web_url,
                  country_code: 91,
                  // phone_no: values,
                  // Referral_code: values,
                  password: values?.password,
                },
                onSuccess: (data) => {
                  localStorage.setItem(
                    localStorageConstants.accessToken,
                    data?.token
                  );
                  dispatch({ type: SET_LOADER, payload: false });
                  history?.push("/dashboard");
                },
                onFail: (err) => {
                  console.log(err, "setError");
                  setErrors("Error In connecting Server");
                },
              });
            }}
            validationSchema={ValidationSchemaBrand}
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
                {/* <pre>{JSON.stringify(errors, null, 2)}</pre> */}
                <div className="form-group">
                  <div className="">
                    <input
                      type="text"
                      id="brandname"
                      className="form-control"
                      name="f_name"
                      placeholder="First Name"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.f_name}
                    />
                  </div>
                  <p className="error-message">
                    {errors.f_name && touched.f_name && errors.f_name}
                  </p>
                  {/* {getError.f_name != "" && (
                    <span> {getError.f_name}</span>
                  )} */}
                </div>
                <div className="form-group">
                  <div className="">
                    <input
                      type="text"
                      id="brandname"
                      className="form-control"
                      name="l_name"
                      placeholder="Last Name"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.l_name}
                    />
                  </div>
                  <p className="error-message">
                    {errors.l_name && touched.l_name && errors.l_name}
                  </p>
                </div>

                <div className="form-group">
                  <div className="">
                    <input
                      type="text"
                      className="form-control"
                      name="email_id"
                      placeholder="Official Email ID"
                      required="required"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email_id}
                    />
                    <p className="error-message">
                      {errors.email_id && touched.email_id && errors.email_id}
                    </p>
                  </div>
                </div>

                <div className="form-group">
                  <div className="">
                    <input
                      type="text"
                      className="form-control"
                      name="web_url"
                      placeholder="Website URL"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.web_url}
                    />
                    <p className="error-message">
                      {errors.web_url && touched.web_url && errors.web_url}
                    </p>
                  </div>
                </div>
                <div className="form-group">
                  <div className="">
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      placeholder="Password"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.password}
                    />
                    <p className="error-message">
                      {errors.password && touched.password && errors.password}
                    </p>
                  </div>
                </div>
                <div className="form-group">
                  <div className="">
                    <input
                      type="password"
                      className="form-control"
                      name="confirmpassword"
                      placeholder="Confirm Password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.confirmpassword}
                    />
                    {getError.confirmpasswordError != "" && (
                      <span> {getError.confirmpasswordError}</span>
                    )}
                    {getError.passwordmatch != "" && (
                      <span> {getError.passwordmatch}</span>
                    )}
                  </div>
                  <p className="error-message">{error ? error : null}</p>
                </div>

                <div className="form-group">
                  <button
                    className="aloa-btn-fill text-center"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Sign Up
                  </button>
                </div>
              </form>
            )}
          </Formik>
        </div>
        <div className="aloa-footer">
          <div className="">
            <p>
              Already have an account?
              <Link to="/login" className="switcher-text2">
                <b>Log In</b>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ValidationSchemaInfluencer = Yup.object({
  f_name: Yup.string().required(),
  l_name: Yup.string().required(),
  email_id: Yup.string().email().required(),
  password: Yup.string().required(),
  phonenumber: Yup.string().required(),
});

export const InfluencerRegister = () => {
  const [getError, setError] = React.useState({});
  const history = useHistory();
  const dispatch = useDispatch();
  const { getData } = useQueryMutation();
  const [error, setErrors] = useState(null);

  return (
    <div className="description-wrap">
      <div className="aloa-content">
        <div className="aloa-header">
          <ul
            class="social-media-icons-login justify-content-center "
            style={{}}
          >
            <li>
              <a
                class="youtube"
                href={`${process.env.REACT_APP_API_URL}/auth/google`}
              >
                <i class="lab la-google mr-2"></i>Google
              </a>
            </li>
            <li>
              <a
                class="facebook"
                href={`${process.env.REACT_APP_API_URL}/auth/facebook`}
              >
                <i class="lab la-facebook-f mr-2"></i>Facebook
              </a>
            </li>
            <li>
              <a class="twitter" href="#">
                <i class="lab la-twitter mr-2"></i>Twitter
              </a>
            </li>
            {/* <li>
              <a class="youtube" href="#">
                <i class="lab la-google mr-2"></i>Youtube
              </a>
            </li> */}
          </ul>
        </div>
        <div className="aloa-form">
          <Formik
            initialValues={{
              user_type_id: 1,
              f_name: "",
              l_name: "",
              email_id: "",
              // web_url:"" ,
              country_code: 91,
              phone_no: "",
              // Referral_code: "",
              password: "",
            }}
            onSubmit={(values) => {
              dispatch({ type: SET_LOADER, payload: true });
              getData({
                url: apiUrls?.auth?.signup,
                postData: {
                  user_type_id: 1,
                  f_name: values?.f_name,
                  l_name: values?.l_name,
                  email_id: values?.email_id,
                  // web_url:values?.web_url,
                  country_code: 1,
                  phone_no: values?.phonenumber,
                  // Referral_code: values,
                  password: values?.password,
                },
                onSuccess: (data) => {
                  localStorage.setItem(
                    localStorageConstants.accessToken,
                    data?.token
                  );
                  dispatch({ type: SET_LOADER, payload: false });
                  history?.push("/dashboard");
                  toast("Successfully registered");
                },
                onFail: (err) => {
                  console.log(err, "setError");
                  setErrors("Error");
                },
              });
            }}
            validationSchema={ValidationSchemaInfluencer}
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
                {/* <pre>{JSON.stringify(errors, null, 2)}</pre> */}
                <div className="form-group">
                  <div className="">
                    <input
                      type="text"
                      id="influencername"
                      className="form-control"
                      name="f_name"
                      placeholder="Influencer first Name"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.f_name}
                    />
                  </div>
                  <p className="error-message">
                    {errors.f_name && touched.f_name && errors.f_name}
                  </p>
                </div>
                <div className="form-group">
                  <div className="">
                    <input
                      type="text"
                      id="influencername"
                      className="form-control"
                      name="l_name"
                      placeholder="Influencer last Name"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.l_name}
                    />
                  </div>
                  <p className="error-message">
                    {errors.l_name && touched.l_name && errors.l_name}
                  </p>
                </div>

                <div className="form-group">
                  <div className="">
                    <input
                      type="text"
                      className="form-control"
                      name="email_id"
                      placeholder="Official Email ID"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email_id}
                    />
                    <p className="error-message">
                      {errors.email_id && touched.email_id && errors.email_id}
                    </p>
                  </div>
                </div>

                <div className="form-group">
                  <div className="">
                    <input
                      type="text"
                      className="form-control"
                      name="phonenumber"
                      placeholder="phone number"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.phonenumber}
                    />
                    <p className="error-message">
                      {errors.phonenumber &&
                        touched.phonenumber &&
                        errors.phonenumber}
                    </p>
                  </div>
                </div>
                <div className="form-group">
                  <div className="">
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      placeholder="Password"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.password}
                    />
                    <p className="error-message">
                      {errors.password && touched.password && errors.password}
                    </p>
                  </div>
                </div>
                <div className="form-group">
                  <div className="">
                    <input
                      type="password"
                      className="form-control"
                      name="confirmpassword"
                      placeholder="Confirm Password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.confirmpassword}
                    />
                    {getError.confirmpasswordError != "" && (
                      <span> {getError.confirmpasswordError}</span>
                    )}
                    {getError.passwordmatch != "" && (
                      <span> {getError.passwordmatch}</span>
                    )}
                  </div>
                  <p className="error-message">{error ? error : null}</p>
                </div>

                <div className="form-group">
                  <button
                    className="aloa-btn-fill text-center"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Sign Up
                  </button>
                </div>
              </form>
            )}
          </Formik>
        </div>
        <div className="aloa-footer">
          <div className="">
            <p>
              Already have an account?
              <Link to="/login" className="switcher-text2">
                <b>Log In</b>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
