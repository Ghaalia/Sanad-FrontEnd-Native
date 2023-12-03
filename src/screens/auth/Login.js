import { Button, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import { useMutation } from "@tanstack/react-query";
import { login } from "../../apis/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { mutate } = useMutation({
    mutationKey: ["login"],
    mutationFn: () => login(email, password),
  });
  return (
    <View>
      <Text>Welcome !</Text>
      <TextInput
        placeholder="Email"
        onChangeText={(text) => {
          setEmail(text);
        }}
      />
      <TextInput
        placeholder=" enter your password"
        secureTextEntry
        onChangeText={(text) => {
          setPassword(text);
        }}
      />

      <Button title="login" onPress={mutate} />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
