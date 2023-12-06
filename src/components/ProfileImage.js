import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const ProfileImage = () => {
  return (
    <View
      style={{
        width: 160,
        height: 160,
        borderRadius: 100,
        position: "absolute",
        top: -80,
      }}
    >
      <Text>
        <Image
          source={require("../../assets/profile/profile-demo.png")}
          style={{
            width: 160,
            height: 160,
            // borderBlockColor: "white",
            // borderWidth: 7,
            // borderStyle: "solid",
            resizeMode: "contain",
          }}
        />
      </Text>
    </View>
  );
};

export default ProfileImage;

const styles = StyleSheet.create({});
