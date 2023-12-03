import { NavigationContainer } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import MainNavigation from "./src/navigations/MainNavigation";
import AuthNavigation from "./src/navigations/AuthNavigation";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Urbanist_400Regular,
  Urbanist_600SemiBold,
} from "@expo-google-fonts/urbanist";

export default function App() {
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
        <AuthNavigation />
        {/* <MainNavigation /> */}
      </NavigationContainer>
    </QueryClientProvider>
  );
}
