const { default: axios } = require("axios");

const BaseURL = "http://172.20.10.6:8000";
const instance = axios.create({
  baseURL: BaseURL,
});

instance.interceptors.request.use(async (config) => {
  const token = await getToken();
  if (token) {
    config.headers.Authorization = `Bearer${token}`;
  }
  return config;
});

export { BaseURL, instance };
