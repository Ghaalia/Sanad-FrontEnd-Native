import { instance } from ".";
import * as SecureStore from "expo-secure-store";
import { sendLocalNotification } from "./notification";

const getAllEvents = async () => {
  const res = await instance.get("/api/event");
  return res.data;
};

const getOneEvent = async (eventID) => {
  const res = await instance.get(`/api/event/${eventID}`);
  return res.data;
};

// const requestVolunterNow = async (eventID) => {
//   const res = await instance.post(`/api/participation/${eventID}`);
//   return res.data;
// };

//dec 23 2023
const requestVolunterNow = async (eventID) => {
  try {
    const res = await instance.post(`/api/participation/${eventID}`);
    const eventData = res.data;

    // Check if the request was successful
    if (eventData.success) {
      // Send a local notification
      sendLocalNotification(
        `You just applied to ${eventData.event_title}`,
        "You'll be notified when you get accepted"
      );
    }

    return eventData;
  } catch (error) {
    throw error;
  }
};

const getParticipationsOnEvent = async (eventID) => {
  const res = await instance.get(`/api/participation/event/${eventID}`);
  return res.data;
};

const getEventById = async (eventId) => {
  const res = await instance.get(`/api/event/${eventId}`);
  return res.data;
};

export {
  getAllEvents,
  getOneEvent,
  requestVolunterNow,
  getParticipationsOnEvent,
  getEventById,
};
