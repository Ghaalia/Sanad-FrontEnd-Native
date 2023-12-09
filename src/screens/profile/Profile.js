import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext, useState } from "react";
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

const Profile = () => {
  const navigation = useNavigation();
  const { user } = useContext(UserContext);
  const [image, setImage] = useState(user?.image);
  const [modalVisible, setModalVisible] = useState(false);

  if (!user) {
    // navigation
    navigation.replace("login");
  }

  // useEffect(() => {
  // get data from API
  // })

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

  const saveImage = async (image) => {
    try {
      // update displayed image
      setImage(image);

      // make api call to save
      // sendToBackend();

      const updatedUserData = {
        ...user,
        image,
      };
      await setAppUser(updatedUserData);
      await saveSecurely("profileAppUser", updatedUserData);

      setModalVisible(false);
    } catch (error) {
      throw error;
    }
  };

  // const sendToBackend = async () => {
  //   try {
  //     const formData = new FormData();

  //     formData.append("image", {
  //       uri: image,
  //       type: "image/png",
  //       name: "profile-image",
  //     });

  //     const config = {
  //       headers: {
  //         "Content-Type": "multipart/form-data",
  //       },
  //       transformRequest: () => {
  //         return formData;
  //       },
  //     };

  //     await axios.post("https://your-api-endpoint", formData, config);

  //     alert("success");
  //   } catch (error) {
  //     throw error;
  //   }
  // };

  // const onLogout = async () => {
  //   try {
  //     await setAppUser(null);
  //     await saveSecurely("profileAppUser", null);
  //   } catch ({ message }) {
  //     alert("Logout Error! " + message);
  //   }
  // };

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
            uri={image || user?.image}
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
            <Text style={{ color: "#1B1931", fontWeight: "600" }}>
              Volunteering
            </Text>
            <Text style={{ color: "#1B1931", fontWeight: "600" }}>History</Text>
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
              backgroundColor: "white",
              flexDirection: "row",
              alignItems: "center",
              borderRadius: 30,
              paddingHorizontal: 5,
              justifyContent: "space-between",
              borderStyle: "solid",
              borderWidth: 0.5,
              borderColor: "#F5574E",
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
              backgroundColor: "white",
              flexDirection: "row",
              alignItems: "center",
              borderRadius: 30,
              paddingHorizontal: 5,
              justifyContent: "space-between",
              borderStyle: "solid",
              borderWidth: 0.5,
              borderColor: "#F5574E",
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
              backgroundColor: "white",
              flexDirection: "row",
              alignItems: "center",
              borderRadius: 30,
              paddingHorizontal: 5,
              justifyContent: "space-between",
              borderStyle: "solid",
              borderWidth: 0.5,
              borderColor: "#F5574E",
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
              backgroundColor: "white",
              flexDirection: "row",
              alignItems: "center",
              borderRadius: 30,
              paddingHorizontal: 5,
              justifyContent: "space-between",
              borderStyle: "solid",
              borderWidth: 0.5,
              borderColor: "#F5574E",
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
