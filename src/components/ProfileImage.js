import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "../config/theme";
import placeholder from "./../../assets/profile/profile.jpg";

const ProfileImage = ({ onButtonPress, uri }) => {
  return (
    <View
      style={{
        alignItems: "center",
        position: "relative",
      }}
    >
      <TouchableOpacity onPress={onButtonPress}>
        <Image
          source={uri ? { uri } : placeholder}
          style={{
            borderRadius: 90,
            width: 160,
            height: 160,
            borderColor: colors.SanadBgGrey,
            borderWidth: 5,
            resizeMode: "contain",
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
