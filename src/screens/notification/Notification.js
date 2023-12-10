// Notification.js
import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import { getNotificationsByUser } from "../../apis/notification";

const Notification = ({ route }) => {
  const { userId } = route.params;

  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    fetchNotifications(userId); // Call the function when the component mounts
  }, [userId]); // Add userId to the dependency array

  const fetchNotifications = async (userId) => {
    try {
      const fetchedNotifications = await getNotificationsByUser(userId);
      setNotifications(fetchedNotifications);
    } catch (error) {
      console.error("Error fetching notifications:", error);
    }
  };

  return (
    <View>
      <Text>Notification Screen</Text>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View>
            <Text>Title: {item.title}</Text>
            <Text>Description: {item.description}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Notification;
