import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Explore from "../screens/explore/Explore";
import EventDetails from "../screens/explore/eventDetails/EventDetails";
import Description from "../screens/explore/eventDetails/Description";
import Location from "../components/explore/Location";

const Stack = createStackNavigator();

const ExploreNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="explore" component={Explore} />
      <Stack.Screen name="eventDetails" component={EventDetails} />
      <Stack.Screen name="Description" component={Description} />
      <Stack.Screen name="Location" component={Location} />
    </Stack.Navigator>
  );
};

export default ExploreNavigation;

const styles = StyleSheet.create({});
