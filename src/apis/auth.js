import { useMutation, useQueryClient } from "@tanstack/react-query";
import { instance } from ".";
import * as SecureStore from "expo-secure-store";
import { jwtDecode } from "jwt-decode";

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
// const register = async (userInfo, imageFile) => {

//   const formData = new FormData();

//   for (let key in userInfo) {
//     formData.append(key, userInfo[key]); //other info
//   }
//   if (imageFile) {
//     formData.append("image", imageFile); //only image
//   }
//   const res = await instance.post("/api/user/register", formData); //send formdata to server
//   if (res?.data.token) {
//     await saveToken(res.data.token);
//   }
//   return res.data;
// };

// const register = async (userInfo) => {
//   const formData = new FormData();
//   for (let key in userInfo) formData.append(key, userInfo[key]);

//   const res = await instance.post("/api/user/register", formData);
//   if (res?.data.token) await saveToken(res.data.token);

//   return res.data;
// };

//save

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

// const updateMyProfile = async (userId, formData) => {
//   // const formData = new FormData();
//   // for (let key in userInfo) {
//   //   formData.append(key, userInfo[key]);
//   // }
//   // (`/api/user/updateuser/${userId}`, formData);

//   const res = await instance.put(`/api/user/updateuser/${userId}`);
//   return res.data;
// };
const updateProfile = async (updatedUserData) => {
  const res = await instance.put(`/api/user/updateuser`, updatedUserData);
  return res.data;
};

// const useUpdateProfile = () => {
//   const queryClient = useQueryClient();

//   return useMutation(updateProfile, {
//     onSuccess: (data, variables) => {
//       // Invalidate and refetch the user profile query after a successful update
//       queryClient.invalidateQueries(["profile"]);
//     },
//   });
// };

const checkToken = async () => {
  const token = await getToken();
  if (token) {
    console.log(token);
    const decode = jwtDecode(token);
    if (decode) {
      return decode;
    }
  }
  return false;
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
  // updateMyProfile,
  // useUpdateProfile,
  checkToken,
};
