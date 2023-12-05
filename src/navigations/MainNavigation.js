import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ExploreNavigation from "./ExploreNavigation";
import RewardsNavigation from "./RewardsNavigation";
import DonateNavigation from "./DonateNavigation";
import NotificationNavigation from "./NotificationNavigation";
import ProfileNavigation from "./ProfileNavigation";
const Tab = createBottomTabNavigator();

const MainNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        screenOptions={{ headerShown: false }}
        // options={{ headerShown: false }}
        name={"exploreNavigation"}
        component={ExploreNavigation}
      />
      <Tab.Screen
        options={{ title: "Rewards" }}
        name={"rewardsNavigation"}
        component={RewardsNavigation}
      />
      <Tab.Screen
        options={{ title: "Donate" }}
        name={"donateNavigation"}
        component={DonateNavigation}
      />
      <Tab.Screen
        options={{ title: "Notification" }}
        name={"notificationNavigation"}
        component={NotificationNavigation}
      />
      <Tab.Screen
        options={{ title: "My Profile" }}
        name={"ProfileNavigation"}
        component={ProfileNavigation}
      />
    </Tab.Navigator>
  );
};

export default MainNavigation;

const styles = StyleSheet.create({});
