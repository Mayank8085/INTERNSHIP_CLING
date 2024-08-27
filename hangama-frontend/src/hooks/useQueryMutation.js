import { useState } from "react";
import apiClient from "../apis/api-client";

const useQueryMutation = (dispatch = () => {}) => {
  const [data, setData] = useState();
  const [error, setError] = useState();

  const getData = async (params) => {
    const {
      url,
      postData = {},
      onSuccess = () => {},
      onFail = () => {},
      giveFirst = false,
    } = params;
    try {
      const { data: apiData = {} } = postData 
      ? await apiClient.post(url, postData)
      : await apiClient.get(url);
      setData(giveFirst ? apiData?.data[0] : apiData?.data);
      if (apiData) {
        onSuccess(giveFirst ? apiData?.data[0] : apiData);
      } else {
        onFail(apiData?.data);
      }
      return giveFirst ? apiData?.data[0] : apiData?.data;
    } catch (err) {
      onFail(err);
      setError(err);
    } 
  };

  return {
    getData,
    data,
    setData,
    error,
    setError,
  };
};

export default useQueryMutation;
