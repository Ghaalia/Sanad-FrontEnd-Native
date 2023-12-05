import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const ExploreEventFilter = () => {
  return (
    <View style={{ display: "flex", flexDirection: "row" }}>
      <View
        style={{
          height: 30,
          width: 85,
          borderRadius: 7,
          backgroundColor: "white",
          margin: 5,
          justifyContent: "center",
          paddingLeft: 3,
          display: "flex",
          flexDirection: "row",
          backgroundColor: "#c0c2c0",
        }}
      >
        <Text style={{ textAlign: "center", paddingTop: 5, color: "white" }}>
          Current
        </Text>

        <Ionicons
          style={{ paddingTop: 3, paddingLeft: 3 }}
          name="time-outline"
          size={20}
          color="white"
        />
      </View>

      <View
        style={{
          height: 30,
          width: 70,
          borderRadius: 7,
          backgroundColor: "white",
          margin: 5,
          justifyContent: "center",
          paddingLeft: 3,
          display: "flex",
          flexDirection: "row",
          backgroundColor: "#c0c2c0",
        }}
      >
        <Text style={{ textAlign: "center", paddingTop: 5, color: "white" }}>
          Later
        </Text>

        <Ionicons
          style={{ paddingTop: 3, paddingLeft: 3 }}
          name="time-outline"
          size={20}
          color="white"
        />
      </View>
    </View>
  );
};

export default ExploreEventFilter;

const styles = StyleSheet.create({});
