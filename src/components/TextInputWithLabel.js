import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

const TextInputWithLabel = ({
  label = "please enter a label ",
  placeholder = "Please Enter a placeholder",
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
      <Text> {label} </Text>
      <TextInput
        style={{
          height: 40,
          borderWidth: 0.25,
          paddingHorizontal: 10,
          borderRadius: 20,
          width: "100%",
        }}
        placeholder={placeholder}
      />
    </View>
  );
};

export default TextInputWithLabel;

const styles = StyleSheet.create({});
