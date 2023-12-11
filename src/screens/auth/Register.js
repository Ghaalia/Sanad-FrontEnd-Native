import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useAnimatedValue,
} from "react-native";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import React, { useContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useMutation } from "@tanstack/react-query";
import { getToken, register } from "../../apis/auth";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import styles from "./../../css";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import UserContext from "../../../context/UserContext";
import * as ImagePicker from "expo-image-picker";

const Register = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [userInfo, setUserInfo] = useState({});
  const navigation = useNavigation();
  const { user, setUser } = useContext(UserContext);
  const [gender, setGender] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setSelectedImage(result.uri);
    }
  };

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [date, setDate] = useState(new Date());

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setDate(date);
    const formattedDate = `${("0" + date.getDate()).slice(-2)}-${(
      "0" +
      (date.getMonth() + 1)
    ).slice(-2)}-${date.getFullYear()}`;
    setUserInfo({
      ...userInfo,
      date_of_birth: formattedDate, // Now in DD-MM-YYYY format
    });
    hideDatePicker();
  };

  const getGenderButtonStyle = (gender) => ({
    ...styles.genderButton,
    opacity: userInfo.gender === gender ? 1 : 0.3,
  });

  const { mutate: mutate_register, error } = useMutation({
    mutationKey: ["register"],
    mutationFn: () => register(userInfo),
    onSuccess: () => {
      setUser(true);
      navigation.navigate("profile");
    },
  });
  // const handleGenderSelect = (selectedGender) => {
  //   setGender(selectedGender);
  // };

  return (
    <View style={{ flex: 1, backgroundColor: "#1B1931" }}>
      <View>
        <Image
          style={{ height: 180, width: 395 }}
          source={require("../../../assets/Group143.png")}
        />

        <KeyboardAwareScrollView
          style={{
            height: 600,
            paddingHorizontal: 30,
          }}
        >
          <View style={styles.bg}>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Pressable
                onPress={() => {
                  navigation.navigate("login");
                }}
                style={{
                  justifyContent: "center",
                  alignContent: "center",
                  padding: 20,
                }}
              >
                <Image
                  style={{
                    width: 41,
                    height: 41,
                  }}
                  source={require("../../../assets/back.png")}
                />
              </Pressable>

              <View
                style={{
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 20,
                }}
              >
                <Text style={styles.header}>Create Account</Text>
                <TextInput
                  placeholder="Phone number"
                  placeholderTextColor="white"
                  onChangeText={(text) => {
                    setUserInfo({ ...userInfo, phone_number: text });
                  }}
                  style={styles.textinput}
                />
                <TextInput
                  placeholder="Email"
                  placeholderTextColor="white"
                  onChangeText={(text) => {
                    setUserInfo({ ...userInfo, email: text });
                  }}
                  style={styles.textinput}
                />
                <TextInput
                  placeholder="Password"
                  placeholderTextColor="white"
                  secureTextEntry
                  onChangeText={(text) => {
                    setUserInfo({ ...userInfo, password: text });
                  }}
                  style={styles.textinput}
                />
                <TextInput
                  placeholder="Confirm password"
                  placeholderTextColor="white"
                  secureTextEntry
                  style={styles.textinput}
                />
                <TextInput
                  placeholder="First name"
                  placeholderTextColor="white"
                  onChangeText={(text) => {
                    setUserInfo({ ...userInfo, first_name: text });
                  }}
                  style={styles.textinput}
                />
                <TextInput
                  placeholder="Last name"
                  placeholderTextColor="white"
                  onChangeText={(text) => {
                    setUserInfo({ ...userInfo, last_name: text });
                  }}
                  style={styles.textinput}
                />
              </View>

              <TouchableOpacity onPress={pickImage} style={styles.selectDate}>
                <FontAwesome name="photo" size={20} color="#F5574E" />
                <Text style={styles.selectDateText}>Pick an Image</Text>
              </TouchableOpacity>

              {selectedImage && (
                <Image
                  source={{ uri: selectedImage }}
                  style={{ width: 160, height: 160 }}
                />
              )}

              <TouchableOpacity
                onPress={showDatePicker}
                style={styles.selectDate}
              >
                <MaterialIcons name="date-range" size={24} color="#F5574E" />
                <Text style={styles.selectDateText}>Select Date of Birth</Text>
              </TouchableOpacity>
              <View
                style={{
                  width: "100%",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  alignSelf: "center",
                  paddingTop: 30,
                }}
              >
                <TouchableOpacity
                  onPress={() => {
                    setUserInfo({ ...userInfo, gender: "Female" }); // Set gender to Female
                  }}
                  style={getGenderButtonStyle("Female")}
                >
                  <Image
                    style={{
                      width: 60,
                      height: 60,
                      resizeMode: "contain",
                    }}
                    source={require("../../../assets/profile/female-tapped.png")}
                  />
                  <Text style={styles.genderButtonText}>Female</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    setUserInfo({ ...userInfo, gender: "Male" }); // Set gender to Male
                  }}
                  style={getGenderButtonStyle("Male")}
                >
                  <Image
                    style={{
                      width: 60,
                      height: 60,
                      resizeMode: "contain",
                    }}
                    source={require("../../../assets/profile/male-tapped.png")}
                  />
                  <Text style={styles.genderButtonText}>Male</Text>
                </TouchableOpacity>
              </View>

              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
                maximumDate={new Date()} // To set the maximum selectable date to the current date
              />
              <TouchableOpacity
                onPress={() => {
                  mutate_register(userInfo, selectedImage);
                }}
                style={styles.redbutton}
              >
                <Text style={styles.button}>Agree and Register</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </View>
    </View>
  );
};

export default Register;

// formValidation = async () => {
//   this.setState({ loading: true });
//   let errorFlag = false;
//   if (this.state.password !== this.state.confirmPassword) {
//     errorFlag = true;
//     this.setState({
//       passwordErrorMessage: "Passwoad and confirm password should be same.",
//     });
//   }
// };

{
  /* <FileInput
                  placeholder="image"
                  type="file"
                  onChange={(image) => {
                    setUserInfo({ ...userInfo, image: image });
                  }}
                /> */
}
