import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import TextInputWithLabel from "../../components/TextInputWithLabel";
import { colors } from "../../config/theme";
import { getMyProfile } from "../../apis/auth";
import { useQuery } from "@tanstack/react-query";

const Account = () => {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(0);

  const { data: profile } = useQuery({
    queryKey: ["profile"],
    queryFn: () => getMyProfile(),
  });

  useEffect(() => {
    console.log(profile);
    if (profile) {
      setEmail(profile?.email);
      setPhoneNumber(profile?.phone_number.toString());
    }
  }, [profile]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.SanadRed,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <View
        style={{
          height: "20%",
          width: "100%",
          paddingTop: 75,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white", fontWeight: "600", fontSize: 28 }}>
          Account
        </Text>
      </View>
      <View
        style={{
          backgroundColor: "white",
          height: "80%",
          width: "88%",
          paddingTop: 30,
          paddingHorizontal: 30,
          gap: 20,
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          shadowColor: "black",
          shadowOffset: { height: 1, width: 1 },
          shadowRadius: 10,
          shadowOpacity: 0.25,
          borderTopRightRadius: 16,
          borderTopLeftRadius: 16,
          position: "relative",
        }}
      >
        <TextInputWithLabel
          label="Email"
          placeholder="Enter your Email"
          value={email}
          onChangeText={handleEmailChange}
          keyboardType="default"
        />

        <TextInputWithLabel
          label="Phone Number"
          placeholder="Enter your Phone Number"
          value={phoneNumber}
          onChangeText={handlePhoneNumberChange}
          keyboardType="numeric"
        />
        <View
          style={{
            flexDirection: "column",
            gap: 20,
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: 40,
          }}
        >
          <Text
            style={{
              fontWeight: "600",
              fontSize: 16,
              color: colors.SanadBlue1,
            }}
          >
            Change Password
          </Text>
          <TextInputWithLabel
            label="New Password"
            placeholder="Enter your New Password"
            isPassword={true}
          />

          <TextInputWithLabel
            label="Confirm New Password"
            placeholder="Confirm your New Password"
            isPassword={true}
          />

          <View
            style={{
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              paddingTop: 50,
            }}
          >
            <Text style={styles.button}>Save Changes</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({
  button: {
    color: colors.SanadWhite,
    fontWeight: "600",
    fontSize: 16,
    height: 40,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 20,
    width: "100%",
    textAlign: "center",
    backgroundColor: colors.SanadRed,
    overflow: "hidden",
  },
});
