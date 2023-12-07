import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native-gesture-handler";
import styles from "../../css";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const OtpVerification = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor: "#1B1931" }}>
      <View>
        <Image
          style={{ height: 180, width: 395 }}
          source={require("../../../assets/Group143.png")}
        />
        <ScrollView>
          <View style={styles.bg}>
            <Pressable
              onPress={() => {
                navigation.navigate("forgotpassword");
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
            <Text style={styles.header}>OTP Verification</Text>
            <View>
              <Text style={styles.paragraph}>
                Enter the verification code we just sent on your email address.
              </Text>
            </View>
            <View
              style={{
                height: 100,
                width: 393,
                justifyContent: "center",
                alignItems: "center",
                gap: 15,
                marginTop: 20,
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >
              <TextInput
                placeholder=""
                placeholderTextColor="white"
                style={styles.boxinput}
              />
              <TextInput
                placeholder=""
                placeholderTextColor="white"
                style={styles.boxinput}
              />
              <TextInput
                placeholder=""
                placeholderTextColor="white"
                style={styles.boxinput}
              />
              <TextInput
                placeholder=""
                placeholderTextColor="white"
                style={styles.boxinput}
              />
            </View>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate("createnewpassword");
              }}
              style={styles.redbutton}
            >
              <Text style={styles.button}>Verify</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default OtpVerification;
