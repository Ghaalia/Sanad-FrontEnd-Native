import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";
import ExploreNavigation from "./ExploreNavigation";
import RewardsNavigation from "./RewardsNavigation";
import DonateNavigation from "./DonateNavigation";
import NotificationNavigation from "./NotificationNavigation";
import ProfileNavigation from "./ProfileNavigation";

import * as Notifications from "expo-notifications";
import { useMutation } from "@tanstack/react-query";
import { storeNotificatioToken } from "../apis/auth";

const Tab = createBottomTabNavigator();

const MainNavigation = () => {
  const { mutate } = useMutation({
    mutationFn: (token) => storeNotificatioToken(token),
  });

  useEffect(() => {
    registerForPushNotifications();
  }, []);

  const registerForPushNotifications = async () => {
    try {
      const { status } = await Notifications.getPermissionsAsync();

      if (status !== "granted") {
        const { status: newStatus } =
          await Notifications.requestPermissionsAsync();
        if (newStatus !== "granted") {
          console.log("Permission to receive notifications denied.");
          return;
        }
      }

      const expoPushToken = await Notifications.getExpoPushTokenAsync({
        projectId: "a767bc91-efcd-4ac7-9a4c-27ed17387d4c",
      });

      console.log({ expoPushToken });
      // send request to save user token
      mutate(expoPushToken);
    } catch (error) {
      console.log("Error getting a push token", error);
    }
  };
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
          backgroundColor: "#1B1931",
          borderStartEndRadius: 30,
          borderTopStartRadius: 30,
          height: 100,
          shadowColor: "black",
          shadowOffset: { height: -10, width: 4 },
          shadowRadius: 8,
          shadowOpacity: 0.2,
        },
      }}
    >
      <Tab.Screen
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                flexDirection: "column",
                gap: 1,
              }}
            >
              <Entypo
                name="home"
                size={24}
                style={{
                  color: focused ? "white" : "white",
                  opacity: focused ? 1 : 0.3,
                }}
              />
              <Text
                style={{
                  paddingTop: 3,
                  color: focused ? "#F5574E" : "white",
                  fontSize: 10,
                  opacity: focused ? 1 : 0.3,
                  fontFamily: "Urbanist_500Medium",
                }}
              >
                Explore
              </Text>
            </View>
          ),
        }}
        screenOptions={{ headerShown: false }}
        name={"exploreNavigation"}
        component={ExploreNavigation}
      />
      <Tab.Screen
        options={{
          title: "Rewards",
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                flexDirection: "column",
                gap: 1,
              }}
            >
              <AntDesign
                name="star"
                size={24}
                style={{
                  color: focused ? "white" : "white",
                  opacity: focused ? 1 : 0.3,
                }}
              />
              <Text
                style={{
                  paddingTop: 3,
                  color: focused ? "#F5574E" : "white",
                  fontSize: 10,
                  opacity: focused ? 1 : 0.3,
                  fontFamily: "Urbanist_500Medium",
                }}
              >
                Rewards
              </Text>
            </View>
          ),
        }}
        name={"rewardsNavigation"}
        component={RewardsNavigation}
      />
      <Tab.Screen
        options={{
          title: "Donate",
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                flexDirection: "column",
                gap: 1,
              }}
            >
              <Image
                source={require("../../assets/donation/donation-tab.png")}
                resizeMode="contain"
                style={{
                  width: 40,
                  height: 40,
                  opacity: focused ? 1 : 0.3,
                }}
              />
            </View>
          ),
        }}
        name={"donateNavigation"}
        component={DonateNavigation}
      />
      <Tab.Screen
        options={{
          title: "Notification",
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                flexDirection: "column",
                gap: 1,
              }}
            >
              <Ionicons
                name="notifications"
                size={24}
                style={{
                  color: focused ? "white" : "white",
                  opacity: focused ? 1 : 0.3,
                }}
              />
              <Text
                style={{
                  paddingTop: 3,
                  color: focused ? "#F5574E" : "white",
                  fontSize: 10,
                  opacity: focused ? 1 : 0.3,
                  fontFamily: "Urbanist_500Medium",
                }}
              >
                Notifications
              </Text>
            </View>
          ),
        }}
        name={"notificationNavigation"}
        component={NotificationNavigation}
      />
      <Tab.Screen
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                flexDirection: "column",
                gap: 1,
              }}
            >
              <Ionicons
                name="ios-person"
                size={24}
                style={{
                  color: focused ? "white" : "white",
                  opacity: focused ? 1 : 0.3,
                }}
              />
              <Text
                style={{
                  paddingTop: 3,
                  color: focused ? "#F5574E" : "white",
                  fontSize: 10,
                  opacity: focused ? 1 : 0.3,
                  fontFamily: "Urbanist_500Medium",
                }}
              >
                Profile
              </Text>
            </View>
          ),
        }}
        name={"ProfileNavigation"}
        component={ProfileNavigation}
      />
    </Tab.Navigator>
  );
};

export default MainNavigation;

const styles = StyleSheet.create({});
