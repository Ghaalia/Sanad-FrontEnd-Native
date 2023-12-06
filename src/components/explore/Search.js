import { Image, StyleSheet, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { TextInput } from "react-native-gesture-handler";

const Search = () => {
  return (
    <View
      style={{
        height: 45,
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <FontAwesome
        name="search"
        size={24}
        color="#F5574E"
        style={{
          position: "absolute",
          left: 43,
          zIndex: 100,
        }}
      />
      <TextInput
        style={{
          width: "85%",
          height: "100%",
          backgroundColor: "white",
          shadowColor: "black",
          shadowOffset: { height: 4, width: 1 },
          shadowRadius: 4,
          shadowOpacity: 0.1,
          borderRadius: 50,
          // borderWidth: "1",
          // borderRadius: 10,
          paddingHorizontal: 50,
        }}
        placeholder="Search"
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({});
