import { StyleSheet, Text, View } from "react-native";
import React from "react";
import TextInputWithLabel from "../../components/TextInputWithLabel";

const Account = () => {
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
          height: "65%",
          width: "80%",
          flexDirection: "column",
          alignItems: "center",
          shadowColor: "black",
          shadowOffset: { height: -1, width: -10 },
          shadowOpacity: 0.25,
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
          position: "relative",
          paddingTop: 40,
          paddingHorizontal: 20,
          gap: 25,
        }}
      >
        <TextInputWithLabel label="Email" placeholder="Enter your Email" />

        <TextInputWithLabel
          label="Phone Number"
          placeholder="Enter your Phone Number"
        />

        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            gap: 6,
          }}
        >
          <Text>Change Your Password ? </Text>
          <Text style={styles.button}>Change</Text>
        </View>

        <TextInputWithLabel
          label="New Password"
          placeholder="Enter your New Password"
        />

        <TextInputWithLabel
          label="Confirm New Password"
          placeholder="Confirm your New Password"
        />
      </View>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({
  button: {
    color: "white",
    height: 40,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 20,
    width: "60%",
    textAlign: "center",
    backgroundColor: "#F5574E",
    overflow: "hidden",
  },
});
