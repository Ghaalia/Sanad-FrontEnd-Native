import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native-gesture-handler";
import { Image } from "react-native";

const PasswordChanged = () => {
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
      <View style={{ padding: 20 }}>
        <Image source={require("../../../assets/Sticker.png")} />
      </View>
      <Text style={styles.header}>Password Changed !</Text>
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
          Your new password has been changed successfully
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("login");
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
        <Text style={styles.button}>Back to Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PasswordChanged;

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
    marginTop: 15,
  },
});
