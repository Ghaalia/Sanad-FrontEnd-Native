import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  ScrollView,
  StyleSheet,
  Image,
} from "react-native";
import { getNotificationsByUser } from "../../apis/notification";
import NotificationItem from "../../components/notification/NotificationItem";
import { colors, fonts } from "../../config/theme";
import { useQuery } from "@tanstack/react-query";
import { getMyProfile } from "../../apis/auth";
import UserContext from "../../../context/UserContext";

const Notification = ({ route }) => {
  //   console.log(`Im userId ${userId}`);
  const userContext = useContext(UserContext);
  const { userId } = userContext.user;

  const { data: user } = useQuery({
    queryKey: ["user"],
    queryFn: () => getMyProfile(),
  });
  // const { userId } = route.params;
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    if (userId) {
      fetchNotifications(userId);
    }
  }, [userId]);

  const fetchNotifications = async (userId) => {
    try {
      const fetchedNotifications = await getNotificationsByUser(userId);
      setNotifications(fetchedNotifications);
    } catch (error) {
      console.error("Error fetching notifications:", error);
    }
  };

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
            Notifications
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
          //   backgroundColor: "yellow",
          flexDirection: "column",
          paddingHorizontal: 30,
          paddingVertical: 30,
        }}
      >
        <Text>{user?._id}</Text>
        <NotificationItem />
      </ScrollView>
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({
  you_have_text: {
    textAlign: "center",
    color: colors.SanadBlue1,
    fontWeight: fonts.semibold,
  },
});

{
  /* <FlatList
        data={notifications}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View>
            <Text>Title: {item?.title}</Text>
            <Text>Description: {item?.description}</Text>
          </View>
        )}
      />
      <NotificationItem route={route}  /> */
}
