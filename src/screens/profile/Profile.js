import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import ProfileImage from "../../components/ProfileImage";
import {
  FontAwesome5,
  Ionicons,
  MaterialIcons,
  Feather,
} from "@expo/vector-icons";
import UserContext from "../../../context/UserContext";
import UploadModal from "../../components/profile/UploadModal";
import { BaseURL } from "../../apis";
import { saveSecurely } from "../../utils/storage";
import * as ImagePicker from "expo-image-picker";
import * as ImageManipulator from "expo-image-manipulator";
import { useQuery } from "@tanstack/react-query";
import { getMyProfile } from "../../apis/auth";
import { colors } from "../../config/theme";

const Profile = () => {
  const navigation = useNavigation();
  const { user, setUser } = useContext(UserContext);
  const [image, setImage] = useState(user?.image);
  const [modalVisible, setModalVisible] = useState(false);

  const { data: profile } = useQuery({
    queryKey: ["profile"],
    queryFn: () => getMyProfile(),
  });

  if (!user) {
    // navigation
    navigation.replace("login");
  }

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
    return uri.split("/").pop(); // This will return the last segment after '/' which is typically the filename
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
        }}
      >
        My Profile
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
        {/*  Profile Image */}
        <TouchableOpacity style={{ position: "absolute", top: -80 }}>
          <ProfileImage
            onButtonPress={() => setModalVisible(true)}
            uri={image}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("volunteeringHistory");
          }}
          style={{
            backgroundColor: "white",
            height: 124.5,
            width: "100%",
            gap: 10,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 16,
            shadowColor: "black",
            shadowOffset: { height: 2, width: -5 },
            shadowOpacity: 0.25,
            borderTopRightRadius: 16,
            borderTopLeftRadius: 16,
          }}
        >
          <FontAwesome5 name="handshake" size={28} color="#F5574E" />
          <View
            style={{
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "#1B1931",
                fontWeight: "600",
                fontFamily: "Urbanist_600SemiBold",
              }}
            >
              Volunteering
            </Text>
            <Text
              style={{
                color: "#1B1931",
                fontWeight: "600",
                fontFamily: "Urbanist_600SemiBold",
              }}
            >
              History
            </Text>
          </View>
        </TouchableOpacity>

        <View
          style={{
            width: "100%",
            height: 200,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("editeProfile");
            }}
            style={{
              width: "100%",
              height: 40,
              backgroundColor: colors.SanadBgGrey,
              flexDirection: "row",
              alignItems: "center",
              borderRadius: 30,
              paddingHorizontal: 5,
              justifyContent: "space-between",
              borderColor: colors.SanadRed,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                gap: 5,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Ionicons
                name="person-circle-outline"
                size={32}
                color="#F5574E"
              />
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "600",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "Urbanist_600SemiBold",
                }}
              >
                Edit My Profile
              </Text>
            </View>
            <MaterialIcons name="arrow-forward-ios" size={24} color="#1B1931" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("account");
            }}
            style={{
              width: "100%",
              height: 40,
              backgroundColor: colors.SanadBgGrey,
              flexDirection: "row",
              alignItems: "center",
              borderRadius: 30,
              paddingHorizontal: 5,
              justifyContent: "space-between",
              borderColor: colors.SanadRed,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                gap: 5,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <View
                style={{
                  width: 30,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <FontAwesome5 name="lock" size={20} color="#F5574E" />
              </View>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "600",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "Urbanist_600SemiBold",
                }}
              >
                Account
              </Text>
            </View>
            <MaterialIcons name="arrow-forward-ios" size={24} color="#1B1931" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("setting");
            }}
            style={{
              width: "100%",
              height: 40,
              backgroundColor: colors.SanadBgGrey,
              flexDirection: "row",
              alignItems: "center",
              borderRadius: 30,
              paddingHorizontal: 5,
              justifyContent: "space-between",
              borderColor: colors.SanadRed,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                gap: 5,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <View
                style={{
                  width: 30,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Feather name="settings" size={24} color="#F5574E" />
              </View>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "600",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "Urbanist_600SemiBold",
                }}
              >
                Settings
              </Text>
            </View>
            <MaterialIcons name="arrow-forward-ios" size={24} color="#1B1931" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("contactUs");
            }}
            style={{
              width: "100%",
              height: 40,
              backgroundColor: colors.SanadBgGrey,
              flexDirection: "row",
              alignItems: "center",
              borderRadius: 30,
              paddingHorizontal: 5,
              justifyContent: "space-between",
              borderColor: colors.SanadRed,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                gap: 5,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <View
                style={{
                  width: 30,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Ionicons name="md-call-sharp" size={24} color="#F5574E" />
              </View>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "600",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "Urbanist_600SemiBold",
                }}
              >
                Contact Us
              </Text>
            </View>
            <MaterialIcons name="arrow-forward-ios" size={24} color="#1B1931" />
          </TouchableOpacity>
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

export default Profile;
