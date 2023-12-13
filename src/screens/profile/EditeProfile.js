import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { useState, useContext } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

import ProfileImage from "../../components/ProfileImage";
import EditProfileForm from "../../components/EditProfileForm";
import UserContext from "../../../context/UserContext";
import UploadModal from "../../components/profile/UploadModal";
import * as ImagePicker from "expo-image-picker";
import { useQuery } from "@tanstack/react-query";
import { BaseURL } from "../../apis";

const EditeProfile = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [image, setImage] = useState(user?.image);
  const { user } = useContext(UserContext);

  const { data: profile } = useQuery({
    queryKey: ["profile"],
    queryFn: () => getMyProfile(),
  });

  useEffect(() => {
    if (profile && profile.image) {
      setImage(`${BaseURL}/${profile.image}`);
    }
  }, [profile]);

  const uploadImage = async (mode) => {
    try {
      let result = {};

      if (mode === "gallery") {
        await ImagePicker.requestMediaLibraryPermissionsAsync();
        result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [1, 1],
          quality: 1,
        });
      } else {
        await ImagePicker.requestCameraPermissionsAsync();
        result = await ImagePicker.launchCameraAsync({
          cameraType: ImagePicker.CameraType.front,
          allowsEditing: true,
          aspect: [1, 1],
          quality: 1,
        });
      }

      if (!result.canceled) {
        // save image
        await saveImage(result.assets[0].uri);
      }
    } catch (error) {
      alert("Error uploading image: " + error.message);
      setModalVisible(false);
    }
  };

  const removeImage = async () => {
    try {
      saveImage(null);
    } catch ({ message }) {
      alert(message);
      setModalVisible(false);
    }
  };
  const getFilenameFromUri = (uri) => {
    return uri.split("/").pop(); // this will return the last segment after '/' which is basically the filename
  };

  const saveImage = async (uri) => {
    try {
      let filename = null;
      if (uri) {
        const resizedImage = await ImageManipulator.manipulateAsync(
          uri,
          [{ resize: { width: 800 } }],
          { compress: 0.7, format: ImageManipulator.SaveFormat.JPEG }
        );

        // get filename from URI
        filename = getFilenameFromUri(resizedImage.uri);

        // update displayed image with full URI
        setImage(resizedImage.uri);
      } else {
        // in case of removing the image
        setImage(null);
      }

      // update user data with filename instead of full URI
      const updatedUserData = {
        ...user,
        image: filename,
      };
      await setUser(updatedUserData);

      const minimalUserData = {
        id: user._id,
        token: user.token,
        image: filename, // save only the filename
      };
      await saveSecurely("profileAppUser", JSON.stringify(minimalUserData));

      setModalVisible(false);
    } catch (error) {
      console.error("Error in saveImage:", error);
      alert("Error while saving image");
      setModalVisible(false);
    }
  };
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
          fontFamily: "Urbanist_600SemiBold",
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
        <TouchableOpacity
          style={{ position: "absolute", top: -80, zIndex: 100 }}
        >
          <ProfileImage
            onButtonPress={() => setModalVisible(true)}
            uri={image || user?.image}
          />
        </TouchableOpacity>
        <View style={{ flex: 0.73, paddingVertical: 20 }}>
          <EditProfileForm />
        </View>
      </View>
      <UploadModal
        modalVisible={modalVisible}
        onBackPress={() => {
          setModalVisible(false);
        }}
        onCameraPress={() => uploadImage()}
        onGalleryPress={() => uploadImage("gallery")}
        onRemovePress={() => removeImage()}
      />
    </View>
  );
};

export default EditeProfile;

const styles = StyleSheet.create({});
