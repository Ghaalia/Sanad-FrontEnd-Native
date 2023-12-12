import { instance } from ".";
import * as SecureStore from "expo-secure-store";

const getAllEvents = async () => {
  const res = await instance.get("/api/event");
  return res.data;
};

const getOneEvent = async (eventID) => {
  const res = await instance.get(`/api/event/${eventID}`);
  return res.data;
};

export { getAllEvents, getOneEvent };
