import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { colors } from "../../config/theme";

const Donate = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.SanadBgGrey,
        alignItems: "center",
      }}
    >
      <View
        style={{
          flex: 15,
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          paddingTop: 30,
          backgroundColor: colors.SanadBlue1,
          borderEndEndRadius: 40,
          borderEndStartRadius: 40,
          shadowColor: "black",
          shadowOffset: { height: 8, width: 4 },
          shadowRadius: 8,
          shadowOpacity: 0.2,
        }}
      >
        <Text
          style={{
            color: colors.SanadWhite,
            fontSize: 40,
            fontFamily: "Urbanist_600SemiBold",
          }}
        >
          Donate
        </Text>
        <Image
          style={{ width: "35%", resizeMode: "contain" }}
          source={require("../../../assets/onlylogo.png")}
        />
      </View>
      <View>
        <Text>Donate</Text>
      </View>
    </View>
  );
};

export default Donate;

const styles = StyleSheet.create({});
