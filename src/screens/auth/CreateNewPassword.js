import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import styles from "../../css";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const CreateNewPassword = () => {
  const navigation = useNavigation();
  const [password, setPassword] = useState("");
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
            <Pressable
              onPress={() => {
                navigation.navigate("otpvarification");
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
            <Text style={styles.header}>Create New Password</Text>
            <View>
              <Text style={styles.paragraph}>
                Your new password must be unique from those previously used.
              </Text>
            </View>
            <View
              style={{
                height: 100,
                width: 393,
                justifyContent: "center",
                alignItems: "center",
                gap: 20,
              }}
            >
              <TextInput
                placeholder="New password"
                secureTextEntry
                placeholderTextColor="white"
                onChangeText={(text) => {
                  setPassword(text);
                }}
                style={styles.textinput}
              />
              <TextInput
                placeholder="Confirm password"
                placeholderTextColor="white"
                secureTextEntry
                onChangeText={(text) => {
                  setPassword(text);
                }}
                style={styles.textinput}
              />
            </View>

            {/* <Text> {JSON.stringify(error)}</Text> */}
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("passwordchanged");
              }}
              style={styles.redbutton}
            >
              <Text style={styles.button}>Reset Password</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAwareScrollView>
      </View>
    </View>
  );
};

export default CreateNewPassword;
