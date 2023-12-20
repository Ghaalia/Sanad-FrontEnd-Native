import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Svg, { Circle, Rect } from "react-native-svg";
import { colors, fonts } from "../../config/theme";

const Rewards = () => {
  return (
    <View
      style={{
        flex: 1,
        width: "100%",
        backgroundColor: colors.SanadBgGrey,
        alignItems: "center",
      }}
    >
      <View
        style={{
          height: "15%",
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          paddingTop: 30,
          backgroundColor: colors.SanadBlue1,
          borderEndEndRadius: 30,
          borderEndStartRadius: 30,
          shadowColor: "black",
          shadowOffset: { height: 8, width: 4 },
          shadowRadius: 8,
          shadowOpacity: 0.2,
        }}
      >
        <View
          onPress={() => {
            navigation.navigate("donate");
          }}
        >
          <Text
            style={{
              color: colors.SanadWhite,
              fontSize: 32,
              fontFamily: "Urbanist_600SemiBold",
            }}
          >
            Rewards
          </Text>
        </View>
        <Image
          style={{ width: "30%", resizeMode: "contain" }}
          source={require("../../../assets/onlylogo.png")}
        />
      </View>
      <ScrollView
        style={{
          width: "100%",
          // backgroundColor: "pink",
          flexDirection: "column",
        }}
      >
        <View style={{ height: 150 }}>
          <Image
            style={{
              height: "100%",
              resizeMode: "contain",
              alignSelf: "center",
            }}
            source={require("../../../assets/rewards/thankyou.png")}
          />
          <View
            style={{
              width: "100%",
              alignItems: "center",
              paddingHorizontal: 30,
              gap: 10,
              paddingBottom: 20,
              borderBottomWidth: 1.5,
              borderColor: "white",
            }}
          >
            <Text
              style={{
                fontSize: 20,
                color: colors.SanadRed,
                fontWeight: fonts.bold,
              }}
            >
              UserName
            </Text>
            <Text
              style={{
                textAlign: "center",
                color: colors.SanadBlue1,
                fontWeight: fonts.semibold,
              }}
            >
              for all those selfless acts you did, and for giving your hand to
              the needful.
            </Text>
          </View>
          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              gap: 10,
              paddingVertical: 20,
              borderBottomWidth: 1.5,
              borderColor: "white",
            }}
          >
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-evenly",
              }}
            >
              <View
                style={{
                  alignItems: "center",
                }}
              >
                <Text style={styles.you_have_text}>Participated in</Text>
                <Text
                  style={{
                    color: colors.SanadRed,
                    fontSize: 28,
                    fontWeight: fonts.bold,
                  }}
                >
                  4
                </Text>
                <Text style={styles.you_have_text}>organizations</Text>
              </View>
              <View style={{ width: 1.5, backgroundColor: "white" }}></View>
              <View style={{ alignItems: "center" }}>
                <Text style={styles.you_have_text}>Volunteered</Text>
                <Text
                  style={{
                    color: colors.SanadRed,
                    fontSize: 28,
                    fontWeight: fonts.bold,
                  }}
                >
                  30
                </Text>
                <Text style={styles.you_have_text}>times</Text>
              </View>
            </View>
          </View>

          <View
            style={{ flexDirection: "columns", gap: 20, paddingVertical: 20 }}
          >
            <Text
              style={{
                color: colors.SanadBlue1,
                fontSize: 16,
                fontWeight: fonts.bold,
                textAlign: "center",
              }}
            >
              Achievements
            </Text>
            <View
              style={{ flexDirection: "row", justifyContent: "space-evenly" }}
            >
              <View
                style={{
                  width: 100,
                  height: 100,
                  backgroundColor: "white",
                  gap: 10,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 10,
                }}
              >
                <Image
                  style={{
                    height: "55%",
                    resizeMode: "contain",
                    alignSelf: "center",
                  }}
                  source={require("../../../assets/rewards/star.png")}
                />
                <Text style={styles.you_have_text}>10 Points</Text>
              </View>
              <View
                style={{
                  width: 100,
                  height: 100,
                  backgroundColor: "white",
                  gap: 10,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 10,
                }}
              >
                <Image
                  style={{
                    height: "55%",
                    resizeMode: "contain",
                    alignSelf: "center",
                  }}
                  source={require("../../../assets/rewards/star.png")}
                />
                <Text style={styles.you_have_text}>20 Points</Text>
              </View>
              <View
                style={{
                  width: 100,
                  height: 100,
                  backgroundColor: "white",
                  gap: 10,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 10,
                }}
              >
                <Image
                  style={{
                    height: "55%",
                    resizeMode: "contain",
                    alignSelf: "center",
                  }}
                  source={require("../../../assets/rewards/star.png")}
                />
                <Text style={styles.you_have_text}>30 Points</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* <View style={{ flex: 40, backgroundColor: "yellow" }}></View>
      <View style={{ flex: 1, marginTop: 200 }}></View> */}
    </View>
  );
};

export default Rewards;

const styles = StyleSheet.create({
  you_have_text: {
    textAlign: "center",
    color: colors.SanadBlue1,
    fontWeight: fonts.semibold,
  },
});
