import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import TextInputWithLabel from "../../components/TextInputWithLabel";

const EditeProfile = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#F5574E",
        justifyContent: "flex-end",
        alignItems: "center",
      }}
    >
      <View
        style={{
          backgroundColor: "white",
          height: "70%",
          width: "85%",
          flexDirection: "column",
          alignItems: "center",
          shadowColor: "black",
          shadowOffset: { height: -1, width: -10 },
          shadowOpacity: 0.25,
          borderRadius: 16,
          position: "relative",
          paddingTop: 90,
        }}
      >
        <View
          style={{
            width: 160,
            height: 160,
            backgroundColor: "blue",
            borderRadius: 100,
            position: "absolute",
            top: -80,
          }}
        ></View>
        <ScrollView
          style={{
            width: "100%",
            padding: 10,
            height: "100%",
          }}
          contentContainerStyle={{
            display: "flex",
            flexDirection: "column",
            gap: 15,
          }}
        >
          <TextInputWithLabel
            label="First name"
            placeholder="Please enter your first name"
          />
          <TextInputWithLabel
            label="Last name"
            placeholder="Please enter your last name"
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default EditeProfile;

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderWidth: 0.25,
    paddingHorizontal: 10,
    borderRadius: 20,
    width: 250,
  },
  DateOfBirth_input: {
    height: 40,
    borderWidth: 0.25,
    borderRadius: 20,
    width: 80,
    textAlign: "center",
  },
});
