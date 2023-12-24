import { Image, StyleSheet, Text, View, Share } from "react-native";
import React from "react";
import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Feather,
  FontAwesome5,
  Entypo,
} from "@expo/vector-icons";
import { colors, fonts } from "../../config/theme";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Navigation } from "lucide-react-native";
import { useNavigation } from "@react-navigation/core";
import { BaseURL } from "../../apis";

const EventCard = ({ event, id }) => {
  const navigation = new useNavigation();
  const oneEvent = event;
  const test_event = { name: "hi" };

  const handleShareEvent = () => {
    const wikipediaLink = "https://www.wikipedia.org/";
    // const shareableLink = `https://ourwebsite.com/event/${eventId}`; //share my local dev url
    const url = "https://www.youtube.com/"; // Replace with your desired URL
    const shareMessage = `Check out this event: ${event.event_title}\nEvent Date: ${event.event_date}\nLocation: ${event.location}\nLink:${wikipediaLink}`;
    const shareOptions = {
      message: shareMessage,
    };

    Share.share(shareOptions)
      .then((result) => {
        if (result.action === Share.sharedAction) {
          console.log("Event shared successfully");
        } else if (result.action === Share.dismissedAction) {
          console.log("Sharing dismissed");
        }
      })
      .catch((error) => console.error(error));
  };

  const eventCategoryNames = event?.event_category?.map((category) => {
    return (
      <View
        style={{
          width: 95,
          height: 30,
          justifyContent: "center",
          padding: 5,
          backgroundColor: "white",
          borderColor: "red",
          borderRadius: 13,
          borderWidth: 1,
          alignItems: "center",
        }}
      >
        <Text>{category.category_name}</Text>
      </View>
    );
  });
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("eventDetails", { event, id: event._id });
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
          height: 230,
          width: "85%",
          borderRadius: 30,
          paddingHorizontal: 15,
          paddingTop: 10,
          margin: 10,
          marginBottom: 10,
          gap: 10,
          alignSelf: "center",
          justifyContent: "space-around",
        }}
      >
        <View
          style={{
            position: "absolute",
            right: 0,
            top: 21,
            width: "auto",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
            paddingHorizontal: 8,
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
          }}
        >
          <View style={{ flexDirection: "column" }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
              }}
            >
              <Image
                source={{
                  uri: `${BaseURL}/${event?.organization?.logo}`,
                }}
                style={{ height: 50, width: 50, borderRadius: 100 }}
              />
              <Text
                style={{
                  fontWeight: fonts.bold,
                  color: colors.SanadBlue1,
                  fontFamily: "Urbanist_700Bold",
                }}
              >
                {event?.organization?.name}
              </Text>
            </View>
          </View>
        </View>
        <View>
          <Text
            style={{
              fontSize: 16,
              color: colors.SanadRed,
              fontWeight: fonts.bold,
            }}
          >
            {event?.event_title}
          </Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 5,
          }}
        >
          {eventCategoryNames}
        </View>

        <View
          style={{
            height: "auto",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <View style={{ flexDirection: "column", gap: 3 }}>
            <View
              style={{
                flexDirection: "row",
                gap: 30,
                justifyContent: "space-between",
              }}
            >
              <View
                style={{ flexDirection: "row", gap: 5, alignItems: "center" }}
              >
                <Text
                  style={{
                    width: 45,
                    fontWeight: fonts.semibold,
                    fontSize: 13,
                  }}
                >
                  Start
                </Text>
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
              <View
                style={{ flexDirection: "row", gap: 5, alignItems: "center" }}
              >
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
                  {event?.event_start_time}
                </Text>
              </View>
            </View>
            <View style={{ flexDirection: "row", gap: 30 }}>
              <View
                style={{ flexDirection: "row", gap: 5, alignItems: "center" }}
              >
                <Text
                  style={{
                    width: 45,
                    fontWeight: fonts.semibold,
                    fontSize: 13,
                  }}
                >
                  End
                </Text>
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

              <View
                style={{ flexDirection: "row", gap: 5, alignItems: "center" }}
              >
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
                  {event?.event_start_time}
                  {/* to {event?.event_end_time} */}
                </Text>
              </View>
            </View>
          </View>
          <TouchableOpacity
            onPress={handleShareEvent}
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Feather name="share-2" size={24} color="#F5574E" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default EventCard;
