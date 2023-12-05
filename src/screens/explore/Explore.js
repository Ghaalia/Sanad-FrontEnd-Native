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
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View
        style={{
          flex: 10,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontFamily: "urbanist",
            fontSize: 40,
            shadowColor: "black",
            shadowOffset: { height: 2, width: 0 },
            shadowRadius: 1,
            shadowOpacity: 0.3,
          }}
        >
          Explore
        </Text>
        <Image
          style={{ height: "59.8%", width: "35%" }}
          source={require("../../../assets/onlylogo.png")}
        />
      </View>

      <View style={{ flex: 10, paddingTop: 10 }}>
        <Search />
      </View>

      <View
        style={{
          flex: 5,
          backgroundColor: "white",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View
          style={{
            alignItems: "flex-start",
            justifyContent: "flex-start",
            alignContent: "flex-start",
          }}
        >
          <Text style={{ color: "#b4bfb7", paddingLeft: 10 }}>
            Available events
          </Text>
        </View>
        <View
          style={{
            width: "50%",
            alignItems: "flex-end",
            justifyContent: "flex-end",
          }}
        >
          <ExploreEventFilter />
        </View>
      </View>

      <View style={{ flex: 70, gab: 5 }}>
        <ScrollView>
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
