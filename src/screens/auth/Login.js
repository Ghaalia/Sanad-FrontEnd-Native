import { Button, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import { useMutation } from "@tanstack/react-query";
import { login } from "../../apis/auth";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const { mutate, error } = useMutation({
    mutationKey: ["login"],
    mutationFn: () => login(email, password),
  });
  return (
    <View
      style={{
        backgroundColor: "#1B1931",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
      }}
    >
      <Text
        style={{
          fontWeight: "bold",
          color: "white",
          justifyContent: "center",
          fontSize: 25,
          height: 29,
          backgroundColor: "blue",
          marginBottom: 30,
        }}
      >
        Welcome!
      </Text>
      <View
        style={{
          height: 208,
          width: 393,
          backgroundColor: "blue",
          justifyContent: "center",
          alignItems: "center",
          gap: 20,
        }}
      >
        <TextInput
          placeholder="Email"
          onChangeText={(text) => {
            setEmail(text);
          }}
          style={{
            backgroundColor: "gray",
            color: "white",
            width: 300,
            height: 50,
            borderRadius: 30,
            padding: 20,
          }}
        />
        <TextInput
          placeholder=" Enter your password"
          secureTextEntry
          onChangeText={(text) => {
            setPassword(text);
          }}
          style={{
            backgroundColor: "gray",
            color: "white",
            width: 300,
            height: 50,
            borderRadius: 30,
            padding: 20,
          }}
        />
        <Text
          style={{
            color: "#6B6893",
          }}
        >
          Forgot password ?
        </Text>
      </View>

      {/* <Text> {JSON.stringify(error)}</Text> */}
      <Text
        onPress={mutate}
        style={{
          backgroundColor: "#F5574E",
          color: "white",
          width: 300,
          height: 50,
          fontSize: 20,
          fontWeight: "bold",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Login
      </Text>
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <Text
          style={{
            color: "white",
          }}
        >
          {" "}
          You dont have an account ?{" "}
        </Text>
        <Text
          onPress={() => {
            navigation.navigate("register");
          }}
          style={{
            color: "#F5574E",
            fontWeight: "bold",
          }}
        >
          {" "}
          Register Now
        </Text>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
