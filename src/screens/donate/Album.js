import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { colors, fonts } from "../../config/theme";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import * as ImageManipulator from "expo-image-manipulator";
import { BaseURL } from "../../apis";
import { saveSecurely } from "../../utils/storage";
import UploadModal from "../../components/profile/UploadModal";

const Album = () => {
  const [modalVisible, setModalVisible] = useState(false);

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
        width: "100%",
        backgroundColor: colors.SanadBgGrey,
        alignItems: "center",
      }}
    >
      <View
        style={{
          height: "15%",
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          paddingTop: 30,
          backgroundColor: colors.SanadBlue1,
          borderEndEndRadius: 40,
          borderEndStartRadius: 40,
          shadowColor: "black",
          shadowOffset: { height: 8, width: 4 },
          shadowRadius: 8,
          shadowOpacity: 0.2,
        }}
      >
        <Text
          style={{
            color: colors.SanadWhite,
            fontSize: 40,
            fontFamily: fonts.semibold,
          }}
        >
          Donate
        </Text>
        <Image
          style={{ width: "35%", resizeMode: "contain" }}
          source={require("../../../assets/onlylogo.png")}
        />
      </View>
      <View style={styles.container}>
        <View style={styles.container_title}>
          <Text style={styles.container_title_text}>Item Categories</Text>
        </View>
        <ScrollView
          style={{ height: "75%", width: "88%", flexDirection: "column" }}
        >
          <View style={styles.category_photos_container}>
            <View style={styles.category_container}>
              <View style={styles.iconAndName}>
                <MaterialCommunityIcons
                  name="sofa-single"
                  size={24}
                  color="#F5574E"
                />
                <Text style={styles.category_name}>Furniture</Text>
              </View>
              <View style={styles.photo_counter_container}>
                <Text>0</Text>
                <Text>|</Text>
                <Text>30</Text>
              </View>
            </View>
            <TouchableOpacity
              style={styles.photos_container_wrap}
              onPress={() => setModalVisible(true)}
            >
              <View style={styles.add_button}>
                <Text style={{ fontSize: 30 }}>+</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.category_photos_container}>
            <View style={styles.category_container}>
              <View style={styles.iconAndName}>
                <MaterialCommunityIcons
                  name="fridge"
                  size={24}
                  color="#F5574E"
                />
                <Text style={styles.category_name}>Home Devices</Text>
              </View>
              <View style={styles.photo_counter_container}>
                <Text>0</Text>
                <Text>|</Text>
                <Text>30</Text>
              </View>
            </View>
            <TouchableOpacity
              style={styles.photos_container_wrap}
              onPress={() => setModalVisible(true)}
            >
              <View style={styles.add_button}>
                <Text style={{ fontSize: 30 }}>+</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.category_photos_container}>
            <View style={styles.category_container}>
              <View style={styles.iconAndName}>
                <MaterialCommunityIcons
                  name="tablet-cellphone"
                  size={24}
                  color="#F5574E"
                />
                <Text style={styles.category_name}>Electronics</Text>
              </View>
              <View style={styles.photo_counter_container}>
                <Text>0</Text>
                <Text>|</Text>
                <Text>30</Text>
              </View>
            </View>
            <TouchableOpacity
              style={styles.photos_container_wrap}
              onPress={() => setModalVisible(true)}
            >
              <View style={styles.add_button}>
                <Text style={{ fontSize: 30 }}>+</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.category_photos_container}>
            <View style={styles.category_container}>
              <View style={styles.iconAndName}>
                <Ionicons name="ios-shirt" size={24} color="#F5574E" />
                <Text style={styles.category_name}>Clothes</Text>
              </View>
              <View style={styles.photo_counter_container}>
                <Text>0</Text>
                <Text>|</Text>
                <Text>30</Text>
              </View>
            </View>
            <TouchableOpacity
              style={styles.photos_container_wrap}
              onPress={() => setModalVisible(true)}
            >
              <View style={styles.add_button}>
                <Text style={{ fontSize: 30 }}>+</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
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

export default Album;

const styles = StyleSheet.create({
  container: {
    height: "75%",
    width: "100%%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  container_title: {
    width: "100%",
    paddingVertical: 20,
  },
  container_title_text: {
    textAlign: "center",
    fontSize: 22,
    fontWeight: fonts.semibold,
  },

  //Card of Category + Photos
  category_photos_container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  category_container: {
    width: "100%",
    height: "auto",
    backgroundColor: colors.SanadWhite,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  iconAndName: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  category_name: {
    fontWeight: fonts.semibold,
    color: colors.SanadBlue1,
  },
  photo_counter_container: {
    flexDirection: "row",
    gap: 3,
  },
  photos_container_wrap: {
    flexWrap: "wrap",
    paddingVertical: 10,
    gap: 10,
  },
  add_button: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.SanadWhite,
    borderRadius: 10,
  },
});
