import { Image, StyleSheet, Text, View } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import Register from "../screens/auth/Register";
import Login from "../screens/auth/Login";
import ForgotPassword from "../screens/auth/ForgotPassword";
import OtpVerification from "../screens/auth/OtpVerification";
import CreateNewPassword from "../screens/auth/CreateNewPassword";
import PasswordChanged from "../screens/auth/PasswordChanged";

const Stack = createStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="login"
      screenOptions={{
        headerBackImage: () => {
          <Image
            source={require("../../assets/Frame5.png")}
            style={{ width: 150, height: 30, resizeMode: "contain" }}
          />;
        },
      }}
    >
      <Stack.Screen name={"register"} component={Register} />
      <Stack.Screen name={"login"} component={Login} />
      <Stack.Screen name={"forgotpassword"} component={ForgotPassword} />
      <Stack.Screen name={"otpvarification"} component={OtpVerification} />
      <Stack.Screen name={"createnewpassword"} component={CreateNewPassword} />
      <Stack.Screen name={"passwordchanged"} component={PasswordChanged} />
    </Stack.Navigator>
  );
};

export default AuthNavigation;

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: "#1B1931",
//     justifyContent: "center",
//     alignItems: "center",
//     flexDirection: "column",
//     flex: 1,
//     padding: 20,
//     marginBottom: 30,
//   },
// });
