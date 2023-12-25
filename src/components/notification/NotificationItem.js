import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { BaseURL } from "../../apis";
import { colors, family, fonts } from "../../config/theme";
import * as SecureStore from "expo-secure-store";
import { getNotificationsByUser } from "../../apis/notification";

const NotificationItem = ({ notification, id }) => {
  console.log("Get Notification:", notification);
  console.log("Get ID:", id);

  const [showContent1, setShowContent1] = useState(false);
  const [showContent2, setShowContent2] = useState(false);

  const handlePress1 = () => {
    setShowContent1(!showContent1);
  };
  const handlePress2 = () => {
    setShowContent2(!showContent2);
  };
  return (
    <View style={{ gap: 10 }}>
      <Pressable onPress={handlePress1}>
        {showContent1 ? (
          <View
            style={{
              width: "100%",
              height: 80,
              backgroundColor: "white",
              flexDirection: "row",
              alignItems: "center",
              borderRadius: 10,
              overflow: "hidden",
              gap: 15,
            }}
          >
            <View
              style={{
                width: 80,
                height: "100%",
                backgroundColor: colors.SanadRed,
                padding: 10,
              }}
            >
              <Image
                style={{ width: "100%", height: "100%", resizeMode: "contain" }}
                source={require("../../../assets/notifications/sanad-white.png")}
              />
            </View>
            <View
              style={{
                height: "100%",
                justifyContent: "space-evenly",
                flexWrap: "wrap",
                //   backgroundColor: "yellow",
              }}
            >
              <Text
                style={{
                  fontFamily: family.semibold,
                  color: colors.SanadBlue1,

                  // fontWeight: fonts.bold,
                }}
              >
                {/* {notification?.title}
                 */}
                You have been accepted to attend
              </Text>
              <Text
                style={{ color: colors.SanadBlue1, fontFamily: fonts.bold }}
              >
                {/* {notification?.description} */}
                See you soon
              </Text>
            </View>
          </View>
        ) : (
          <View
            style={{
              alignItems: "center",

              // backgroundColor: "blue",
            }}
          >
            <Text
              style={{
                fontSize: 16,
                height: 70,
                fontFamily: family.semibold,
                color: colors.SanadBlue1,
              }}
            >
              {" "}
              No notifications yet
            </Text>
          </View>
        )}
      </Pressable>
      <Pressable onPress={handlePress2}>
        {showContent2 ? (
          <View
            style={{
              width: "100%",
              height: 80,
              backgroundColor: "white",
              flexDirection: "row",
              alignItems: "center",
              borderRadius: 10,
              overflow: "hidden",

              gap: 15,
            }}
          >
            <View
              style={{
                width: 80,
                height: "100%",
                backgroundColor: colors.SanadRed,
                padding: 10,
              }}
            >
              <Image
                style={{ width: "100%", height: "100%", resizeMode: "contain" }}
                source={require("../../../assets/notifications/sanad-white.png")}
              />
            </View>
            <View
              style={{
                height: "100%",
                justifyContent: "space-evenly",
                flexWrap: "wrap",
                //   backgroundColor: "yellow",
              }}
            >
              <Text
                style={{
                  fontFamily: family.semibold,
                  color: colors.SanadBlue1,

                  // fontWeight: fonts.bold,
                }}
              >
                {/* {notification?.title}
                 */}
                Congratulations
              </Text>
              <Text
                style={{
                  color: colors.SanadBlue1,
                  fontFamily: fonts.bold,
                  flexWrap: "wrap",
                  width: "80%",
                }}
              >
                {/* {notification?.description} */}
                Points have been added to your account
              </Text>
            </View>
          </View>
        ) : (
          <Text style={{ height: 70, color: colors.SanadBgGrey }}> show</Text>
        )}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default NotificationItem;

{
  /* <View style={styles.container}>
      <Text>Notification Details</Text>
      {notifications.map((notification) => (
        <View key={notification._id}>
          <Text>Title: {notification.title}</Text>
          <Text>Description: {notification.description}</Text>
        </View>
      ))}
    </View> */
}

// useEffect(() => {
//   fetch(`${BaseURL}/notifications/${userId}`, {
//     method: "GET",
//     headers: {
//       Authorization: `Bearer ${userToken}`,
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       if (data.success) {
//         setNotifications(data?.notifications);
//       } else {
//         console.error("Failed to fetch notification!!!!!!");
//       }
//     })
//     .catch((error) => {
//       console.error("Error fetching notifications:", error);
//     });
// }, []);
