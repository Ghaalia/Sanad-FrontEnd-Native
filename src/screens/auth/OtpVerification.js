import { View, Text } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native-gesture-handler";

const OtpVerification = () => {
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
        OTP Verification
      </Text>
      <View
        style={{
          width: 300,
          height: 48,
          paddingLeft: 5,
          paddingRight: 5,
          fontSize: 16,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            color: "#6B6893",
            fontSize: 14,
            fontFamily: "Urbanist_400Regular",
          }}
        >
          Enter the verification code we just sent on your email address.
        </Text>
      </View>
      <View
        style={{
          height: 100,
          width: 393,
          justifyContent: "center",
          alignItems: "center",
          gap: 15,
          marginTop: 20,
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <TextInput
          placeholder=""
          placeholderTextColor="white"
          style={{
            backgroundColor: "gray",
            color: "white",
            width: 69,
            height: 60,
            borderRadius: 8,
            padding: 20,
            fontFamily: "Urbanist_400Regular",
          }}
        />
        <TextInput
          placeholder=""
          placeholderTextColor="white"
          style={{
            backgroundColor: "gray",
            color: "white",
            width: 69,
            height: 60,
            borderRadius: 8,
            padding: 20,
            fontFamily: "Urbanist_400Regular",
          }}
        />
        <TextInput
          placeholder=""
          placeholderTextColor="white"
          style={{
            backgroundColor: "gray",
            color: "white",
            width: 69,
            height: 60,
            borderRadius: 8,
            padding: 20,
            fontFamily: "Urbanist_400Regular",
          }}
        />
        <TextInput
          placeholder=""
          placeholderTextColor="white"
          style={{
            backgroundColor: "gray",
            color: "white",
            width: 69,
            height: 60,
            borderRadius: 8,
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
        }}
      >
        <Text
          onPress={() => {
            navigation.navigate("createnewpassword");
          }}
          style={{
            fontSize: 15,
            fontWeight: "bold",
            color: "white",
            fontFamily: "Urbanist_400SemiBold",
          }}
        >
          Verify
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

export default OtpVerification;
