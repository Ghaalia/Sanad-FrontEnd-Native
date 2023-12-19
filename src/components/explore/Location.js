import { Alert, Image, Linking, StyleSheet, Text, View } from "react-native";
import React from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { TouchableOpacity } from "react-native-gesture-handler";

const Location = () => {
  //   return (
  //     <View style={{ padding: 50 }}>
  //       <Text>HERE IS GOOGLE MAP</Text>
  //       <View style={styles.container}>
  //         <MapView
  //           style={styles.map}
  //           initialRegion={{
  //             latitude: 37.78825,
  //             longitude: -122.4324,
  //             latitudeDelta: 0.0922,
  //             longitudeDelta: 0.0421,
  //           }}
  //         >
  //           <Marker
  //             coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
  //             title="Marker Title"
  //             description="Marker Description"
  //           />
  //         </MapView>
  //       </View>
  //     </View>
  //   );
  // };
  const handlePress = () => {
    Alert.alert(
      "Navigate to Google Maps",
      "Do you want to open Google Maps?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "OK",
          onPress: () =>
            Linking.openURL("https://maps.app.goo.gl/CPCD96ipEzJcEpyw7"),
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <View
      style={{
        justifyContent: "center",
        alignContent: "center",
        alignSelf: "center",
        padding: 20,
      }}
    >
      <TouchableOpacity onPress={handlePress}>
        <Image
          source={require("../../../assets/location/KuwaitTower.png")} // Replace with the path to your image
          style={{
            width: 350,
            height: 300,
            justifyContent: "center",
            borderColor: "lightgray",
            borderWidth: 2,
            borderRadius: 13,
          }} // Adjust dimensions as needed
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});

export default Location;
