import { StyleSheet, Text, View } from "react-native";
import React from "react";

const AppNavigator = () => {
  useEffect(() => {
    registerForushNotifications();
  }, []);

  const registerForushNotifications = async () => {
    try {
      const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      if (!permission.granted) return;

      const token = await Notifications.getExpPushTokenAsync();
      console.log(token);
    } catch (error) {
      console.log("Error getting a push token", error);
    }
  };
  return (
    <View>
      <Text>AppNavigator</Text>
    </View>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});
