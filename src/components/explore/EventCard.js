import { Image, StyleSheet, Text, View, Share } from "react-native";
import React, { useEffect, useState } from "react";
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
import { Skeleton } from "moti/skeleton";
import SkeletonWithGradient from "../skeleton/SkeletonWithGradient";

const EventCard = ({ event, id, isLoading }) => {
  const [showSkeleton, setShowSkeleton] = useState(true);
  const navigation = new useNavigation();
  const oneEvent = event;
  const test_event = { name: "hi" };

  const handleShareEvent = () => {
    const wikipediaLink = "https://www.wikipedia.org/";
    // const shareableLink = `https://ourwebsite.com/event/${eventId}`; //share my local dev url
    // const url = "https://www.youtube.com/"; // Replace with your desired URL
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
          minWidth: 95,
          maxWidth: 300,
          paddingHorizontal: 10,
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
        <Text>{category?.category_name}</Text>
      </View>
    );
  });

  // if (isLoading) {
  //   return <SkeletonWithGradient width={200} height={200} />;
  // }

  useEffect(() => {
    if (!isLoading) {
      const delayTimer = setTimeout(() => {
        setShowSkeleton(false);
      }, 2000);

      return () => clearTimeout(delayTimer);
    }
  }, [isLoading]);

  if (isLoading || showSkeleton) {
    return <SkeletonWithGradient width={320} height={240} />;
  }

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("eventDetails", { event, id: event._id });
      }}
      style={{ alignItems: "center" }}
    >
      <View
        style={{
          position: "relative",
          backgroundColor: "white",
          shadowColor: "black",
          shadowOffset: { height: 4, width: 1 },
          shadowRadius: 5,
          shadowOpacity: 0.1,
          height: "auto",
          width: "85%",
          borderRadius: 30,
          paddingHorizontal: 20,
          paddingVertical: 20,
          gap: 20,
          justifyContent: "center",
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
          <Text
            style={{
              color: colors.SanadWhite,
              fontWeight: fonts.semibold,
            }}
          >
            {event?.volunteer_list.length} | {event?.no_of_volunteer}
          </Text>
        </View>

        <View
          style={{
            width: 200,
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
            paddingTop: 10,
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
              flexWrap: "wrap",
            }}
            numberOfLines={2}
            ellipsizeMode="tail"
          >
            {event?.organization?.name}
          </Text>
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
        <View>
          <View
            style={{
              flexWrap: "wrap",
              flexDirection: "row",
              gap: 5,
            }}
          >
            {eventCategoryNames}
          </View>
        </View>
        <View
          style={{
            height: "auto",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <View style={{ flexDirection: "column", gap: 10 }}>
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
                    width: 70,
                    fontWeight: fonts.semibold,
                    fontSize: 13,
                  }}
                >
                  Starts
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
                  {event?.event_start_date}
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
                    width: 70,
                    fontWeight: fonts.semibold,
                    fontSize: 13,
                  }}
                >
                  Ends
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
                  {event?.event_end_date}
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
                  {event?.event_end_time}
                  {/* to {event?.event_end_time} */}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default EventCard;

// const maxCharacterCount = 25; //max count

// const organizationName = event?.organization?.name || "";

// const truncatedName =
//   organizationName.length > maxCharacterCount
//     ? organizationName.substring(0, maxCharacterCount) + "..."
//     : organizationName;
