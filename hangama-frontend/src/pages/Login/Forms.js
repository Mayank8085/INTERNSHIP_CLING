import { Link, useHistory, Redirect, useParams } from "react-router-dom";
import { Formik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import useQueryMutation from "../../hooks/useQueryMutation";
import { SET_LOADER } from "../../redux/actions";
import apiUrls from "../../apis/apis";
import apiBaseUrl from "../../apis/apis";
import { localStorageConstants } from "../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import "./styles.css";
import useUserHook from "../../hooks/useUserHook";
const LoginValidationSchema = Yup.object({
  email: Yup.string().email().required(),
  password: Yup.string().required(),
});

export const BrandLogin = () => {
  const history = useHistory();
  const { isLoading, isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { getData } = useQueryMutation();
  const { saveUserDetailsInRedux } = useUserHook();
  const [error, setError] = useState(null);

  return (
    <div class="description-wrap">
      <div class="aloa-content">
        <div class="aloa-header">
          <ul class="social-media-icons-login justify-content-center">
            <li>
              <a class="facebook" href="#">
                <i class="lab la-facebook-f mr-2"></i>Facebook
              </a>
            </li>
            <li>
              <a class="twitter" href="#">
                <i class="lab la-twitter mr-2"></i>Twitter
              </a>
            </li>
            <li>
              <a class="youtube" href="#">
                <i class="lab la-google mr-2"></i>Youtube
              </a>
            </li>
          </ul>
          <div class="aloa-style-line">
            <div class="">
              <h3>Or Login With</h3>
            </div>
          </div>
        </div>
        <div class="aloa-form">
          <Formik
            initialValues={{ email: "", password: "" }}
            validate={(values) => {
              const errors = {};
              if (!values.email) {
                errors.email = "Email is Required";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              }
              return errors;
            }}
            onSubmit={(values) => {
              dispatch({ type: SET_LOADER, payload: true });
              getData({
                url: apiUrls?.auth?.signin,
                postData: {
                  email_id: values.email,
                  password: values.password,
                },
                onSuccess: async (data) => {
                  localStorage.setItem(
                    localStorageConstants.accessToken,
                    data?.token
                  );
                  await saveUserDetailsInRedux();
                  dispatch({ type: SET_LOADER, payload: false });
                  history?.push("/dashboard");
                  toast("Login Success");
                },
                onFail: (err) => {
                  dispatch({ type: SET_LOADER, payload: false });
                  toast("Invalid username or password");
                  setError("Invalid username or password");
                },
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
                <div class="form-group">
                  <div class="">
                    <input
                      type="email"
                      id="email"
                      class="form-control"
                      name="email"
                      placeholder="Email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                    />
                    <p className="error-message">
                      {errors.email && touched.email && errors.email}
                    </p>
                  </div>
                  {/* {errors.email && touched.email && errors.email} */}
                </div>
                <div class="form-group">
                  <div class="">
                    <input
                      id="password"
                      type="password"
                      class="form-control"
                      name="password"
                      placeholder="Enter Your Password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                    />
                    {/* <i
                      toggle="#password"
                      class="las la-eye toggle-password field-icon"
                    ></i> */}
                  </div>
                  <p className="error-message">
                    {errors.password && touched.password && errors.password}
                  </p>
                  <p className="error-message">{error ? error : null}</p>
                </div>
                <div class="form-group">
                  <div class="">
                    <div class="aloa-checkbox-area">
                      <div class="checkbox">
                        <input id="checkbox1" type="checkbox" />
                        <label for="checkbox1">Keep me logged in</label>
                      </div>
                      <Link to="/forgot-password" class="switcher-text">
                        Forgot Password
                      </Link>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <button
                    class="aloa-btn-fill text-center"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Log in
                  </button>
                </div>
              </form>
            )}
          </Formik>
        </div>

        <div class="aloa-footer">
          <div class="">
            <p>
              Don't have an account?
              <Link to="/register" class="switcher-text2">
                <b>Register</b>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const InfluencerLogin = () => {
  const history = useHistory();
  const { isLoading, isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { getData } = useQueryMutation();
  const [error, setError] = useState(null);
  const { saveUserDetailsInRedux } = useUserHook();
  console.log(process.env.REACT_APP_API_URL, "process.env.REACT_APP_API_URL");

  if (isLoggedIn) return <Redirect to="/dashboard" />;
  return (
    <div class="description-wrap">
      <div class="aloa-content">
        <div class="aloa-header">
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
          <div class="aloa-style-line">
            <div class="">
              <h3>Or Login With</h3>
            </div>
          </div>
        </div>
        <div class="aloa-form">
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={LoginValidationSchema}
            onSubmit={(values) => {
              dispatch({ type: SET_LOADER, payload: true });
              getData({
                url: apiUrls?.auth?.signin,
                postData: {
                  email_id: values.email,
                  password: values.password,
                },
                onSuccess: async (data) => {
                  dispatch({ type: SET_LOADER, payload: false });
                  localStorage.setItem(
                    localStorageConstants.accessToken,
                    data?.token
                  );
                  await saveUserDetailsInRedux();
                  dispatch({ type: SET_LOADER, payload: false });
                  history?.push("/dashboard");
                },
                onFail: (err) => {
                  dispatch({ type: SET_LOADER, payload: false });
                  toast("Invalid username or password");
                  setError("Invalid username or password");
                  //  window.location.reload()
                },
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
                <div class="form-group">
                  <div class="">
                    <input
                      type="email"
                      id="email"
                      class="form-control"
                      name="email"
                      placeholder="Email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                    />
                  </div>
                  <p className="error-message">
                    {errors.email && touched.email && errors.email}
                  </p>
                </div>
                <div class="form-group">
                  <div class="">
                    <input
                      id="password"
                      type="password"
                      class="form-control"
                      name="password"
                      placeholder="********"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                    />
                    {/* <i
                      toggle="#password"
                      class="las la-eye toggle-password field-icon "
                    ></i> */}
                  </div>
                  <p className="error-message">
                    {errors.password && touched.password && errors.password}
                  </p>
                  <p className="error-message">{error ? error : null}</p>
                </div>
                <div class="form-group">
                  <div class="">
                    <div class="aloa-checkbox-area">
                      <div class="checkbox">
                        <input id="checkbox1" type="checkbox" />
                        <label for="checkbox1">Keep me logged in</label>
                      </div>
                      <Link to="/forgot-password" class="switcher-text">
                        Forgot Password
                      </Link>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <button
                    class="aloa-btn-fill text-center"
                    type="submit"
                    disabled={isSubmitting || isLoading}
                  >
                    {isSubmitting || isLoading ? "Please wait" : "Log in"}
                  </button>
                </div>
              </form>
            )}
          </Formik>
        </div>
        <div class="aloa-footer">
          <div class="">
            <p>
              Don't have an account?
              <Link to="/register" class="switcher-text2">
                <b>Register</b>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
