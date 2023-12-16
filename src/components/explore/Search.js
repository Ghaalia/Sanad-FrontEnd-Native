import { Image, StyleSheet, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { FlatList, TextInput } from "react-native-gesture-handler";
import EventCard from "./EventCard";
import { useQuery } from "@tanstack/react-query";
import { getAllEvents } from "../../apis/event";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";
import { instance } from "../../apis";
import filter from "lodash.filter";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  // const [data, setData] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [allEvents, setAllEvents] = useState([]);
  // const handleSearch = (query) => {
  //   setSearchQuery(query);
  //   // const filteredData = filter(allEvents)
  // };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await instance.get("/api/event");
        // setData(response.data);
        console.log("im here ");
        console.log(response.data);
        setAllEvents(response.data);
        setFilteredEvents(response.data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, []);

  // console.log("hello this is the data");
  // console.log(allEvents);

  const searchEvents = (query) => {
    const lowerCaseQuery = query.toLowerCase();
    const filtered = allEvents.filter(
      (event) =>
        event?.event_title.toLowerCase().includes(lowerCaseQuery) ||
        event?.organization?.name.toLowerCase().includes(lowerCaseQuery)
    );
    setFilteredEvents(filtered);
  };

  return (
    <View
      style={{
        height: 45,
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <FontAwesome
        name="search"
        size={24}
        color="#F5574E"
        style={{
          position: "absolute",
          left: 43,
          zIndex: 100,
        }}
      />
      <TextInput
        style={{
          width: "85%",
          height: "100%",
          backgroundColor: "white",
          shadowColor: "black",
          shadowOffset: { height: 4, width: 1 },
          shadowRadius: 4,
          shadowOpacity: 0.1,
          borderRadius: 50,
          // borderWidth: "1",
          // borderRadius: 10,
          paddingHorizontal: 50,
        }}
        placeholder="Search"
        clearButtonMode="always"
        onChangeText={(text) => {
          setSearchQuery(text);
          searchEvents(text);
        }}
        // onChangeText={(query) => handleSearch(query)}
        value={searchQuery}
        autoCapitalize="none"
        autoCorrect={false}
        // onChange={handleSearch}
      />
      <FlatList
        data={filteredEvents}
        keyExtractor={(item) =>
          item.id ? item.id.toString() : Math.random().toString()
        }
        renderItem={({ item }) => (
          // <EventCard
          //   event_title={item.event_title}
          //   organization_name={item.event?.organization?.name}
          //   // Add other event details as needed
          // />
          <View>{/* <Text> {item.event_title} </Text> */}</View>
        )}
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({});
