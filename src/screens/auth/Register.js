import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useAnimatedValue,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useMutation } from "@tanstack/react-query";
import { register } from "../../apis/auth";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import styles from "./../../css";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const Register = () => {
  const [userInfo, setUserInfo] = useState({});
  const navigation = useNavigation();

  const { mutate: mutate_register, error } = useMutation({
    mutationKey: ["register"],
    mutationFn: () => register(userInfo),
    onSuccess: (data) => {
      console.log(data);
    },
  });
  formValidation = async () => {
    this.setState({ loading: true });
    let errorFlag = false;
    if (this.state.password !== this.state.confirmPassword) {
      errorFlag = true;
      this.setState({
        passwordErrorMessage: "Passwoad and confirm password should be same.",
      });
    }
  };
  return (
    <KeyboardAwareScrollView>
      <View style={styles.bg}>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Pressable
            onPress={() => {
              navigation.navigate("login");
            }}
            style={{
              justifyContent: "center",
              alignContent: "center",
              padding: 30,
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
              // onChangeText={(text) => this.setState({ password: text })}
            />
          </View>

          <TouchableOpacity
            onPress={() => {
              mutate_register;
              // navigation.navigate("login");
            }}
            style={styles.redbutton}
          >
            <Text style={styles.button}>Agree and Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Register;
