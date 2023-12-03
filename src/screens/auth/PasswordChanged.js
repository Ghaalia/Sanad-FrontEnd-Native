import { View, Text } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native-gesture-handler";

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
      <Text
        style={{
          fontFamily: "Urbanist_600SemiBold",
          fontWeight: "bold",
          color: "white",
          justifyContent: "center",
          fontSize: 24,
          marginBottom: 15,
        }}
      >
        Password Changed !
      </Text>
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

      {/* <Text> {JSON.stringify(error)}</Text> */}
      <View
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
          Back to Login
        </Text>
      </View>

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

export default PasswordChanged;
