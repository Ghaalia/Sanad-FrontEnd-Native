import { instance } from ".";
import { saveToken } from "./store";

const login = async (email, password) => {
  const res = await instance.post("/api/user/signin", {
    email,
    password,
  });
  if (res?.data.token) await saveToken(res.data.token);
  return res.data;
};

const register = async (userInfo) => {
  const res = await instance.post("/api/user/register", userInfo);
  if (res?.data.token) await saveToken(res.data.token);
  return res.data;
};

const storeNotificatioToken = async (token) => {
  const res = await instance.post("/api/register_token", { token });
  return res.data;
};
export { login, register, storeNotificatioToken };
