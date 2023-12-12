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
import { colors } from "../../config/theme";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Navigation } from "lucide-react-native";
import { useNavigation } from "@react-navigation/core";

const EventCard = ({ event, id }) => {
  const navigation = new useNavigation();
  const oneEvent = event;
  const test_event = { name: "hi" };
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("eventDetails", { event });
      }}
    >
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
            backgroundColor: colors.SanadRed,
          }}
        >
          <MaterialCommunityIcons name="human-male" size={20} color="white" />
          <Text style={{ color: "white", fontWeight: "500" }}>
            {event?.volunteer_list.length}
          </Text>
          <Text style={{ color: "white", fontWeight: "500" }}>|</Text>
          <Text style={{ color: "white", fontWeight: "500" }}>
            {event?.no_of_volunteer}
          </Text>
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
              //backgroundColor: "green",
            }}
          >
            <Image
              source={{
                uri: event.event_image,
              }}
              style={{ height: 50, width: 50, borderRadius: 100 }}
            />
            <Text
              style={{
                fontWeight: "bold",
                color: "#1B1931",
                fontFamily: "Urbanist_700Bold",
              }}
            >
              {event?.event_title}
            </Text>
          </View>
        </View>

        <View
          style={{
            width: 100,
            height: 30,
            justifyContent: "center",
            padding: 5,
            backgroundColor: "white",
            borderColor: "red",
            borderRadius: 13,
            borderWidth: 1,
          }}
        >
          <Text>{event?.event_category}</Text>
        </View>
        <Text>{event?.organization.name}</Text>
        <Text>{id}</Text>
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
                fontFamily: "Urbanist_500Medium",
              }}
            >
              {event?.event_date}
            </Text>
          </View>
          <View style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
            <MaterialIcons
              style={{}}
              name="access-time"
              size={20}
              color="#1B1931"
            />
            <Text
              style={{
                fontSize: 12,
                fontWeight: "500",
                color: "#1B1931",
                fontFamily: "Urbanist_500Medium",
              }}
            >
              {event?.event_start_time} to {event?.event_end_time}
            </Text>
          </View>
          <Feather style={{}} name="share-2" size={24} color="#F5574E" />
        </View>
      </View>
    </TouchableOpacity>
  );
};
// const styles = StyleSheet.create({});

export default EventCard;

/* <Text style={{ color: "red" }}>{item.price}</Text> */
