import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import TextInputWithLabel from "./TextInputWithLabel";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getMyProfile, updateProfile } from "../apis/auth";
import UserContext from "../../context/UserContext";
import { colors } from "../config/theme";

const EditProfileForm = () => {
  const userContext = useContext(UserContext);
  const { userId } = userContext.user;

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState(profile?.gender || "");
  const [dob, setDob] = useState("");
  const [skills, setSkills] = useState("");

  const { data: profile } = useQuery({
    queryKey: ["profile"],
    queryFn: () => getMyProfile(),
  });

  useEffect(() => {
    if (profile) {
      setFirstName(profile.first_name);
      setLastName(profile.last_name);
      setGender(profile.gender);
      setDob(profile.dob);
      setSkills(profile.skills);
    }
  }, [profile]);

  const { mutate: updateFunc, error } = useMutation({
    mutationKey: ["update"],
    mutationFn: () =>
      updateProfile({
        first_name: firstName,
        last_name: lastName,
        gender: gender,
        dob: dob,
        skills: skills,
      }),
  });

  const handleSave = async () => {
    const updatedUserData = {
      first_name: firstName,
      last_name: lastName,
      gender: gender,
      dob: dob,
      skills: skills,
    };
    await updateFunc(updatedUserData);
  };

  return (
    <ScrollView
      style={{
        width: "100%",
      }}
      contentContainerStyle={{
        flexDirection: "column",
        gap: 15,
      }}
    >
      <TextInputWithLabel
        label="First name"
        placeholder="Enter your first name"
        value={firstName}
        onChangeText={setFirstName}
      />

      <TextInputWithLabel
        label="Last name"
        placeholder="Enter your last name"
        value={lastName}
        onChangeText={setLastName}
      />

      <View style={{ gap: 5 }}>
        <Text style={{ color: colors.SanadBlue1 }}> Gender </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity
            style={[
              styles.button,
              gender === "Male" ? { backgroundColor: colors.SanadRed } : null,
            ]}
            onPress={() => setGender("Male")}
          >
            <Text
              style={{
                color:
                  gender === "Male" ? colors.SanadWhite : colors.SanadBlue1,
                fontWeight: gender === "Male" ? "700" : "400",
                textAlign: "center",
              }}
            >
              Male
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              gender === "Female" ? { backgroundColor: colors.SanadRed } : null,
            ]}
            onPress={() => setGender("Female")}
          >
            <Text
              style={{
                color:
                  gender === "Female" ? colors.SanadWhite : colors.SanadBlue1,
                fontWeight: gender === "Female" ? "700" : "400",
                textAlign: "center",
              }}
            >
              Female
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ gap: 5, width: "100%" }}>
        <Text> Date of Birth </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            gap: 5,
          }}
        >
          <TextInput
            keyboardType="numeric"
            style={styles.DateOfBirth_input}
            placeholder="Date of Birth"
            value={dob}
            onChangeText={(text) => setDob(text)}
          />
        </View>
      </View>

      <View style={{ gap: 5 }}>
        <Text> Biography / Skills </Text>
        <View
          style={{
            width: "100%",
            minHeight: 150,
            display: "flex",
            flexDirection: "row",
            gap: 5,
          }}
        >
          <TextInput
            multiline={true}
            maxLength={150}
            style={{
              borderRadius: 16,
              backgroundColor: colors.SanadBgGrey,
              padding: 10,
              width: "100%",
            }}
            value={skills}
            onChangeText={setSkills}
          />
        </View>
        <TouchableOpacity
          style={{
            width: "100%",
            height: 40,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 30,
            backgroundColor: colors.SanadRed,
            marginTop: 10,
          }}
          onPress={() => handleSave()}
        >
          <Text
            style={{
              color: colors.SanadWhite,
              fontWeight: "600",
              fontSize: 20,
            }}
          >
            Save
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default EditProfileForm;

const styles = StyleSheet.create({
  button: {
    height: 40,
    backgroundColor: colors.SanadBgGrey,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    width: "48%",
    textAlign: "center",
  },
  DateOfBirth_input: {
    height: 40,
    backgroundColor: colors.SanadBgGrey,
    borderRadius: 20,
    width: "100%",
    textAlign: "center",
  },
});
