import axios from "axios";
import { apiBaseUrl } from "./apis";
import axiosRetry from "axios-retry";
import {localStorageConstants} from "../utils/constants";

const apiInstance = () => {
  const api = axios.create({
    baseURL: apiBaseUrl,
  });
  axiosRetry(api, { retries: 3 });

  api.interceptors.request.use(async (config) => {
    let accessToken = localStorage.getItem(localStorageConstants.accessToken);
    if (accessToken) {
      if (config.method !== "OPTIONS") {
        config.headers["x-access-token"] = accessToken;
      }
    }
    config.headers["api-key"] = "ec5670ac-1c74-4f3c-932a-128632adbde8"

    return config;
  });


  return api;
};

const apiClient = apiInstance();

export default apiClient;
