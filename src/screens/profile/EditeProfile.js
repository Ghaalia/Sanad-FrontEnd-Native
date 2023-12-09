import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { useState, useContext } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

import ProfileImage from "../../components/ProfileImage";
import EditProfileForm from "../../components/EditProfileForm";

const EditeProfile = ({ route }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [image, setImage] = useState(route.params?.image);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#F5574E",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Text
        style={{
          flex: 1,
          color: "white",
          fontWeight: "600",
          marginTop: 75,
          justifyContent: "flex-start",
          alignItems: "flex-start",
          fontSize: 28,
          // backgroundColor: "green",
        }}
      >
        Edit Profile
      </Text>
      <View
        style={{
          backgroundColor: "white",
          height: "75%",
          width: "88%",
          paddingHorizontal: 30,
          gap: 45,
          flexDirection: "column",
          justifyContent: "center",
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
        {/* Profile Image */}
        <TouchableOpacity style={{ position: "absolute", top: -80 }}>
          <ProfileImage
            uri={image}
            onButtonPress={() => setModalVisible(true)}
          />
        </TouchableOpacity>
        <EditProfileForm />
      </View>
    </View>
  );
};

export default EditeProfile;

const styles = StyleSheet.create({});
