import { Alert, Image, Linking, StyleSheet, Text, View } from "react-native";
import React from "react";

import { TouchableOpacity } from "react-native-gesture-handler";
import MapView, { Marker } from "react-native-maps";

const Location = ({ event }) => {
  return (
    <View
      style={{
        paddingHorizontal: 30,
        paddingBottom: 30,
        flex: 1,
        borderRadius: 10,
      }}
    >
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: event.lat,
            longitude: event.lng,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{ latitude: event.lat, longitude: event.lng }}
            title="Marker Title"
            description="Marker Description"
          />
        </MapView>
      </View>
    </View>
  );
};
// const handlePress = () => {
//   Alert.alert(
//     "Navigate to Google Maps",
//     "Do you want to open Google Maps?",
//     [
//       { text: "Cancel", style: "cancel" },
//       {
//         text: "OK",
//         onPress: () =>
//           Linking.openURL("https://maps.app.goo.gl/CPCD96ipEzJcEpyw7"),
//       },
//     ],
//     { cancelable: false }
//   );
// };

// return (
//   <View
//     style={{
//       justifyContent: "center",
//       alignContent: "center",
//       alignSelf: "center",
//       padding: 20,
//     }}
//   >
//     <TouchableOpacity onPress={handlePress}>
//       <Image
//         source={require("../../../assets/location/KuwaitTower.png")} // Replace with the path to your image
//         style={{
//           width: 350,
//           height: 300,
//           justifyContent: "center",
//           borderColor: "lightgray",
//           borderWidth: 2,
//           borderRadius: 13,
//         }}
//       />
//     </TouchableOpacity>
//   </View>
// );

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    borderRadius: 10,
    width: "100%",
    height: "66%",
  },
});

export default Location;
