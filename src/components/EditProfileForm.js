import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useContext } from "react";
import TextInputWithLabel from "./TextInputWithLabel";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getMyProfile } from "../apis/auth";
import UserContext from "../../context/UserContext";

const EditProfileForm = () => {
  const { user, setUser } = useContext(UserContext);

  const { data: profile } = useQuery({
    queryKey: ["profile"],
    queryFn: () => getMyProfile(),
  });
  console.log(profile);
  return (
    <ScrollView
      style={{
        width: "100%",
        paddingTop: 100,
      }}
      contentContainerStyle={{
        height: "100%",
        flexDirection: "column",
        gap: 15,
      }}
    >
      <TextInputWithLabel
        label="First name"
        placeholder="Enter your first name"
      />
      <Text style={{ color: "black" }}> {profile?.email}</Text>
      <Text style={{ color: "black" }}> {profile?.first_name}</Text>
      {/* <View>{profile?.image}</View> */}

      <TextInputWithLabel
        label="Last name"
        placeholder="Enter your last name"
      />

      <View style={{ gap: 5 }}>
        <Text> Gender </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 15,
          }}
        >
          <Text
            style={styles.button}
            // onPress={setFemale}
          >
            Female
          </Text>
          <Text
            style={styles.button}
            // onPress={setMale}
          >
            Male
          </Text>
        </View>
      </View>

      <View style={{ gap: 5 }}>
        <Text> Date of Birth </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 5,
          }}
        >
          <TextInput
            keyboardType="numeric"
            style={styles.DateOfBirth_input}
            placeholder="D"
          />
          <TextInput
            keyboardType="numeric"
            style={styles.DateOfBirth_input}
            placeholder="M"
          />
          <TextInput
            keyboardType="numeric"
            style={styles.DateOfBirth_input}
            placeholder="Y"
          />
        </View>
      </View>

      <View style={{ gap: 5 }}>
        <Text> Biography / Skills </Text>
        <View
          style={{
            width: "100%",
            minHeight: "30%",
            display: "flex",
            flexDirection: "row",
            gap: 5,
          }}
        >
          <TextInput
            multiline
            maxLength={150}
            style={{
              borderRadius: 16,
              borderWidth: 0.25,
              width: "95%",
              height: "100%",
            }}
          />
        </View>
      </View>
      {/* <UploadModal
        modalVisible={modalVisible}
        onBackPress={() => {
          setModalVisible(false);
        }}
        onCameraPress={() => uploadImage()}
        onGalleryPress={() => uploadImage("gallery")}
        onRemovePress={() => removeImage()}
      /> */}
    </ScrollView>
  );
};

export default EditProfileForm;

const styles = StyleSheet.create({
  button: {
    height: 40,
    borderWidth: 0.25,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    width: "45%",
    textAlign: "center",
  },
  DateOfBirth_input: {
    height: 40,
    borderWidth: 0.25,
    borderRadius: 20,
    width: "30%",
    textAlign: "center",
  },
});
