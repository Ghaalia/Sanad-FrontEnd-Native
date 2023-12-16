import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "../config/theme";
import placeholder from "./../../assets/profile/profile.jpg";
import UserContext from "../../context/UserContext";
import { useQuery } from "@tanstack/react-query";
import { getMyProfile } from "../apis/auth";

const ProfileImage = ({ onButtonPress, uri }) => {
  // const userContext = useContext(UserContext);
  // // const { userId } = userContext.user;
  // const [image, setImage] = useState("");
  // const { data: profile } = useQuery({
  //   queryKey: ["profile"],
  //   queryFn: () => getMyProfile(),
  // });
  // useEffect(() => {
  //   if (profile) {
  //     setImage(profile.image);
  //   }
  // }, [profile]);

  // console.log("photo");
  // console.log({ uri: profile.image });
  return (
    <View
      style={{
        alignItems: "center",
        position: "relative",
        backgroundColor: "green",
      }}
    >
      <TouchableOpacity onPress={onButtonPress}>
        <Image
          // source={profile?.image}
          source={uri ? { uri } : placeholder}
          style={{
            borderRadius: 90,
            width: 160,
            height: 160,
            borderColor: colors.SanadBgGrey,
            borderWidth: 5,
            resizeMode: "contain",
            backgroundColor: colors.SanadWhite,
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: colors.SanadWhite,
          borderRadius: 24,
          padding: 8,
          position: "absolute",
          right: 5,
          bottom: 5,
          borderColor: colors.SanadBgGrey,
          borderWidth: 1,
        }}
        onPress={onButtonPress}
      >
        <MaterialCommunityIcons
          name="camera-outline"
          size={30}
          color={colors.SanadRed}
        />
      </TouchableOpacity>
    </View>
  );
};

export default ProfileImage;

const styles = StyleSheet.create({});
