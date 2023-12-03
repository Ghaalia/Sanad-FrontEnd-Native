import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { TextInput } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const ForgotPassword = () => {
  const navigation = useNavigation();
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
      <Text style={styles.header}>Forgot Password ?</Text>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",

          width: 300,
          height: 48,
          paddingLeft: 5,
          paddingRight: 5,
          fontSize: 16,
        }}
      >
        <Text
          style={{
            color: "#6B6893",
            fontSize: 14,
            fontFamily: "Urbanist_400Regular",
          }}
        >
          Don't worry! It occurs. Please enter the email address linked with
          your account.
        </Text>
      </View>
      <View
        style={{
          height: 100,
          width: 393,
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 15,
        }}
      >
        <TextInput
          placeholder="Enter your email"
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
      </View>

      {/* <Text> {JSON.stringify(error)}</Text> */}
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("otpvarification");
        }}
        style={{
          backgroundColor: "#F5574E",
          width: 339,
          height: 50,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 30,
        }}
      >
        <Text style={styles.button}>Send Code</Text>
      </TouchableOpacity>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 20,
        }}
      >
        {/* <View style={{ flexDirection: "row" }}>
        <View style={{ borderColor: "white", height: 20, width: 20 }}></View>
      </View> */}
      </View>
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
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
