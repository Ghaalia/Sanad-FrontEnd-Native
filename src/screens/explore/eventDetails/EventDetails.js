import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const EventDetails = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>EventDetails</Text>
      <Button
        title="go to event description"
        onPress={() => {
          navigation.navigate("Description");
        }}
      />
    </View>
  );
};

export default EventDetails;

const styles = StyleSheet.create({});
