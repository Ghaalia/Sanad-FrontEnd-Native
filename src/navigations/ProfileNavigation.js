import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Account from "../screens/profile/Account";
import ContactUs from "../screens/profile/ContactUs";
import Profile from "../screens/profile/Profile";
import EditeProfile from "../screens/profile/EditeProfile";
import Setting from "../screens/profile/Setting";
import VolunteeringHistory from "../screens/profile/VolunteeringHistory";

const Stack = createStackNavigator();

//// if user signed in then it will show this page, if not it will show auth pages

const ProfileNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="profile"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="profile" component={Profile} />
      <Stack.Screen name="account" component={Account} />
      <Stack.Screen name="contactUs" component={ContactUs} />
      <Stack.Screen name="editeProfile" component={EditeProfile} />
      <Stack.Screen name="setting" component={Setting} />
      <Stack.Screen
        name="volunteeringHistory"
        component={VolunteeringHistory}
      />
    </Stack.Navigator>
  );
};

export default ProfileNavigation;

const styles = StyleSheet.create({});
