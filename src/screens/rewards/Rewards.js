import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Svg, { Circle, Rect } from "react-native-svg";

const Rewards = () => {
  return (
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
  );
};

export default Rewards;

const styles = StyleSheet.create({});
