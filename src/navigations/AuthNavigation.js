import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Register from "../screens/auth/Register";
import Login from "../screens/auth/Login";

const Stack = createStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="login"
      screenOptions={{ headerTitle: "join SANAD :) " }}
    >
      <Stack.Screen name={"register"} component={Register} />
      <Stack.Screen name={"login"} component={Login} />
    </Stack.Navigator>
  );
};

export default AuthNavigation;

const styles = StyleSheet.create({});
