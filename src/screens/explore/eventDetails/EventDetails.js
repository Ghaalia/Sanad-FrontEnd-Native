import React, { useState } from "react";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { useMutation, useQuery } from "@tanstack/react-query";

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
import {
  getOneEvent,
  getParticipationsOnEvent,
  requestVolunterNow,
} from "../../../apis/event";
import { BaseURL } from "../../../apis";
import Location from "../../../components/explore/Location";
import { colors, fonts } from "../../../config/theme";

const EventDetails = () => {
  const route = useRoute();
  const { event, id } = route.params || {};

  console.log({ event: id });
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
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["getParticipationsOnEvent", id],
    queryFn: () => getParticipationsOnEvent(id),
  });
  const { mutate } = useMutation({
    mutationFn: () => requestVolunterNow(id),
    onSuccess: () => {
      refetch();
    },
  });

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flex: 35,
          justifyContent: "flex-end",
          borderBottomLeftRadius: 50,
          borderBottomRightRadius: 30,
          borderBottomEndRadius: 50,
        }}
      >
        <Image
          // source={{
          //   uri: event?.event_image,
          // }}
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
            // source={{
            //   uri: `${BaseURL}/${event?.organization?.logo}`,
            // }}
            style={{
              height: 50,
              width: 50,
              borderRadius: 100,
            }}
          />
          <View>
            <Text
              style={{
                fontWeight: "bold",
                justifyContent: "center",
                color: "white",
                fontFamily: "",
              }}
            >
              {event?.event_title}
            </Text>
            <Text
              style={{
                fontWeight: "semibold",
                justifyContent: "center",
                color: "white",
              }}
            >
              {" "}
              {event?.organization?.name}
            </Text>
          </View>
        </View>
      </View>

      <View
        style={{
          flex: 5,
          flexDirection: "row",
          justifyContent: "center",
          paddingTop: 10,
          // backgroundColor: "red",
        }}
      >
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
              width: "85%",
              height: 334,
              gap: 20,
              paddingHorizontal: 30,
              paddingVertical: 20,
              marginTop: 10,
              justifyContent: "space-between",
              alignSelf: "center",
              borderRadius: 10,
              backgroundColor: colors.SanadWhite,
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
                    {event?.event_start_date}
                  </Text>
                </View>
                <Text>to</Text>
                <View style={{ flexDirection: "row" }}>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: "600",
                      color: "#1B1931",
                    }}
                  >
                    {event?.event_end_date}
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
                  {event?.event_start_time}
                </Text>
                <Text>to</Text>
                <Text
                  style={{ fontSize: 12, fontWeight: "600", color: "#1B1931" }}
                >
                  {event?.event_end_time}
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
                +965 {event?.organization?.phone_number}
              </Text>
            </View>
          </View>
        ) : (
          <View style={{ width: "100%" }}>
            {/* <Button
              title="go to event description"
              onPress={() => {
                navigation.navigate("Location");
              }}
            /> */}
            <Location />
          </View>
        )}

        {data ? (
          <>
            <View
              style={{
                backgroundColor: colors.SanadRed,
                width: "85%",
                height: 50,
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "center",
                borderRadius: 30,
                marginTop: 30,
                position: "absolute",
                bottom: 130,
                zIndex: 100,
              }}
            >
              <Text style={styles.button}>{data.status}</Text>
            </View>
          </>
        ) : (
          <TouchableOpacity
            style={{
              backgroundColor: colors.SanadRed,
              width: "85%",
              height: 50,
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "center",
              borderRadius: 30,
              marginTop: 30,
              position: "absolute",
              bottom: 130,
              zIndex: 100,
            }}
            onPress={() => {
              mutate();
            }}
          >
            <Text style={styles.button_text}>Volunteer Now</Text>
          </TouchableOpacity>
        )}
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
  button_text: {
    color: colors.SanadWhite,
    fontWeight: fonts.semibold,
  },
});

export default EventDetails;
