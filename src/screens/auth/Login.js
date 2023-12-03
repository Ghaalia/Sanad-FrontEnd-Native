import { Button, Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import { useMutation } from "@tanstack/react-query";
import { login } from "../../apis/auth";
import { useNavigation } from "@react-navigation/native";
import styles from "./../../css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const { mutate, error } = useMutation({
    mutationKey: ["login"],
    mutationFn: () => login(email, password),
  });
  return (
    <View style={styles.bg}>
      <Pressable
        onPress={() => {
          navigation.navigate("login");
        }}
        style={{
          justifyContent: "center",
          alignContent: "center",
          padding: 30,
        }}
      >
        <Image
          style={{
            width: 41,
            height: 41,
          }}
          source={require("../../../assets/back.png")}
        />
      </Pressable>
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

      {/* <Text> {JSON.stringify(error)}</Text> */}
      <View style={styles.redbutton}>
        <Text style={styles.button}>Login</Text>
      </View>

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
          Don't have an account ?{" "}
        </Text>
        <Text
          onPress={() => {
            navigation.navigate("register");
          }}
          style={{
            color: "#F5574E",
            fontFamily: "Urbanist_400SemiBold",
          }}
        >
          Register Now
        </Text>
      </View>
    </View>
  );
};

export default Login;
