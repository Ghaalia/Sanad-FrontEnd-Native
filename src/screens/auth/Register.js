import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useAnimatedValue,
} from "react-native";
import React, { useContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useMutation } from "@tanstack/react-query";
import { getToken, register } from "../../apis/auth";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import styles from "./../../css";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import UserContext from "../../../context/UserContext";
import { FileInput } from "lucide-react-native";
import { Icon } from "react-native-elements";

const Register = () => {
  const [userInfo, setUserInfo] = useState({});
  const navigation = useNavigation();
  const { user, setUser } = useContext(UserContext);
  const [gender, setGender] = useState(null);

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
          }}
        >
          <View style={styles.bg}>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
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

              <TouchableOpacity
                onPress={() => {
                  mutate_register();
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
