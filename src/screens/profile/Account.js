import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import TextInputWithLabel from "../../components/TextInputWithLabel";
import { colors } from "../../config/theme";
import { getMyProfile, updateProfile } from "../../apis/auth";
import { useMutation, useQuery } from "@tanstack/react-query";
import UserContext from "../../../context/UserContext";
import { TouchableOpacity } from "react-native-gesture-handler";

const Account = () => {
  const userContext = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [phone_number, setPhone_number] = useState(0);
  const [password, setPassword] = useState("");

  const { data: profile } = useQuery({
    queryKey: ["profile"],
    queryFn: () => getMyProfile(),
  });

  useEffect(() => {
    if (profile) {
      setEmail(profile?.email);
      setPhone_number(profile?.phone_number.toString());
      setPassword(profile?.password);
    }
  }, [profile]);

  const { mutate: updateFunc, error } = useMutation({
    mutationKey: ["update"],
    mutationFn: () =>
      updateProfile({
        email,
        phone_number,
        password,
      }),
  });

  const handleSave = async () => {
    const updatedUserData = {
      email,
      phone_number,
      password,
    };
    await updateFunc(updatedUserData);
  };
  return (
    <View
      style={{
        width: "100%",
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
          onChangeText={setEmail}
          keyboardType="default"
        />

        <TextInputWithLabel
          label="Phone Number"
          placeholder="Enter your Phone Number"
          value={phone_number}
          onChangeText={setPhone_number}
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
              fontFamily: "Urbanist_600SemiBold",
            }}
          >
            Change Password
          </Text>
          <TextInputWithLabel
            label="New Password"
            placeholder="Enter your New Password"
            // isPassword={true}
            // value={password}
            onChangeText={setPassword}
          />

          <TextInputWithLabel
            label="Confirm New Password"
            placeholder="Confirm your New Password"
            isPassword={true}
          />

          <TouchableOpacity
            style={{
              width: "100%",
              height: 40,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 30,
              backgroundColor: colors.SanadRed,
              marginTop: 10,
            }}
            onPress={() => handleSave()}
          >
            <Text
              style={{
                color: colors.SanadWhite,
                fontWeight: "600",
                fontSize: 20,
                fontFamily: "Urbanist_600SemiBold",
              }}
            >
              Save Changes
            </Text>
          </TouchableOpacity>
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
