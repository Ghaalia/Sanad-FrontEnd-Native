import {
  Alert,
  Image,
  Linking,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext, useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import { useMutation } from "@tanstack/react-query";
import { checkToken, login } from "../../apis/auth";
import { useNavigation } from "@react-navigation/native";
import styles from "./../../css";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import UserContext from "../../../context/UserContext";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../config/theme";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  const { user, setUser } = useContext(UserContext);
  const [showPassword, setShowPassword] = useState(false);

  const { mutate: login_mutate, error } = useMutation({
    mutationKey: ["login"],
    mutationFn: () => login(email, password),
    onSuccess: async () => {
      setUser(await checkToken());
      navigation.navigate("profile");
    },
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  console.log(error);

  const handlePress1 = () => {
    Linking.openURL(
      "https://www.facebook.com/login.php?skip_api_login=1&api_key=313137469260&kid_directed_site=0&app_id=313137469260&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv5.0%2Fdialog%2Foauth%3Fclient_id%3D313137469260%26redirect_uri%3Dhttps%253A%252F%252Fwww.udemy.com%252Fjoin%252Fsocial-complete%252Ffacebook%252F%26state%3Dgn0fMCXeWX7dxs7v8GvmNXHoHRnIzZQR%26return_scopes%3Dtrue%26scope%3Demail%252Cpublic_profile%26auth_type%3Drerequest%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3D0be07d45-ac5e-4275-896c-75fa83e2e1b7%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fwww.udemy.com%2Fjoin%2Fsocial-complete%2Ffacebook%2F%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3Dgn0fMCXeWX7dxs7v8GvmNXHoHRnIzZQR%23_%3D_&display=page&locale=en_GB&pl_dbl=0"
    );
  };
  const handlePress2 = () => {
    Linking.openURL(
      "https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?gsiwebsdk=3&client_id=700206021005-as1l679sch207mp70msgjhma1krf3k9q.apps.googleusercontent.com&scope=email%20profile&redirect_uri=storagerelay%3A%2F%2Fhttps%2Fwww.udemy.com%3Fid%3Dauth642315&prompt=consent&access_type=offline&response_type=code&include_granted_scopes=true&enable_granular_consent=true&service=lso&o2v=2&theme=glif&flowName=GeneralOAuthFlow"
    );
  };
  const handlePress3 = () => {
    Linking.openURL(
      "https://appleid.apple.com/auth/authorize?client_id=com.udemy.web&redirect_uri=https%3A%2F%2Fwww.udemy.com%2Fjoin%2Fsocial-complete%2Fapple%2Flogin%2F&response_type=code%20id_token&state=ephsymcqybbadbjb&scope=name%20email&response_mode=form_post&frame_id=aee8e57b-c378-41c5-832c-27355e561ea2&m=11&v=1.5.5"
    );
  };

  return (
    <View style={{ flex: 1, width: "100%", backgroundColor: "#1B1931" }}>
      <View>
        <Image
          style={{ height: 180, width: 395 }}
          source={require("../../../assets/Group143.png")}
        />

        <KeyboardAwareScrollView
          style={{
            height: 600,
            marginTop: 40,
            paddingHorizontal: 30,
          }}
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={styles.header}>Welcome!</Text>
            <View
              style={{
                height: 208,
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                gap: 20,
              }}
            >
              <TextInput
                placeholder="Email"
                placeholderTextColor="white"
                textContentType="emailAddress"
                autoCapitalize="none"
                onChangeText={(text) => {
                  setEmail(text);
                }}
                style={styles.textinput}
              />
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  backgroundColor: "rgba(105,105,105, 0.25)",
                  width: 339,
                  height: 50,
                  borderRadius: 30,
                  paddingHorizontal: 20,
                  fontFamily: "Urbanist_400Regular",
                }}
              >
                <TextInput
                  placeholder=" Enter your password"
                  placeholderTextColor="white"
                  secureTextEntry={!showPassword}
                  onChangeText={(text) => {
                    setPassword(text);
                  }}
                  style={{ color: "white" }}
                />
                <TouchableOpacity onPress={togglePasswordVisibility}>
                  <Ionicons
                    name={showPassword ? "ios-eye-off" : "ios-eye"}
                    size={20}
                    color="gray"
                  />
                </TouchableOpacity>
              </View>
              <Text
                style={{
                  color: "#6B6893",
                  fontSize: 14,
                  fontFamily: "Urbanist_600SemiBold",
                }}
                onPress={() => {
                  navigation.navigate("forgotpassword");
                }}
              >
                Forgot password ?
              </Text>
            </View>

            <Text style={{ fontSize: 14, color: "white" }}>
              {JSON.stringify(error?.message)}
            </Text>
            {/* <Alert> {JSON.stringify(error?.name)}</Alert> */}

            <TouchableOpacity
              // style={styles.redbutton}
              style={{
                backgroundColor: colors.SanadRed,
                width: "100%",
                height: 50,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 30,
              }}
              onPress={() => {
                login_mutate();
              }}
            >
              <Text style={styles.button}>Login</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: "column", gap: 15 }}>
              <View style={{ flexDirection: "column", gap: 10 }}>
                <View style={{ alignItems: "center" }}>
                  <Text
                    style={{
                      color: "#6B6893",
                      fontFamily: "Urbanist_400Regular",
                      marginTop: 25,
                    }}
                  >
                    or login with
                  </Text>
                </View>
                <View style={{ flexDirection: "row", gap: 5 }}>
                  <TouchableOpacity onPress={handlePress1}>
                    <Image
                      source={require("../../../assets/profile/facebook.png")}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={handlePress2}>
                    <Image
                      source={require("../../../assets/profile/google.png")}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={handlePress3}>
                    <Image
                      source={require("../../../assets/profile/apple.png")}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontFamily: "Urbanist_400Regular",
                  }}
                >
                  Don't have an account ?
                </Text>
                <Text
                  onPress={() => {
                    navigation.navigate("register");
                  }}
                  style={{
                    color: "#F5574E",
                    fontFamily: "Urbanist_400SemiBold",
                    marginHorizontal: 5,
                  }}
                >
                  Register Now
                </Text>
              </View>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </View>
    </View>
  );
};

export default Login;

// alert.alert
