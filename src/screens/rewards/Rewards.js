import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Svg, { Circle, Rect } from "react-native-svg";

const Rewards = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "red" }}>
      <View style={{ flex: 10, backgroundColor: "blue" }}></View>

      <View style={{ flex: 50, backgroundColor: "pink" }}></View>
      <View style={{ flex: 40, backgroundColor: "yellow" }}></View>
      <View style={{ flex: 1, marginTop: 200 }}>
        <Circle
          cx="300"
          cy="300"
          r="45"
          stroke="blue"
          strokeWidth="2.5"
          fill="green"
        />
      </View>
    </View>
  );
};

export default Rewards;

const styles = StyleSheet.create({});
