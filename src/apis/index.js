const { default: axios } = require("axios");

const BaseURL = "";
const instance = axios.create({
  baseURL: BaseURL,
});

export { BaseURL, instance };
