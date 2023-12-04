import { instance } from ".";
import { saveToken } from "./store";

const login = async (email, password) => {
  const res = await instance.post("/api/login", {
    email,
    password,
  });
  if (res?.data.token) await saveToken(res.data.token);
  return res.data;
};

const register = async (userInfo) => {
  const res = await instance.post("/api/register", userInfo);
  if (res?.data.token) await saveToken(res.data.token);
  return res.data;
};
export { login, register };
