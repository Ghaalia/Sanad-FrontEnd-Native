import {
  Button,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext, useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import { useMutation } from "@tanstack/react-query";
import { login } from "../../apis/auth";
import { useNavigation } from "@react-navigation/native";
import styles from "./../../css";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import UserContext from "../../../context/UserContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  const { user, setUser } = useContext(UserContext);

  const { mutate: login_mutate, error } = useMutation({
    mutationKey: ["login"],
    mutationFn: () => login(email, password),
    onSuccess: () => {
      setUser(true);
      navigation.navigate("profile");
    },
  });
  return (
    <View style={{ flex: 1, backgroundColor: "#1B1931" }}>
      <View>
        <Image
          style={{ height: 180, width: 395 }}
          source={require("../../../assets/Group143.png")}
        />

        <KeyboardAwareScrollView
          style={{
            // backgroundColor: "red",
            height: 600,
            marginTop: 40,
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
                width: 393,
                justifyContent: "center",
                alignItems: "center",
                gap: 20,
              }}
            >
              <TextInput
                placeholder="Email"
                placeholderTextColor="white"
                onChangeText={(text) => {
                  setEmail(text);
                }}
                style={styles.textinput}
              />
              <TextInput
                placeholder=" Enter your password"
                placeholderTextColor="white"
                secureTextEntry
                onChangeText={(text) => {
                  setPassword(text);
                }}
                style={styles.textinput}
              />
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

            {/* <Text style={{ fontSize: 14, color: "red" }}>
          {JSON.stringify(error?.message)}{" "}
        </Text> */}
            <TouchableOpacity
              style={styles.redbutton}
              onPress={() => {
                login_mutate();
              }}
            >
              <Text style={styles.button}>Login</Text>
            </TouchableOpacity>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                marginTop: 20,
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
        </KeyboardAwareScrollView>
      </View>
    </View>
  );
};

export default Login;
