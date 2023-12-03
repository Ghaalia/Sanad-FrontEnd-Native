import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const CreateNewPassword = () => {
  const navigation = useNavigation();
  const [password, setPassword] = useState("");
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
          navigation.navigate("otpvarification");
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
      <Text style={styles.header}>Create New Password</Text>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          width: 300,
          height: 48,
          paddingLeft: 5,
          paddingRight: 5,
          fontSize: 16,
          marginBottom: 30,
        }}
      >
        <Text
          style={{
            color: "#6B6893",
            fontSize: 14,
            fontFamily: "Urbanist_400Regular",
          }}
        >
          Your new password must be unique from those previously used.
        </Text>
      </View>
      <View
        style={{
          height: 100,
          width: 393,
          justifyContent: "center",
          alignItems: "center",
          gap: 20,
        }}
      >
        <TextInput
          placeholder="New password"
          secureTextEntry
          placeholderTextColor="white"
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
          placeholder="Confirm password"
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
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("passwordchanged");
        }}
        style={{
          backgroundColor: "#F5574E",
          width: 339,
          height: 50,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 30,
          marginTop: 30,
        }}
      >
        <Text style={styles.button}>Reset Password</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreateNewPassword;

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
