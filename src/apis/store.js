import * as SecureStore from "expo-secure-store";

//save
const saveToken = async (token) => {
  await SecureStore.setItem("token", token);
};
//get
const getToken = async () => {
  const token = await SecureStore.getItemAsync("token");
  return token;
};
//delete
const deleteToken = async () => {
  await SecureStore.deleteItemAsync("token");
};

export { deleteToken, saveToken, getToken };
