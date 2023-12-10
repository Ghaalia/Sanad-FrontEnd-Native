import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

const NotificationHandler = ({ notifications }) => {
  const navigation = useNavigation();

  const handleNotificationTapped = (notification) => {
    navigation.navigate("Notification", { userId: notification._id });
  };

  return (
    <View>
      {notifications.map((notification) => (
        <TouchableOpacity
          key={notification._id}
          onPress={() => handleNotificationTapped(notification)}
        >
          <Text>{notification.title}</Text>
          <Text>{notification.description}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default NotificationHandler;
