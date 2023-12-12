import React, { useState } from "react";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { useQuery } from "@tanstack/react-query";

import { useNavigation, useRoute } from "@react-navigation/native";
import { MapPin } from "lucide-react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  Ionicons,
  Entypo,
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";
import { getOneEvent } from "../../../apis/event";
import { BaseURL } from "../../../apis";
import { colors } from "../../../config/theme";

const EventDetails = () => {
  const route = useRoute();
  const { event } = route.params || {};
  // console.log(oneEvent._id);
  // console.log(oneEvent.event_title);
  console.log(event?._id);
  const navigation = useNavigation();
  const [DescriptionClicked, setDescriptionClicked] = useState(true);
  const [LocationClicked, setLocationClicked] = useState(false);

  const handleDescriptionClick = () => {
    setDescriptionClicked(true);
    setLocationClicked(false);
  };

  const handleLocationClick = () => {
    setDescriptionClicked(false);
    setLocationClicked(true);
  };

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flex: 30,
          justifyContent: "flex-end",
          borderBottomLeftRadius: 50,
          borderBottomRightRadius: 30,
          borderBottomEndRadius: 50,
        }}
      >
        <Image
          source={require("../../../../assets/explore/default-event.png")}
          style={{
            borderBottomEndRadius: 30,
            borderBottomLeftRadius: 30,
            overflow: "hidden",
            height: "100%",
            width: "100%",
            resizeMode: "cover",
            position: "absolute",
            backgroundColor: "white",
          }}
        />
        <LinearGradient
          colors={["transparent", "rgba(0,0,0,0.7)"]} // Adjust the opacity as needed
          style={{
            borderBottomEndRadius: 30,
            borderBottomLeftRadius: 30,
            position: "absolute",
            height: "100%",
            width: "100%",
          }}
        />
        <View
          style={{
            flexDirection: "row",
            padding: 15,
            alignItems: "center",
            gap: 10,
          }}
        >
          <Image
            source={{
              uri: `${BaseURL}/${event?.organization.logo}`,
            }}
            style={{
              height: 50,
              width: 50,
              borderRadius: 100,
            }}
          />

          <Text
            style={{
              fontWeight: "bold",
              justifyContent: "center",
              color: "white",
            }}
          >
            {event?.event_title}
            {/* {eventId} */}
            {/* {event?.event_title} */}
            {/* {event?.event_title}{" "} */}
          </Text>
        </View>
      </View>

      <View style={{ flex: 5, flexDirection: "row", justifyContent: "center" }}>
        <TouchableOpacity
          style={styles.tabButton}
          onPress={() => handleDescriptionClick()}
        >
          <View
            style={{
              // backgroundColor: "red",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: 5,
            }}
          >
            <Ionicons style={{}} name="list" size={20} color="black" />
            <Text style={{ fontSize: 18 }}>Details</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tabButton}
          onPress={() => handleLocationClick()}
        >
          <View
            style={{
              // backgroundColor: "red",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: 5,
            }}
          >
            <MapPin size={20} color="black" />
            <Text style={{ fontSize: 18 }}> Location</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={{ flex: 75, backgroundColor: "#EFEFEF" }}>
        {DescriptionClicked ? (
          <View
            style={{
              width: "100%",
              gap: 20,
              paddingHorizontal: 30,
              marginTop: 10,
              // backgroundColor: "yellow",
            }}
          >
            <View style={{ gap: 10 }}>
              <Text
                style={{ fontSize: 15, fontWeight: "600", color: "#1B1931" }}
              >
                Description
              </Text>
              <Text style={{ color: "#1B1931" }}>{event?.description}</Text>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View
                style={{
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 5,
                }}
              >
                <Entypo name="calendar" size={20} color="#1B1931" />
                <View style={{ flexDirection: "row" }}>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: "600",
                      color: "#1B1931",
                    }}
                  >
                    {event?.event_date}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 5,
                }}
              >
                <MaterialIcons
                  style={{}}
                  name="access-time"
                  size={20}
                  color="#1B1931"
                />
                <Text
                  style={{ fontSize: 12, fontWeight: "600", color: "#1B1931" }}
                >
                  {event?.event_start_time} | {event?.event_end_time}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 5,
                }}
              >
                <MaterialCommunityIcons
                  name="human-male"
                  size={20}
                  color="#1B1931"
                />
                <Text
                  style={{ fontSize: 12, fontWeight: "600", color: "#1B1931" }}
                >
                  {event?.volunteer_list.length} | {event?.no_of_volunteer}
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                gap: 10,
              }}
            >
              <FontAwesome5 name="whatsapp" size={20} color="#1B1931" />
              <Text
                style={{ fontSize: 15, fontWeight: "600", color: "#1B1931" }}
              >
                WhatsApp
              </Text>
              <Text style={{ color: "#1B1931" }}>
                +965 {event?.organization.phone_number}
              </Text>
            </View>
          </View>
        ) : (
          <View style={{ width: "100%" }}>
            <Button
              title="go to event description"
              onPress={() => {
                navigation.navigate("Description");
              }}
            />
            <Text>EventDetails</Text>
          </View>
        )}

        <TouchableOpacity
          style={{
            backgroundColor: colors.SanadRed,
            width: "100%",
            height: 50,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 30,
            marginTop: 30,
          }}
          onPress={() => {
            login_mutate();
          }}
        >
          <Text style={styles.button}>Volunteer Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tabButton: {
    height: "75%",
    width: "45%",
    // backgroundColor: "white",
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 3,
    display: "flex",
    flexDirection: "row",
  },
});

export default EventDetails;
