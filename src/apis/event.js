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

const requestVolunterNow = async (eventID) => {
  const res = await instance.post(`/api/participation/${eventID}`);
  return res.data;
};

// const getParticipationsOnEvent = async (eventID) => {
//   console.log("res.data?.status");

//   const res = await instance.get(`/api/participation/event/${eventID}`);
//   console.log(res.data?.status);
//   return res.data;
// };

const getParticipationsOnEvent = async (eventID) => {
  try {
    const res = await instance.get(`/api/participation/event/${eventID}`);
    console.log("API response:", res); // Log the entire response
    console.log("Status:", res.data?.status);
    return res.data;
  } catch (error) {
    console.error("API Error:", error);
    throw new Error("Error fetching data");
  }
};

export {
  getAllEvents,
  getOneEvent,
  requestVolunterNow,
  getParticipationsOnEvent,
};
