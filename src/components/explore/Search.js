import { Image, StyleSheet, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { FlatList, TextInput } from "react-native-gesture-handler";
import EventCard from "./EventCard";
import { useQuery } from "@tanstack/react-query";
import { getAllEvents } from "../../apis/event";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";
import { instance } from "../../apis";
import filter from "lodash.filter";

const Search = ({ setFiltered }) => {
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
          paddingHorizontal: 50,
        }}
        placeholder="Search"
        clearButtonMode="always"
        onChangeText={setFiltered}
        autoCapitalize="none"
        autoCorrect={false}
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({});
