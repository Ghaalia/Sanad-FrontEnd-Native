import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../../config/theme";
import { getEventById } from "../../apis/event";
import { useQuery } from "@tanstack/react-query";

const VolunteeringHistory = () => {
  const { data: eventsByUser } = useQuery({
    queryKey: ["eventsByUser"],
    queryFn: () => getEventById(id),
  });

  console.log("history", eventsByUser);

  return (
    <View
      style={{
        width: "100%",
        flex: 1,
        backgroundColor: colors.SanadRed,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <View
        style={{
          height: "20%",
          width: "100%",
          paddingTop: 75,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white", fontWeight: "600", fontSize: 28 }}>
          Volunteering History
        </Text>
      </View>
      <View
        style={{
          backgroundColor: "white",
          height: "80%",
          width: "100%",
          paddingTop: 30,
          paddingHorizontal: 30,
          gap: 20,
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          shadowColor: "black",
          shadowOffset: { height: 1, width: 1 },
          shadowRadius: 10,
          shadowOpacity: 0.25,
          borderTopRightRadius: 16,
          borderTopLeftRadius: 16,
          position: "relative",
        }}
      ></View>
    </View>
  );
};

export default VolunteeringHistory;

const styles = StyleSheet.create({});
