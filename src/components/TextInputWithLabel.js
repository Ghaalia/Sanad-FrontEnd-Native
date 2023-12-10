import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { colors } from "../config/theme";

const TextInputWithLabel = ({
  label = "please enter a label ",
  placeholder = "Please Enter a placeholder",
  value,
  onChangeText,
  keyboardType = "default",
  isPassword = false,
}) => {
  return (
    <View
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 5,
      }}
    >
      <Text style={{ color: colors.SanadBlue1 }}> {label} </Text>
      <TextInput
        style={{
          height: 40,
          backgroundColor: colors.SanadBgGrey,
          paddingHorizontal: 10,
          borderRadius: 20,
          width: "100%",
        }}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        secureTextEntry={isPassword}
      />
    </View>
  );
};

export default TextInputWithLabel;
