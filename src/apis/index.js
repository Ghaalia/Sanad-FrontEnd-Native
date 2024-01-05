import { getToken } from "./auth";

const { default: axios } = require("axios");

const WEBSITE_URL = "http://192.168.1.59:3000";
const SHARE_EVENT_URL = "http://192.168.1.59:3000";
const BaseURL = "http://192.168.1.59:8000";
const instance = axios.create({
  baseURL: BaseURL,
});
instance.interceptors.request.use(async (config) => {
  const token = await getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
export { BaseURL, instance, WEBSITE_URL, SHARE_EVENT_URL };
