import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const ExploreEventFilter = () => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
      }}
    >
      <View
        style={{
          height: 30,
          width: "auto",
          borderRadius: 20,
          backgroundColor: "white",
          margin: 5,
          justifyContent: "center",
          alignItems: "center",
          paddingLeft: 10,
          paddingRight: 8,
          gap: 5,
          display: "flex",
          flexDirection: "row",
          backgroundColor: "#c0c2c0",
        }}
      >
        <Text
          style={{
            textAlign: "center",
            color: "white",
            fontWeight: "500",
            fontFamily: "Urbanist_500Medium",
          }}
        >
          Current
        </Text>

        <Ionicons
          style={{}}
          name="md-checkmark-circle"
          size={20}
          color="white"
        />
      </View>

      <View
        style={{
          height: 30,
          width: "auto",
          borderRadius: 20,
          backgroundColor: "white",
          margin: 5,
          justifyContent: "center",
          alignItems: "center",
          paddingLeft: 10,
          paddingRight: 8,
          gap: 5,
          display: "flex",
          flexDirection: "row",
          backgroundColor: "#c0c2c0",
        }}
      >
        <Text
          style={{
            textAlign: "center",
            color: "white",
            fontWeight: "500",
            fontFamily: "Urbanist_500Medium",
          }}
        >
          Later
        </Text>

        <MaterialCommunityIcons
          style={{}}
          name="clock-time-four"
          size={20}
          color="white"
        />
      </View>
    </View>
  );
};

export default ExploreEventFilter;

const styles = StyleSheet.create({});
