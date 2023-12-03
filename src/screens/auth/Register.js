import { StyleSheet, Text, View, useAnimatedValue } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useMutation } from "@tanstack/react-query";
import { register } from "../../apis/auth";
import { TextInput } from "react-native-gesture-handler";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const navigation = useNavigation();

  const { mutate, error } = useMutation({
    mutationKey: ["register"],
    mutationFn: () => register(email, phone_number, password),
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
        Create Account
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
          placeholder="Phone number"
          onChangeText={(text) => {
            setPhone_number(text);
          }}
          style={{
            backgroundColor: "gray",
            color: "white",
            width: 300,
            height: 50,
            borderRadius: 30,
            paddingHorizontal: 20,
          }}
        />
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
            paddingHorizontal: 20,
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
            paddingHorizontal: 20,
          }}
        />
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
        Agree and Register
      </Text>
      <View style={{ flexDirection: "row", justifyContent: "center" }}></View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({});
