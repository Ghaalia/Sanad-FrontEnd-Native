import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { TextInput } from "react-native-gesture-handler";

const Search = () => {
  return (
    <View
      style={{
        height: 45,

        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        style={{ height: 30, width: 30, position: "absolute", left: 25 }}
        source={{
          uri: "https://cdn-icons-png.flaticon.com/512/2310/2310707.png",
        }}
      />
      <TextInput
        style={{
          width: "90%",
          height: "100%",
          borderWidth: "1",
          borderRadius: 17,
          paddingHorizontal: 50,
        }}
        placeholder="Search"
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({});
