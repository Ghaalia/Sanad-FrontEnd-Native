import { StyleSheet, Text, View, Image } from "react-native";

import { colors, family, fonts } from "../../config/theme";

const NotificationItemNew = ({ notification }) => {
  return (
    <View style={{ gap: 10 }}>
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
          marginBottom: 10,
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
            {notification?.title}

            {/* You have been accepted to attend */}
          </Text>
          <Text style={{ color: colors.SanadBlue1, fontFamily: fonts.bold }}>
            {notification?.description}
            {/* See you soon */}
          </Text>
        </View>
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

export default NotificationItemNew;

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
