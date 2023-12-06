const { default: axios } = require("axios");

const BaseURL = "http://172.20.10.6:8000";
const instance = axios.create({
  baseURL: BaseURL,
});

export { BaseURL, instance };
