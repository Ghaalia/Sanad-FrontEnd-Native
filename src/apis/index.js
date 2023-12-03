const { default: axios } = require("axios");

const BaseURL = "http://localhost:8000/api";
const instance = axios.create({
  baseURL: BaseURL,
});

export { BaseURL, instance };
