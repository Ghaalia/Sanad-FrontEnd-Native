import React, { useEffect } from "react";
import * as Notifications from "expo-notifications";
import { NavigationContainer } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StatusBar } from "expo-status-bar";
import MainNavigation from "./src/navigations/MainNavigation";
import AuthNavigation from "./src/navigations/AuthNavigation";
import AppLoading from "expo-app-loading";

import {
  useFonts,
  Urbanist_400Regular,
  Urbanist_600SemiBold,
} from "@expo-google-fonts/urbanist";

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
  let [fontsLoaded] = useFonts({
    Urbanist_400Regular,
    Urbanist_600SemiBold,
  });

  if (!fontsLoaded) return <AppLoading />;
  return (
    <QueryClientProvider client={queryClient}>
      <StatusBar style="dark" />


      <NavigationContainer>
        <MainNavigation />
      </NavigationContainer>
    </QueryClientProvider>
  );
}
