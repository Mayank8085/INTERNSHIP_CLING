import React from "react";
import { useDispatch } from "react-redux";
import { SET_USER_DATA,SET_LOADER } from "../pages/Login/actions";
import apiClient from "../apis/api-client";
import apiUrls from "../apis/apis";
import useQueryMutation from "./useQueryMutation"
const useUserHook = () => {
  const dispatch = useDispatch();
  const {getData} = useQueryMutation()
  const saveUserDetailsInRedux = async () => {
    dispatch({ type: SET_LOADER, payload: true });
    getData({

      url:apiUrls.profile.getDetails,
      onSuccess:(data) => {
        dispatch({
          type:SET_USER_DATA,
          payload:data?.result
        })
        dispatch({ type: SET_LOADER, payload: false});
      }
    })
  };
  return { saveUserDetailsInRedux };
};

export default useUserHook;
