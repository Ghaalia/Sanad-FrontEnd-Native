import {
  Button,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Search from "../../components/explore/Search";
import { ScrollView } from "react-native-gesture-handler";
import EventCard from "../../components/explore/EventCard";
import ExploreEventFilter from "../../components/explore/ExploreEventFilter";
import logoSanad from "../../../assets/slogo.jpg";

const Explore = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, backgroundColor: "#EFEFEF", alignItems: "center" }}>
      <View
        style={{
          flex: 15,
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 40,
            shadowColor: "black",
            shadowOffset: { height: 2, width: 0 },
            shadowRadius: 1,
            shadowOpacity: 0.3,
            fontFamily: "Urbanist_600SemiBold",
          }}
        >
          Explore
        </Text>
        <Image
          style={{ width: "35%", resizeMode: "contain" }}
          source={require("../../../assets/onlylogo.png")}
        />
      </View>

      <View
        style={{
          flex: 10,
          width: "100%",
          justifyContent: "center",
        }}
      >
        <Search />
      </View>

      <View
        style={{
          flex: 5,
          width: "85%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          // backgroundColor: "green",
        }}
      >
        <View
          style={{
            width: "auto",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
            // backgroundColor: "red",
          }}
        >
          <Text
            style={{
              color: "#1B1931",
              fontWeight: "500",
              fontFamily: "Urbanist_500Medium",
            }}
          >
            Available Events
          </Text>
        </View>
        <View
          style={{
            width: "auto",
            justifyContent: "center",
            alignItems: "center",
            // backgroundColor: "red",
          }}
        >
          <ExploreEventFilter />
        </View>
      </View>

      <View
        style={{
          flex: 70,
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          // backgroundColor: "yellow",
        }}
      >
        <ScrollView style={{ width: "100%", paddingVertical: 5 }}>
          <Pressable
            onPress={() => {
              navigation.navigate("eventDetails");
            }}
          >
            <EventCard />
          </Pressable>

          <EventCard />
          <EventCard />
          <EventCard />
        </ScrollView>
      </View>
    </View>
  );
};

export default Explore;

const styles = StyleSheet.create({});

/* <Button
        title="go to event details"
        onPress={() => {
          navigation.navigate("eventDetails");
        }}
      /> */

// <ScrollView
//   horizontal
//   contentContainerStyle={{
//     gap: 7,
//     alignItems: "center",
//     paddingHorizontal: 17,
//     backgroundColor: "black",
//   }}
// ></ScrollView>

// <View
// style={{
//   flex: 5,
//
// }}
// >

// <View
//   style={{
//     display: "flex",
//     alignItems: "flex-start",
//     justifyContent: "flex-start",
//   }}
// >
//   <Text
//     style={{
//       color: "lightgray",
//     }}
//   >
//     Available events
//   </Text>
// </View>
// </View>
