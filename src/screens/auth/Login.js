import { Button, Image, Pressable, StyleSheet, Text, View } from "react-native";
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
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
      }}
    >
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
      <View
        style={{
          backgroundColor: "#F5574E",
          width: 339,
          height: 50,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 30,
        }}
      >
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
          {" "}
          Register Now
        </Text>
        {/* <View style={{ flexDirection: "row" }}>
          <View style={{ borderColor: "white", height: 20, width: 20 }}></View>
        </View> */}
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  textinput: {
    backgroundColor: "gray",
    color: "white",
    width: 339,
    height: 50,
    borderRadius: 30,
    paddingHorizontal: 20,
    fontFamily: "Urbanist_400Regular",
  },
  button: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
    fontFamily: "Urbanist_400SemiBold",
  },
  header: {
    fontFamily: "Urbanist_600SemiBold",
    fontWeight: "bold",
    color: "white",
    justifyContent: "center",
    fontSize: 24,
    marginBottom: 15,
  },
});
