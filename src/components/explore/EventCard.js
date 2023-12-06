import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Feather,
  FontAwesome5,
  Entypo,
} from "@expo/vector-icons";

const EventCard = () => {
  return (
    <View
      style={{
        position: "relative",
        backgroundColor: "white",
        shadowColor: "black",
        shadowOffset: { height: 4, width: 1 },
        shadowRadius: 5,
        shadowOpacity: 0.1,
        height: 200,
        width: "85%",
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingTop: 10,
        margin: 10,
        marginBottom: 10,
        gap: 10,
        alignSelf: "center",
        justifyContent: "space-between",
      }}
    >
      <View
        style={{
          position: "absolute",
          right: 0,
          top: 21,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
          paddingHorizontal: 5,
          paddingVertical: 4,
          borderTopStartRadius: 20,
          borderBottomStartRadius: 20,
          backgroundColor: "#F5574E",
        }}
      >
        <MaterialCommunityIcons name="human-male" size={20} color="white" />
        <Text style={{ color: "white", fontWeight: "500" }}>20</Text>
        <Text style={{ color: "white", fontWeight: "500" }}>|</Text>
        <Text style={{ color: "white", fontWeight: "500" }}>50</Text>
      </View>
      <View
        style={{
          height: "auto",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          // backgroundColor: "red",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
            // backgroundColor: "green",
          }}
        >
          <Image
            source={{
              //   uri: item.image,
              uri: "https://images.squarespace-cdn.com/content/v1/5b8f8acb2714e5d519fcaf81/1609947742650-YSD4MGC2I7M9SL6NPFKB/MMKN+new+Logo+2019+%28png%29.png",
            }}
            style={{ height: 50, width: 50, borderRadius: 100 }}
          />

          <Text
            style={{
              fontWeight: "bold",
              color: "#1B1931",
            }}
          >
            Voluntary Work Center
          </Text>
        </View>
      </View>

      <View style={{}}>
        <Text> category buttons here</Text>
      </View>

      <View
        style={{
          height: "auto",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-end",
          // backgroundColor: "yellow",
        }}
      >
        <View style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
          <Entypo name="calendar" size={20} color="#1B1931" />
          <Text
            style={{
              fontSize: 12,
              fontWeight: "500",
              color: "#1B1931",
            }}
          >
            20/1/2023
          </Text>
        </View>
        <View style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
          <MaterialIcons
            style={{}}
            name="access-time"
            size={20}
            color="#1B1931"
          />
          <Text style={{ fontSize: 12, fontWeight: "500", color: "#1B1931" }}>
            5:00 PM to 7:00 PM
          </Text>
        </View>
        <Feather style={{}} name="share-2" size={24} color="#F5574E" />
      </View>
    </View>
  );
};

export default EventCard;

const styles = StyleSheet.create({});
/* <Text style={{ color: "red" }}>{item.price}</Text> */
