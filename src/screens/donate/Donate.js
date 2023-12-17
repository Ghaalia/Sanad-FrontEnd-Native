import React, { useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { useQuery } from "@tanstack/react-query";
import { BaseURL } from "../../apis";
import UserContext from "../../../context/UserContext";
import { getSelectedUnselectedImages } from "../../apis/donation";
import { ActivityIndicator } from "react-native";
import { colors, fonts } from "../../config/theme";

const Donate = () => {
  const { user } = useContext(UserContext);
  const userId = user?._id;

  const { data, isLoading, isError } = useQuery({
    queryKey: ["donatedImages", userId],
    queryFn: () => getSelectedUnselectedImages(userId),
    onSuccess: (responseData) => {
      console.log("Response Data:", responseData);
    },
    onError: (error) => {
      console.error("Error fetching images:", error);
    },
  });

  console.log(data);
  if (isLoading) {
    return <ActivityIndicator size="large" />;
  }

  if (isError || !data) {
    return <Text>Error fetching images</Text>;
  }

  const selectedImages = data?.selectedImages;
  const unselectedImages = data?.unselectedImages;

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <Text style={styles.header}>Selected Images</Text>
        <View style={styles.imageContainer}>
          {selectedImages.map((imageUri, index) => (
            <Image
              key={index}
              source={{ uri: imageUri }}
              style={styles.image}
            />
          ))}
        </View>

        <Text style={styles.header}>Unselected Images</Text>
        <View style={styles.imageContainer}>
          {unselectedImages.map((imageUri, index) => (
            <Image
              key={index}
              source={{ uri: imageUri }}
              style={styles.image}
            />
          ))}
        </View>
        <TouchableOpacity style={styles.redbutton}>
          <Text style={styles.button}>Done</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    padding: 20,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
  },
  imageContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  image: {
    width: 100,
    height: 100,
    margin: 5,
  },
  //Done
  redbutton: {
    backgroundColor: colors.SanadRed,
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    marginVertical: 30,
  },
  button: {
    width: "100%",
    fontSize: 20,
    fontWeight: fonts.semibold,
    color: "white",
    textAlign: "center",
    fontFamily: "Urbanist_600SemiBold",
  },
});

export default Donate;
