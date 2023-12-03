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
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
      }}
    >
      <Text
        style={{
          fontFamily: "Urbanist_600SemiBold",
          fontWeight: "bold",
          color: "white",
          justifyContent: "center",
          fontSize: 24,
          marginBottom: 70,
        }}
      >
        Create Account
      </Text>
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
          placeholder="phone number"
          placeholderTextColor="white"
          onChangeText={(text) => {
            setPhone_number(text);
          }}
          style={{
            backgroundColor: "gray",
            color: "white",
            width: 339,
            height: 50,
            borderRadius: 30,
            paddingHorizontal: 20,
            fontFamily: "Urbanist_400Regular",
          }}
        />
        <TextInput
          placeholder="Email"
          placeholderTextColor="white"
          onChangeText={(text) => {
            setEmail(text);
          }}
          style={{
            backgroundColor: "gray",
            color: "white",
            width: 339,
            height: 50,
            borderRadius: 30,
            paddingHorizontal: 20,
            fontFamily: "Urbanist_400Regular",
          }}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor="white"
          secureTextEntry
          onChangeText={(text) => {
            setPassword(text);
          }}
          style={{
            backgroundColor: "gray",
            color: "white",
            width: 339,
            height: 50,
            borderRadius: 30,
            paddingHorizontal: 20,
            fontFamily: "Urbanist_400Regular",
          }}
        />
        <TextInput
          placeholder=" confirm Password"
          placeholderTextColor="white"
          secureTextEntry
          onChangeText={(text) => {
            setPassword(text);
          }}
          style={{
            backgroundColor: "gray",
            color: "white",
            width: 339,
            height: 50,
            borderRadius: 30,
            paddingHorizontal: 20,
            fontFamily: "Urbanist_400Regular",
          }}
        />
      </View>

      {/* <Text> {JSON.stringify(error)}</Text> */}
      <View
        style={{
          backgroundColor: "#F5574E",
          width: 339,
          height: 50,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 30,
          marginTop: 70,
        }}
      >
        <Text
          onPress={() => {
            navigation.navigate("login");
          }}
          style={{
            fontSize: 15,
            fontWeight: "bold",
            color: "white",
            fontFamily: "Urbanist_400SemiBold",
          }}
        >
          Agree and Register
        </Text>
      </View>

      {/* <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 20,
        }}
      > */}
      {/* <View style={{ flexDirection: "row" }}>
        <View style={{ borderColor: "white", height: 20, width: 20 }}></View>
      </View> */}
      {/* </View> */}
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({});
