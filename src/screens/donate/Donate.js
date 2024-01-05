import React, { useContext, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  RefreshControl,
} from "react-native";
import { useQuery } from "@tanstack/react-query";
import { BaseURL } from "../../apis";
import UserContext from "../../../context/UserContext";
import { getSelectedUnselectedImages } from "../../apis/donation";
import { ActivityIndicator } from "react-native";
import { colors, fonts } from "../../config/theme";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Navigation } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";

const Donate = () => {
  const navigation = useNavigation();
  const { user } = useContext(UserContext);
  const [selected, setSelected] = useState(true);
  const [unselected, setUnselected] = useState(false);

  const handleSelected = () => {
    setSelected(true);
    setUnselected(false);
  };

  const handleUnselected = () => {
    setSelected(false);
    setUnselected(true);
  };

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["donatedImages", user.id],
    queryFn: () => getSelectedUnselectedImages(user.id),
  });

  console.log(data);
  const categoryImages = {
    Furniture: data?.find((d) => d.category == "Furniture")?.imageData,
    Devices: data?.find((d) => d.category == "Devices")?.imageData,
    Electronics: data?.find((d) => d.category == "Electronics")?.imageData,
    Clothes: data?.find((d) => d.category == "Clothes")?.imageData,
  };

  return (
    <SafeAreaView>
      <ScrollView
        style={{ paddingHorizontal: 30 }}
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={refetch} />
        }
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: 30,
            color: colors.SanadBlue1,
            fontWeight: fonts.bold,
            paddingVertical: 10,
          }}
        >
          My Items
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 20,
            width: "100%",
          }}
        >
          <TouchableOpacity
            style={[
              styles.header,
              selected && {
                backgroundColor: colors.SanadBlue1,
                borderRadius: 10,
                paddingHorizontal: 20,
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                width: 150,
              },
            ]}
            onPress={handleSelected}
          >
            <Text
              style={[
                styles.header,
                selected && {
                  color: colors.SanadWhite,
                  fontWeight: "bold",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  width: 150,
                },
              ]}
            >
              Selected
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.header,
              !selected && {
                backgroundColor: colors.SanadBlue1,
                borderRadius: 10,
                paddingHorizontal: 20,
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                width: 150,
              },
            ]}
            onPress={handleUnselected}
          >
            <Text
              style={[
                styles.header,
                !selected && {
                  color: colors.SanadWhite,
                  fontWeight: "bold",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  width: 150,
                },
              ]}
            >
              Unselected
            </Text>
          </TouchableOpacity>
        </View>

        {selected ? (
          <>
            <View
              style={[styles.category_photos_container, { marginBottom: 10 }]}
            >
              <View style={styles.category_container}>
                <View style={styles.iconAndName}>
                  <MaterialCommunityIcons
                    name="sofa-single"
                    size={24}
                    color="#F5574E"
                  />
                  <Text style={styles.category_name}>Furniture</Text>
                </View>
                <View style={styles.photo_counter_container}>
                  <Text>
                    {
                      categoryImages.Furniture?.filter(
                        (a) => a.isSelected == true
                      ).length
                    }
                  </Text>
                  <Text>|</Text>
                  <Text>{categoryImages.Furniture?.length}</Text>
                </View>
              </View>
              {categoryImages.Furniture?.filter(
                (a) => a.isSelected == true
              ).map((imageUri, index) => (
                <View key={index} style={styles.imageContainer}>
                  <Image
                    style={styles.imageStyle}
                    source={{ uri: `${BaseURL}/${imageUri.image}` }}
                  />
                  <View style={styles.imageNumber}>
                    <Text style={styles.number_text}>{index + 1}</Text>
                  </View>
                </View>
              ))}
            </View>

            <View
              style={[styles.category_photos_container, { marginBottom: 10 }]}
            >
              <View style={styles.category_container}>
                <View style={styles.iconAndName}>
                  <MaterialCommunityIcons
                    name="fridge"
                    size={24}
                    color="#F5574E"
                  />
                  <Text style={styles.category_name}>Home Devices</Text>
                </View>
                <View style={styles.photo_counter_container}>
                  <Text>
                    {
                      categoryImages.Devices?.filter(
                        (a) => a.isSelected == true
                      ).length
                    }
                  </Text>
                  <Text>|</Text>
                  <Text>{categoryImages.Devices?.length}</Text>
                </View>
              </View>
              {categoryImages.Devices?.filter((a) => a.isSelected == true).map(
                (imageUri, index) => (
                  <View key={index} style={styles.imageContainer}>
                    <Image
                      style={styles.imageStyle}
                      source={{ uri: `${BaseURL}/${imageUri.image}` }}
                    />
                    <View style={styles.imageNumber}>
                      <Text style={styles.number_text}>{index + 1}</Text>
                    </View>
                  </View>
                )
              )}
            </View>

            <View
              style={[styles.category_photos_container, { marginBottom: 10 }]}
            >
              <View style={styles.category_container}>
                <View style={styles.iconAndName}>
                  <MaterialCommunityIcons
                    name="fridge"
                    size={24}
                    color="#F5574E"
                  />
                  <Text style={styles.category_name}>Electronics</Text>
                </View>
                <View style={styles.photo_counter_container}>
                  <Text>
                    {
                      categoryImages.Electronics?.filter(
                        (a) => a.isSelected == true
                      ).length
                    }
                  </Text>
                  <Text>|</Text>
                  <Text>{categoryImages.Electronics?.length}</Text>
                </View>
              </View>
              {categoryImages.Electronics?.filter(
                (a) => a.isSelected == true
              ).map((imageUri, index) => (
                <View key={index} style={styles.imageContainer}>
                  <Image
                    style={styles.imageStyle}
                    source={{ uri: `${BaseURL}/${imageUri.image}` }}
                  />
                  <View style={styles.imageNumber}>
                    <Text style={styles.number_text}>{index + 1}</Text>
                  </View>
                </View>
              ))}
            </View>

            <View
              style={[styles.category_photos_container, { marginBottom: 10 }]}
            >
              <View style={styles.category_container}>
                <View style={styles.iconAndName}>
                  <MaterialCommunityIcons
                    name="fridge"
                    size={24}
                    color="#F5574E"
                  />
                  <Text style={styles.category_name}> Clothes</Text>
                </View>
                <View style={styles.photo_counter_container}>
                  <Text>
                    {
                      categoryImages.Clothes?.filter(
                        (a) => a.isSelected == true
                      ).length
                    }
                  </Text>
                  <Text>|</Text>
                  <Text>{categoryImages.Clothes?.length}</Text>
                </View>
              </View>
              {categoryImages.Clothes?.filter((a) => a.isSelected == true).map(
                (imageUri, index) => (
                  <View key={index} style={styles.imageContainer}>
                    <Image
                      style={styles.imageStyle}
                      source={{ uri: `${BaseURL}/${imageUri.image}` }}
                    />
                    <View style={styles.imageNumber}>
                      <Text style={styles.number_text}>{index + 1}</Text>
                    </View>
                  </View>
                )
              )}
            </View>
          </>
        ) : (
          <>
            {/* UNSELECTED */}
            <View style={styles.imageContainer}>
              {/* {selectedImages.map((imageUri, index) => (
            <Image
              key={index}
              source={{ uri: imageUri }}
              style={styles.image}
            />
          ))} */}
            </View>

            <View style={styles.imageContainer}>
              {/* {unselectedImages.map((imageUri, index) => (
            <Image
              key={index}
              source={{ uri: imageUri }}
              style={styles.image}
            />
          ))} */}
            </View>

            <View
              style={[styles.category_photos_container, { marginBottom: 10 }]}
            >
              <View style={styles.category_container}>
                <View style={styles.iconAndName}>
                  <MaterialCommunityIcons
                    name="sofa-single"
                    size={24}
                    color="#F5574E"
                  />
                  <Text style={styles.category_name}>Furniture</Text>
                </View>
                <View style={styles.photo_counter_container}>
                  <Text>
                    {
                      categoryImages.Furniture?.filter(
                        (a) => a.isSelected == false
                      ).length
                    }
                  </Text>
                  <Text>|</Text>
                  <Text>{categoryImages.Furniture?.length}</Text>
                </View>
              </View>
              {categoryImages.Furniture?.filter(
                (a) => a.isSelected == false
              ).map((imageUri, index) => (
                <View key={index} style={styles.imageContainer}>
                  <Image
                    style={styles.imageStyle}
                    source={{ uri: `${BaseURL}/${imageUri.image}` }}
                  />
                  <View style={styles.imageNumber}>
                    <Text style={styles.number_text}>{index + 1}</Text>
                  </View>
                </View>
              ))}
            </View>

            <View
              style={[styles.category_photos_container, { marginBottom: 10 }]}
            >
              <View style={styles.category_container}>
                <View style={styles.iconAndName}>
                  <MaterialCommunityIcons
                    name="fridge"
                    size={24}
                    color="#F5574E"
                  />
                  <Text style={styles.category_name}>Home Devices</Text>
                </View>
                <View style={styles.photo_counter_container}>
                  <Text>
                    {
                      categoryImages.Devices?.filter(
                        (a) => a.isSelected == false
                      ).length
                    }
                  </Text>
                  <Text>|</Text>
                  <Text>{categoryImages.Devices?.length}</Text>
                </View>
              </View>
              {categoryImages.Devices?.filter((a) => a.isSelected == false).map(
                (imageUri, index) => (
                  <View key={index} style={styles.imageContainer}>
                    <Image
                      style={styles.imageStyle}
                      source={{ uri: `${BaseURL}/${imageUri.image}` }}
                    />
                    <View style={styles.imageNumber}>
                      <Text style={styles.number_text}>{index + 1}</Text>
                    </View>
                  </View>
                )
              )}
            </View>

            <View
              style={[styles.category_photos_container, { marginBottom: 10 }]}
            >
              <View style={styles.category_container}>
                <View style={styles.iconAndName}>
                  <MaterialCommunityIcons
                    name="fridge"
                    size={24}
                    color="#F5574E"
                  />
                  <Text style={styles.category_name}>Electronics</Text>
                </View>
                <View style={styles.photo_counter_container}>
                  <Text>
                    {
                      categoryImages.Electronics?.filter(
                        (a) => a.isSelected == false
                      ).length
                    }
                  </Text>
                  <Text>|</Text>
                  <Text>{categoryImages.Electronics?.length}</Text>
                </View>
              </View>
              {categoryImages.Electronics?.filter(
                (a) => a.isSelected == false
              ).map((imageUri, index) => (
                <View key={index} style={styles.imageContainer}>
                  <Image
                    style={styles.imageStyle}
                    source={{ uri: `${BaseURL}/${imageUri.image}` }}
                  />
                  <View style={styles.imageNumber}>
                    <Text style={styles.number_text}>{index + 1}</Text>
                  </View>
                </View>
              ))}
            </View>

            <View
              style={[styles.category_photos_container, { marginBottom: 10 }]}
            >
              <View style={styles.category_container}>
                <View style={styles.iconAndName}>
                  <MaterialCommunityIcons
                    name="fridge"
                    size={24}
                    color="#F5574E"
                  />
                  <Text style={styles.category_name}> Clothes</Text>
                </View>
                <View style={styles.photo_counter_container}>
                  <Text>
                    {
                      categoryImages.Clothes?.filter(
                        (a) => a.isSelected == false
                      ).length
                    }
                  </Text>
                  <Text>|</Text>
                  <Text>{categoryImages.Clothes?.length}</Text>
                </View>
              </View>
              {categoryImages.Clothes?.filter((a) => a.isSelected == false).map(
                (imageUri, index) => (
                  <View key={index} style={styles.imageContainer}>
                    <Image
                      style={styles.imageStyle}
                      source={{ uri: `${BaseURL}/${imageUri.image}` }}
                    />
                    <View style={styles.imageNumber}>
                      <Text style={styles.number_text}>{index + 1}</Text>
                    </View>
                  </View>
                )
              )}
            </View>

            {/* UNSELECTED */}
            <View style={styles.imageContainer}>
              {/* {selectedImages.map((imageUri, index) => (
            <Image
              key={index}
              source={{ uri: imageUri }}
              style={styles.image}
            />
          ))} */}
            </View>
          </>
        )}
        <View
          style={{
            flexDirection: "row",
            gap: 20,
            alignItems: "center",
            position: "absolute",
            top: 10,
          }}
        >
          <TouchableOpacity
            style={{ flexDirection: "row" }}
            onPress={() => {
              navigation.navigate("album");
            }}
          >
            <Ionicons name="chevron-back-sharp" size={35} color="#1B1931" />
            {/* <Text
              style={{
                color: colors.SanadBlue1,
                fontWeight: fonts.bold,
                fontSize: 18,
              }}
            >
              Back
            </Text> */}
          </TouchableOpacity>
          {/* <TouchableOpacity
            style={styles.redbutton}
            onPress={() => {
              navigation.navigate("album");
            }}
          >
            <Text style={styles.button}>Done</Text>
          </TouchableOpacity> */}
        </View>
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
    color: colors.SanadMedGrey,
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

  container: {
    height: "75%",
    width: "100%%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 40,
  },
  container_title: {
    width: "100%",
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  container_title_text: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: fonts.semibold,
  },

  //Card of Category + Photos
  category_photos_container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  category_container: {
    width: "100%",
    height: "auto",
    backgroundColor: colors.SanadWhite,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  iconAndName: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  category_name: {
    fontWeight: fonts.semibold,
    color: colors.SanadBlue1,
  },
  photo_counter_container: {
    flexDirection: "row",
    gap: 3,
  },
  photos_container_wrap: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "100%",
    flexWrap: "wrap",
    paddingVertical: 15,
    gap: 6.5,
  },
  add_button: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.SanadWhite,
    borderRadius: 10,
  },
  category_photos_container: {
    flexDirection: "row", // Line items up in a row
    flexWrap: "wrap", // Allow items to wrap to the next line
    justifyContent: "center", // Center items (optional)
    alignItems: "center",
    gap: 6.5,
  },
  imageContainer: {
    position: "relative",
    margin: 5,
  },
  imageStyle: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  removeButton: {
    position: "absolute",
    top: 2,
    right: 2,
    backgroundColor: "rgba(105,105,105, 0.9)",
    borderRadius: 15,
    width: 22,
    height: 22,
    justifyContent: "center",
    alignItems: "center",
  },
  removeButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  imageNumber: {
    position: "absolute",
    backgroundColor: colors.SanadRed,
    borderRadius: 10,
    width: 22,
    height: 22,
    alignItems: "center",
    justifyContent: "center",
    left: 2,
    top: 2,
  },
  number_text: {
    color: colors.SanadWhite,
    fontWeight: "bold",
    fontSize: 16, // Adjust size as needed
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
