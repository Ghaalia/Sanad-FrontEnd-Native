import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Notification from "../screens/notification/Notification";

const Stack = createStackNavigator();

const NotificationNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="notification" component={Notification} />
    </Stack.Navigator>
  );
};

export default NotificationNavigation;

const styles = StyleSheet.create({});
