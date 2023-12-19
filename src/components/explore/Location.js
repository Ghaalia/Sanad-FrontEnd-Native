import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MapView, { Marker } from "react-native-maps";

const Location = () => {
  return (
    <View>
      <View>
        <Text>hi Location</Text>
      </View>
      <View>
        <MapView
          style={{ flex: 1 }}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
            title="Marker Title"
            description="Marker Description"
          />
        </MapView>
      </View>
    </View>
  );
};

export default Location;

const styles = StyleSheet.create({});
