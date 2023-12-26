import {
  Button,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Search from "../../components/explore/Search";
import { ScrollView } from "react-native-gesture-handler";
import EventCard from "../../components/explore/EventCard";
import ExploreEventFilter from "../../components/explore/ExploreEventFilter";
import { colors } from "../../config/theme";
import { getAllEvents } from "../../apis/event";
import { useQuery } from "@tanstack/react-query";

const Explore = () => {
  const [filtered, setFiltered] = useState("");
  const { data: events } = useQuery({
    queryKey: ["events"],
    queryFn: () => getAllEvents(),
  });
  const navigation = useNavigation();

  // useEffect(() => {
  //   console.log(events);
  // }, [events]);

  //console.log(events[0]?._id);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.SanadBgGrey,
        alignItems: "center",
      }}
    >
      <View
        style={{
          height: "15%",
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          paddingTop: 30,
          backgroundColor: colors.SanadBlue1,
          borderEndEndRadius: 30,
          borderEndStartRadius: 30,
          shadowColor: "black",
          shadowOffset: { height: 8, width: 4 },
          shadowRadius: 8,
          shadowOpacity: 0.2,
        }}
      >
        <Text
          style={{
            color: colors.SanadWhite,
            fontSize: 32,
            // shadowColor: "black",
            // shadowOffset: { height: 2, width: 0 },
            // shadowRadius: 1,
            // shadowOpacity: 0.3,
            fontFamily: "Urbanist_600SemiBold",
          }}
        >
          Explore
        </Text>
        <Image
          style={{ width: "30%", resizeMode: "contain" }}
          source={require("../../../assets/onlylogo.png")}
        />
      </View>

      <View
        style={{
          height: "10%",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <Search setFiltered={setFiltered} />
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
          flex: 75,
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          // backgroundColor: "yellow",
        }}
      >
        <ScrollView
          scrollEnabled
          style={{ width: "100%", paddingVertical: 15, marginBottom: 130 }}
        >
          <Pressable
            onPress={() => {
              navigation.navigate("eventDetails");
            }}
          >
            {events
              ?.filter((e) => {
                return (
                  e.organization?.name.includes(filtered) ||
                  (e.event_category &&
                    e.event_category.some((category) =>
                      category.category_name.includes(filtered)
                    ))
                );
              })

              .map((el) => (
                <EventCard event={el} id={el._id} />
              ))}
          </Pressable>
        </ScrollView>
      </View>
    </View>
  );
};

export default Explore;

const styles = StyleSheet.create({});
