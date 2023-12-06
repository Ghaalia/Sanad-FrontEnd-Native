import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Account from "../screens/profile/Account";
import ContactUs from "../screens/profile/ContactUs";
import Profile from "../screens/profile/Profile";
import EditeProfile from "../screens/profile/EditeProfile";
import Setting from "../screens/profile/Setting";
import VolunteeringHistory from "../screens/profile/VolunteeringHistory";
import Register from "../screens/auth/Register";
import Login from "../screens/auth/Login";
import ForgotPassword from "../screens/auth/ForgotPassword";
import OtpVerification from "../screens/auth/OtpVerification";
import CreateNewPassword from "../screens/auth/CreateNewPassword";
import PasswordChanged from "../screens/auth/PasswordChanged";

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
      {/* AUTH NAV */}
      <Stack.Screen name={"register"} component={Register} />
      <Stack.Screen name={"login"} component={Login} />
      <Stack.Screen name={"forgotpassword"} component={ForgotPassword} />
      <Stack.Screen name={"otpvarification"} component={OtpVerification} />
      <Stack.Screen name={"createnewpassword"} component={CreateNewPassword} />
      <Stack.Screen name={"passwordchanged"} component={PasswordChanged} />
      {/* END AUTH NAV */}
    </Stack.Navigator>
  );
};

export default ProfileNavigation;

const styles = StyleSheet.create({});
