import React, { useContext, useState } from "react";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Share,
  Linking,
} from "react-native";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigation, useRoute } from "@react-navigation/native";
import { MapPin } from "lucide-react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  Ionicons,
  Entypo,
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome5,
  Feather,
} from "@expo/vector-icons";
import {
  getOneEvent,
  getParticipationsOnEvent,
  requestVolunterNow,
} from "../../../apis/event";
import { BaseURL } from "../../../apis";
import Location from "../../../components/explore/Location";
import { colors, family, fonts } from "../../../config/theme";
import VolThankUModal from "../../../components/explore/VolThankUModal";
import UserContext from "../../../../context/UserContext";

const EventDetails = () => {
  const [showModal, setShowModal] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);
  const { user } = useContext(UserContext);
  const route = useRoute();
  const { event, id } = route.params || {};
  const queryClient = useQueryClient();
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
      queryClient.invalidateQueries(["Notifications", user.id]);
      queryClient.invalidateQueries(["Notifications_", user.id]);
      refetch();
      setButtonClicked(true);
    },
  });

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
  console.log({ data });

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          position: "relative",
          flex: 35,
          justifyContent: "flex-end",
          borderBottomLeftRadius: 50,
          borderBottomRightRadius: 30,
          borderBottomEndRadius: 50,
        }}
      >
        <Image
          source={{
            uri: event?.event_image,
          }}
          // source={require("../../../../assets/explore/default-event.png")}
          style={{
            borderBottomEndRadius: 30,
            borderBottomLeftRadius: 30,
            overflow: "hidden",
            height: "100%",
            width: "100%",
            resizeMode: "contain",
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
        <TouchableOpacity
          onPress={handleShareEvent}
          style={{
            flexDirection: "row",
            alignItems: "center",
            position: "absolute",
            bottom: 20,
            right: 25,
            zIndex: 100,
          }}
        >
          <Feather name="share-2" size={24} color="white" />
        </TouchableOpacity>

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
              uri: `${BaseURL}/${event?.organization?.logo}`,
            }}
            style={{
              height: 60,
              width: 60,
              borderRadius: 100,
            }}
          />
          <View>
            <Text
              style={{
                justifyContent: "center",
                color: "white",
                fontFamily: family.bold,
              }}
            >
              {event?.event_title}
            </Text>
            <Text
              style={{
                width: "95%",
                fontFamily: family.regular,
                justifyContent: "center",
                color: "white",
                flexWrap: "wrap",
              }}
            >
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

      <View style={{ height: "70%", backgroundColor: colors.SanadBgGrey }}>
        {DescriptionClicked ? (
          <View
            style={{
              height: 370,
              backgroundColor: colors.SanadWhite,
              marginTop: 10,
              width: "85%",
              alignSelf: "center",
              borderRadius: 10,
              overflow: "scroll",
            }}
          >
            <ScrollView
              scrollEnabled
              style={{
                height: "auto",
                flexDirection: "column",
                paddingHorizontal: 30,
                paddingVertical: 20,
                paddingBottom: 100,
              }}
            >
              <View style={{ gap: 10, paddingBottom: 30 }}>
                <Text
                  style={{ fontSize: 15, fontWeight: "600", color: "#1B1931" }}
                >
                  Description
                </Text>
                <Text style={{ color: "#1B1931" }}>{event?.description}</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  alignItems: "center",
                  gap: 5,
                  width: "100%",
                  paddingVertical: 10,
                  borderRadius: 10,
                  backgroundColor: colors.SanadBgGrey,
                }}
              >
                <MaterialCommunityIcons
                  name="human-male"
                  size={20}
                  color="#F5574E"
                />
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: "600",
                    color: colors.SanadRed,
                  }}
                >
                  Volunteers
                </Text>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: "600",
                    color: colors.SanadRed,
                  }}
                >
                  {event?.volunteer_list.length} | {event?.no_of_volunteer}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "column",
                  justifyContent: "space-between",
                  paddingBottom: 30,
                  marginTop: 30,
                  gap: 30,
                }}
              >
                <View
                  style={{
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    gap: 5,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: "600",
                      color: "#1B1931",
                      paddingBottom: 10,
                    }}
                  >
                    Start
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 10,
                    }}
                  >
                    <Entypo name="calendar" size={20} color="#1B1931" />
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
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 10,
                    }}
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
                        fontWeight: "600",
                        color: "#1B1931",
                      }}
                    >
                      {event?.event_start_time}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    gap: 5,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: "600",
                      color: "#1B1931",
                      paddingBottom: 10,
                    }}
                  >
                    End
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 10,
                    }}
                  >
                    <Entypo name="calendar" size={20} color="#1B1931" />
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
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 10,
                    }}
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
                        fontWeight: "600",
                        color: "#1B1931",
                      }}
                    >
                      {event?.event_end_time}
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
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
              <View style={{ backgroundColor: "white", height: 50 }}></View>
            </ScrollView>
          </View>
        ) : (
          <View
            style={{
              width: "100%",
              flex: 1,
            }}
          >
            <Button
              color={colors.SanadRed}
              title="Go to Google Maps "
              onPress={() => {
                Linking.openURL(
                  `https://google.com/maps/dir//29.3568421,47.9090918/@${event.lat},${event.lng},15z/`
                );
              }}
              style={styles.customButton}
            />
            <Location event={event} />
          </View>
        )}

        {data?.find((e) => e.user == user.id) ? (
          <>
            {DescriptionClicked && (
              <View
                style={{
                  backgroundColor: colors.SanadMedGrey,
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
                <Text style={[styles.button, { color: colors.SanadWhite }]}>
                  {data?.find((e) => e.user == user.id)?.status}
                </Text>
              </View>
            )}
          </>
        ) : (
          <TouchableOpacity
            style={[
              {
                backgroundColor: colors.SanadRed,
                width: "75%",
                height: 50,
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "center",
                borderRadius: 30,
                marginTop: 30,
                position: "absolute",
                bottom: 130,
                zIndex: 100,
              },
              buttonClicked && { opacity: 0.3 }, // Apply opacity style if buttonClicked is true
            ]}
            onPress={() => {
              if (!buttonClicked) {
                // Only allow click if the button hasn't been clicked yet
                mutate();
                setShowModal(true);
              }
            }}
            disabled={buttonClicked} // Disable the button when it has been clicked
          >
            <Text style={styles.button_text}>
              {buttonClicked ? "Volunteered" : "Volunteer Now"}
            </Text>
          </TouchableOpacity>
        )}
      </View>
      <VolThankUModal
        showModal={showModal}
        onBackPress={() => {
          setShowModal(false);
        }}
      />
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
  customButton: {
    backgroundColor: "blue",
    color: "white",
    fontSize: 16,
    padding: 10,
    borderRadius: 5,
  },
});

export default EventDetails;

{
  /* <TouchableOpacity
            style={{
              backgroundColor: colors.SanadRed,
              width: "75%",
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
              setShowModal(true);
            }}
          >
            <Text style={styles.button_text}>Volunteer Now</Text>
          </TouchableOpacity> */
}
