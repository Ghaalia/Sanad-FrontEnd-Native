import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Rewards from "../screens/rewards/Rewards";

const Stack = createStackNavigator();

const RewardsNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="rewards" component={Rewards} />
    </Stack.Navigator>
  );
};

export default RewardsNavigation;

const styles = StyleSheet.create({});
