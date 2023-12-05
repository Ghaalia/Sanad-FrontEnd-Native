import { StyleSheet, Text, View } from "react-native";
import React from "react";

const VolunteeringHistory = () => {
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
      ></View>
    </View>
  );
};

export default VolunteeringHistory;

const styles = StyleSheet.create({});
