import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

import ProfileImage from "../../components/ProfileImage";
import EditProfileForm from "../../components/EditProfileForm";

const EditeProfile = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#F5574E",
        justifyContent: "flex-end",
        alignItems: "center",
      }}
    >
      <View
        style={{
          backgroundColor: "white",
          height: "70%",
          width: "80%",
          flexDirection: "column",
          alignItems: "center",
          shadowColor: "black",
          shadowOffset: { height: -1, width: -10 },
          shadowOpacity: 0.25,
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
          position: "relative",
          paddingTop: 85,
        }}
      >
        {/* Profile Image */}
        <ProfileImage />

        <EditProfileForm />
      </View>
    </View>
  );
};

export default EditeProfile;

const styles = StyleSheet.create({});
