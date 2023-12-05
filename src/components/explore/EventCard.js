import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const EventCard = () => {
  return (
    <View
      style={{
        backgroundColor: "white",
        shadowColor: "black",
        shadowOffset: { height: 1, width: 1 },
        shadowRadius: 5,
        shadowOpacity: 0.5,
        height: 200,
        width: "95%",
        borderRadius: 10,
        display: "flex",
        margin: 10,
      }}
    >
      <View
        style={{
          flex: 10,
          display: "flex",
          flexDirection: "row",
          paddingLeft: 15,
          paddingTop: 10,
          justifyContent: "space-between",
        }}
      >
        <Image
          source={{
            //   uri: item.image,
            uri: "https://images.squarespace-cdn.com/content/v1/5b8f8acb2714e5d519fcaf81/1609947742650-YSD4MGC2I7M9SL6NPFKB/MMKN+new+Logo+2019+%28png%29.png",
          }}
          style={{ height: 50, width: 50, borderRadius: "100" }}
        />

        <Text style={{ fontWeight: "bold", paddingLeft: 5, paddingTop: 20 }}>
          VWC - Voluntary Work Center
        </Text>

        <Feather
          style={{ padding: 15 }}
          name="share-2"
          size={24}
          color="black"
        />
      </View>

      <View style={{ flex: 12 }}>
        <Text> category btns here</Text>
      </View>

      <View
        style={{
          flex: 5,
          paddingLeft: 5,
          flexDirection: "row",
        }}
      >
        <Ionicons name="calendar-outline" size={24} color="black" />
        <Text style={{ paddingTop: 7 }}> 20/1/2023</Text>
        <Ionicons
          style={{ paddingLeft: 90 }}
          name="time-outline"
          size={24}
          color="black"
        />
        <Text style={{ paddingTop: 7 }}> 5:00 pm to 7:00 pm</Text>
      </View>
    </View>
  );
};

export default EventCard;

const styles = StyleSheet.create({});
/* <Text style={{ color: "red" }}>{item.price}</Text> */
