import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "../config/theme";
import UserContext from "../../context/UserContext";
import { useQuery } from "@tanstack/react-query";
import { getMyProfile } from "../apis/auth";
import defaultImage from "./../../assets/profile/profileimg.png";

const ProfileImageDuplicates = ({ onButtonPress, uri }) => {
  const userContext = useContext(UserContext);

  const [image, setImage] = useState("");
  const { data: profile } = useQuery({
    queryKey: ["profile"],
    queryFn: () => getMyProfile(),
  });
  useEffect(() => {
    if (profile) {
      setImage(profile.image);
    }
  }, [profile]);

  return (
    <View
      style={{
        alignItems: "center",
        position: "relative",
      }}
    >
      <TouchableOpacity onPress={onButtonPress}>
        <Image
          source={uri ? { uri } : defaultImage}
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

export default ProfileImageDuplicates;

const styles = StyleSheet.create({});
