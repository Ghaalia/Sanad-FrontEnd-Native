import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { BaseURL } from "../../apis";

const Notification = ({ route }) => {
  const { notification } = route.params;
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    fetch(`${BaseURL}/notifications/:userId`, {
      method: "GET",
      headers: {
        // Include any necessary headers for authentication, e.g., JWT token
        Authorization: "Bearer YOUR_JWT_TOKEN",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setNotifications(data.notifications);
        } else {
          console.error("Failed to fetch notifications");
        }
      })
      .catch((error) => {
        console.error("Error fetching notifications:", error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Text>Notification Details</Text>
      {notifications.map((notification) => (
        <View key={notification._id}>
          <Text>Title: {notification.title}</Text>
          <Text>Description: {notification.description}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Notification;
