import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Explore = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Explore</Text>
      <Button
        title="go to event details"
        onPress={() => {
          navigation.navigate("eventDetails");
        }}
      />
    </View>
  );
};

export default Explore;

const styles = StyleSheet.create({});
