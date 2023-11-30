import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Profile = () => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#F5574E",
        justifyContent: "flex-end",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <View
        style={{
          backgroundColor: "white",
          height: 563,
          width: 345,
          paddingHorizontal: 40,
          paddingBottom: 40,
          paddingTop: 60,
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "center",
          shadowColor: "black",
          shadowOffset: { height: -1, width: -10 },
          shadowOpacity: 0.25,
          borderTopRightRadius: 16,
          borderTopLeftRadius: 16,
          position: "relative",
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

        <View
          style={{
            backgroundColor: "white",
            height: 124.5,
            width: 265,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 16,
            shadowColor: "black",
            shadowOffset: { height: 2, width: -5 },
            shadowOpacity: 0.25,
            borderTopRightRadius: 16,
            borderTopLeftRadius: 16,
          }}
        >
          <Text>Volunteernig</Text>
          <Text>History</Text>
        </View>

        <View
          style={{
            backgroundColor: "red",
            width: 265,
            height: 160,
            justifyContent: "space-around",
          }}
        >
          <Text
            onPress={() => {
              navigation.navigate("editeProfile");
            }}
            style={{
              width: "100%",
              backgroundColor: "white",
            }}
          >
            Edit My Profile {">"}
          </Text>

          <Text
            onPress={() => {
              navigation.navigate("account");
            }}
            style={{
              width: "100%",
              backgroundColor: "white",
            }}
          >
            Account {">"}
          </Text>

          <Text
            onPress={() => {
              navigation.navigate("setting");
            }}
            style={{
              width: "100%",
              backgroundColor: "white",
            }}
          >
            Settings {">"}
          </Text>

          <Text
            onPress={() => {
              navigation.navigate("contactUs");
            }}
            style={{
              width: "100%",
              backgroundColor: "white",
            }}
          >
            Contact Us {">"}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Profile;
