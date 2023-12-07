import { instance } from ".";
import * as SecureStore from "expo-secure-store";

const login = async (email, password) => {
  const res = await instance.post("/api/user/signin", {
    email,
    password,
  });
  if (res?.data.token) await saveToken(res.data.token);
  return res.data;
};

const register = async (userInfo) => {
  const formData = new FormData();
  for (let key in userInfo) formData.append(key, userInfo[key]);

  const res = await instance.post("/api/user/register", formData);
  if (res?.data.token) await saveToken(res.data.token);
  return res.data;
};

//save
const saveToken = async (token) => {
  SecureStore.setItem("token", token);
};
//get
const getToken = async () => {
  const token = await SecureStore.getItemAsync("token");
  ///// check exp time
  return token;
};
//delete
const logout = async () => {
  await SecureStore.deleteItemAsync("token");
};

const storeNotificatioToken = async (token) => {
  const res = await instance.post("/api/register_token", { token });
  return res.data;
};
export { login, register, logout, saveToken, getToken, storeNotificatioToken };
