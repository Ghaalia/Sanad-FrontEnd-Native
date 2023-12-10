import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Donate from "../screens/donate/Donate";
import Album from "../screens/donate/Album";
import GenerateLinkPage from "../screens/donate/GenerateLinkPage";

const Stack = createStackNavigator();

const DonateNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="album" component={Album} />
      <Stack.Screen name="donate" component={Donate} />
      <Stack.Screen name="generateLinkPage" component={GenerateLinkPage} />
    </Stack.Navigator>
  );
};

export default DonateNavigation;

const styles = StyleSheet.create({});
