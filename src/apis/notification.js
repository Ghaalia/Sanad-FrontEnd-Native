import { instance } from ".";
import * as Notifications from "expo-notifications";

const getNotificationsByUser = async (userId) => {
  try {
    const response = await instance.get(`/api/notifications/${userId}`);
    return response?.data?.notifications;
  } catch (error) {
    console.error("Error fetching notifications??!!:", error);
    throw error;
  }
};

const sendLocalNotification = async (title, body) => {
  try {
    // Construct the notification content
    const notificationContent = {
      title,
      body,
    };

    // Schedule the notification
    await Notifications.scheduleNotificationAsync({
      content: notificationContent,
      trigger: null, // Send immediately
    });

    console.log("Local notification sent successfully");
  } catch (error) {
    console.error("Error sending local notification:", error);
  }
};

export { getNotificationsByUser, sendLocalNotification };
