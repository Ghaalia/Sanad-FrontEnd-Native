import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native-gesture-handler";
import { Image } from "react-native";
import styles from "./../../css";

const PasswordChanged = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor: "#1B1931" }}>
      <Image
        style={{ height: 180, width: 395 }}
        source={require("../../../assets/Group143.png")}
      />
      <View
        style={{
          justifyContent: "center",
          alignSelf: "center",
          alignItems: "center",
          marginTop: 30,
        }}
      >
        <View style={{ padding: 20 }}>
          <Image source={require("../../../assets/Sticker.png")} />
        </View>
        <Text style={styles.header}>Password Changed !</Text>
        <View>
          <Text style={styles.paragraph}>
            Your new password has been changed successfully.
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("login");
          }}
          style={styles.redbutton}
        >
          <Text style={styles.button}>Back to Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PasswordChanged;
