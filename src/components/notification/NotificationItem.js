import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { BaseURL } from "../../apis";
import { colors, fonts } from "../../config/theme";

const NotificationItem = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    fetch(`${BaseURL}/notifications/:userId`, {
      method: "GET",
      headers: {
        Authorization: "Bearer YOUR_JWT_TOKEN",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setNotifications(data?.notifications);
        } else {
          console.error("Failed to fetch notification!!!!!!");
        }
      })
      .catch((error) => {
        console.error("Error fetching notifications:", error);
      });
  }, []);

  return (
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
          //   backgroundColor: "yellow",
        }}
      >
        <Text style={{ fontWeight: fonts.bold, color: colors.SanadBlue1 }}>
          Notification Title
        </Text>
        <Text style={{ color: colors.SanadBlue1 }}>Notification Body</Text>
      </View>
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
