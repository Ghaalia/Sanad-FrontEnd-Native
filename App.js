import React, { useEffect, useState } from "react";
import * as Notifications from "expo-notifications";
import { NavigationContainer } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StatusBar } from "expo-status-bar";
// import { StatusBar as RNStatusBar } from "react-native";
import MainNavigation from "./src/navigations/MainNavigation";
import AuthNavigation from "./src/navigations/AuthNavigation";
import AppLoading from "expo-app-loading";

import {
  useFonts,
  Urbanist_400Regular,
  Urbanist_600SemiBold,
  Urbanist_700Bold,
  Urbanist_500Medium,
} from "@expo-google-fonts/urbanist";
import UserContext from "./context/UserContext";
import { getToken } from "./src/apis/auth";
import { LogBox } from "react-native";
LogBox.ignoreLogs(["Warning: ..."]); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

export default function App() {
  const [user, setUser] = useState(false);
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
    Urbanist_700Bold,
    Urbanist_500Medium,
  });

  const checkUser = async () => {
    const user = await getToken();
    setUser(user);
  };
  useEffect(() => {
    checkUser();
  }, []);

  if (!fontsLoaded) return <AppLoading />;

  return (
    <QueryClientProvider client={queryClient}>
     
      <StatusBar animated={true} backgroundColor="transparent" />
      <UserContext.Provider value={{ user, setUser }}>

        <NavigationContainer>
          <MainNavigation />
        </NavigationContainer>
      </UserContext.Provider>
    </QueryClientProvider>
  );
}

// value={{ user, setUser }}
