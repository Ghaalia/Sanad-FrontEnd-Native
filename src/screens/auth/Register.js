import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  useAnimatedValue,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useMutation } from "@tanstack/react-query";
import { register } from "../../apis/auth";
import { TextInput } from "react-native-gesture-handler";
import styles from "./../../css";

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
    <View style={styles.bg}>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
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

        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            gap: 20,
          }}
        >
          <Text style={styles.header}>Create Account</Text>
          <TextInput
            placeholder="Phone number"
            placeholderTextColor="white"
            onChangeText={(text) => {
              setPhone_number(text);
            }}
            style={styles.textinput}
          />
          <TextInput
            placeholder="Email"
            placeholderTextColor="white"
            onChangeText={(text) => {
              setEmail(text);
            }}
            style={styles.textinput}
          />
          <TextInput
            placeholder="Password"
            placeholderTextColor="white"
            secureTextEntry
            onChangeText={(text) => {
              setPassword(text);
            }}
            style={styles.textinput}
          />
          <TextInput
            placeholder="Confirm password"
            placeholderTextColor="white"
            secureTextEntry
            onChangeText={(text) => {
              setPassword(text);
            }}
            style={styles.textinput}
          />
        </View>

        <Pressable
          onPress={() => {
            navigation.navigate("login");
          }}
          style={styles.redbutton}
        >
          <Text style={styles.button}>Agree and Register</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Register;
