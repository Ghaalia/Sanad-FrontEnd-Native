import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ProfileImage = () => {
  return (
    <View
      style={{
        width: 160,
        height: 160,
        backgroundColor: "blue",
        borderRadius: 100,
        position: "absolute",
        top: -80,
      }}
    ></View>
  );
};

export default ProfileImage;

const styles = StyleSheet.create({});
