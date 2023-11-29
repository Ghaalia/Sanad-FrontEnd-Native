import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Description = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Description hi</Text>

      <Button
        title=" check event location"
        onPress={() => {
          navigation.navigate("location");
        }}
      />
    </View>
  );
};

export default Description;

const styles = StyleSheet.create({});
