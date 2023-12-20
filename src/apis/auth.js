import { useMutation, useQueryClient } from "@tanstack/react-query";
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

const register = async (userInfo, imageUri) => {
  const formData = new FormData();
  for (let key in userInfo) {
    formData.append(key, userInfo[key]);
  }

  if (imageUri) {
    const imageName = imageUri.split("/").pop();
    formData.append("image", {
      uri: imageUri,
      type: "image/jpeg", // or the correct type based on the image
      name: imageName,
    });
  }

  const res = await instance.post("/api/user/register", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  if (res?.data.token) {
    await saveToken(res.data.token);
  }

  return res.data;
};

const saveToken = async (token) => {
  await SecureStore.setItemAsync("token", token);
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

const getMyProfile = async () => {
  const res = await instance.get("/api/user/userprofile");
  return res.data;
};

const updateProfile = async (updatedUserData) => {
  const res = await instance.put(`/api/user/updateuser`, updatedUserData);
  return res.data;
};

export {
  login,
  register,
  logout,
  saveToken,
  getToken,
  storeNotificatioToken,
  getMyProfile,
  updateProfile,
};
