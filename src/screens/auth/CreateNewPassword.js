import { View, Text } from "react-native";
import React from "react";
import { TextInput } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const CreateNewPassword = () => {
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
        Create New Password
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
          placeholder="Confirm password"
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
            navigation.navigate("passwordchanged");
          }}
          style={{
            fontSize: 15,
            fontWeight: "bold",
            color: "white",
            fontFamily: "Urbanist_400SemiBold",
          }}
        >
          Reset Password
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

export default CreateNewPassword;
