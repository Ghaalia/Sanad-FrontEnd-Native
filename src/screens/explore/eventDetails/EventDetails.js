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
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <View
        style={{
          flex: 40,
          justifyContent: "flex-end",
          borderBottomLeftRadius: 50,
          borderBottomRightRadius: 30,
          borderBottomEndRadius: 50,
        }}
      >
        <Image
          source={{
            uri: "https://helpingpeople.org/wp-content/uploads/2020/03/Volunteering-charity-social-concept.-Volunteer-people-plant-trees-in-city-park-vector-flat-illustration.-Ecological-lifestyle.jpg",
          }}
          style={{
            borderBottomEndRadius: 30,
            borderBottomLeftRadius: 30,
            overflow: "hidden",
            height: "100%",
            width: "100%",
            resizeMode: "cover",
            position: "absolute",
          }}
        />

        <View style={{ flexDirection: "row", padding: 15 }}>
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

          <Text style={{ fontWeight: "bold", paddingLeft: 5, paddingTop: 20 }}>
            VWC - Voluntary Work Center
          </Text>
        </View>
      </View>

      <View
        style={{ flex: 10, flexDirection: "row", justifyContent: "center" }}
      >
        <TouchableOpacity
          style={styles.tabButton}
          onPress={() => handleDescriptionClick()}
        >
          <Text style={{ fontSize: 27 }}>Details</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tabButton}
          onPress={() => handleLocationClick()}
        >
          <Text style={{ fontSize: 27 }}> Location</Text>
          <MapPin color="black" />
        </TouchableOpacity>
      </View>

      <View style={{ flex: 50, backgroundColor: "pink" }}>
        {DescriptionClicked ? (
          <View style={{ width: "100%" }}>
            <Text>EventDetails</Text>
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
    backgroundColor: "white",
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 3,
    display: "flex",
    flexDirection: "row",
  },
});

export default EventDetails;
