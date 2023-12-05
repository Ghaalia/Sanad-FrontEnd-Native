import React, { useEffect } from "react";
import * as Notifications from "expo-notifications";
import { NavigationContainer } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import MainNavigation from "./src/navigations/MainNavigation";

export default function App() {
  useEffect(() => {
    // Request permission to receive push notifications (iOS only)
    Notifications.requestPermissionsAsync().then((status) => {
      if (status.status === "granted") {
        console.log("Notification permissions granted");
      }
    });

    // Handle incoming push notifications
    Notifications.addNotificationReceivedListener((notification) => {
      console.log("Received notification:", notification);
    });

    // Handle tapping on a notification to open the app (optional)
    Notifications.addNotificationResponseReceivedListener((response) => {
      console.log("Tapped notification:", response);
    });

    return () => {
      Notifications.removeNotificationSubscription();
    };
  }, []);
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <StatusBar style="dark" />
      <NavigationContainer>
        <MainNavigation />
      </NavigationContainer>
    </QueryClientProvider>
  );
}
