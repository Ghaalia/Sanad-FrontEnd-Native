import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { TextInput } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import styles from "../../css";

const ForgotPassword = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.bg}>
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
      <Text style={styles.header}>Forgot Password ?</Text>
      <View>
        <Text style={styles.paragraph}>
          Don't worry! It occurs. Please enter the email address linked with
          your account.
        </Text>
      </View>
      <View
        style={{
          height: 100,
          width: 393,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TextInput
          placeholder="Enter your email"
          placeholderTextColor="white"
          onChangeText={(text) => {
            setEmail(text);
          }}
          style={styles.textinput}
        />
      </View>

      {/* <Text> {JSON.stringify(error)}</Text> */}
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("otpvarification");
        }}
        style={styles.redbutton}
      >
        <Text style={styles.button}>Send Code</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ForgotPassword;
