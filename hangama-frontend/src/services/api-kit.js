import axios from "axios";

const apiKit = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const setAccessToken = (token) => {
  apiKit.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  });
};

export default apiKit;
