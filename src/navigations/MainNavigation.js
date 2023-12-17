import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, Entypo, Ionicons, FontAwesome5 } from "@expo/vector-icons";
import ExploreNavigation from "./ExploreNavigation";
import RewardsNavigation from "./RewardsNavigation";
import DonateNavigation from "./DonateNavigation";
import NotificationNavigation from "./NotificationNavigation";
import ProfileNavigation from "./ProfileNavigation";

import * as Notifications from "expo-notifications";
import { useMutation } from "@tanstack/react-query";
import { storeNotificatioToken } from "../apis/auth";
import { colors } from "../config/theme";

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
      initialRouteName="exploreNavigation"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
          backgroundColor: colors.SanadBlue1,
          borderStartEndRadius: 30,
          borderTopStartRadius: 30,
          height: 100,
          shadowColor: "black",
          shadowOffset: { height: -8, width: 4 },
          shadowRadius: 8,
          shadowOpacity: 0.2,
        },
      }}
    >
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
              <FontAwesome5
                name="hand-holding-heart"
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
                Donate
              </Text>
            </View>
          ),
        }}
        screenOptions={{ headerShown: false }}
        name={"donateNavigation"}
        component={DonateNavigation}
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
          title: "Explore",
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                flexDirection: "column",
                gap: 1,
                position: "absolute",
                top: -15,
                shadowColor: "black",
                shadowOffset: { height: -3, width: 0 },
                shadowRadius: 4,
                shadowOpacity: 0.2,
                borderColor: colors.SanadBlue1,
                borderWidth: 10,
                borderRadius: 50,
              }}
            >
              <Image
                source={require("../../assets/explore/explore-floating.png")}
                resizeMode="contain"
                style={{
                  width: 60,
                  height: 60,
                  opacity: focused ? 1 : 1,
                }}
              />
            </View>
          ),
        }}
        name={"exploreNavigation"}
        component={ExploreNavigation}
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
