import React, { useState } from "react";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MapPin } from "lucide-react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  Ionicons,
  Entypo,
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";

const EventDetails = () => {
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
              uri: "https://images.squarespace-cdn.com/content/v1/5b8f8acb2714e5d519fcaf81/1609947742650-YSD4MGC2I7M9SL6NPFKB/MMKN+new+Logo+2019+%28png%29.png",
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
            VWC - Voluntary Work Center
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
              <Text style={{ color: "#1B1931" }}>
                Join us for a fulfilling day of environmental stewardship and
                community bonding! Our "Beach Cleanup Extravaganza" is a
                volunteering event where individuals of all ages can come
                together to make a positive impact on our beautiful coastline.
                Bring your friends and family for a day filled with fun and
                purpose. We'll provide all the necessary cleaning supplies,
                including gloves and trash bags, to ensure a safe and effective
                cleanup. Together, we'll remove litter, plastic waste, and
                debris from the beach, preserving the natural beauty of our
                shores and protecting marine life. As we work hand in hand to
                beautify our coastline, you'll have the chance to connect with
                like-minded individuals, enjoy the fresh sea breeze, and
                contribute to a cleaner, healthier environment. Let's make a
                difference, one piece of trash at a time!
              </Text>
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
                    22
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: "600",
                      color: "#1B1931",
                    }}
                  >
                    /
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: "600",
                      color: "#1B1931",
                    }}
                  >
                    06
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: "600",
                      color: "#1B1931",
                    }}
                  >
                    /
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: "600",
                      color: "#1B1931",
                    }}
                  >
                    2024
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
                  5:00 PM | 7:00 PM
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
                  EventDetails
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
              <Text style={{ color: "#1B1931" }}>+965 88989766</Text>
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
