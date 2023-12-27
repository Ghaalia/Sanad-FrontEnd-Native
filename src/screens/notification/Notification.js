import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  ScrollView,
  StyleSheet,
  Image,
  RefreshControl,
} from "react-native";
import { getNotificationsByUser } from "../../apis/notification";
import NotificationItemNew from "../../components/notification/NotificationItemNew";
import { colors, fonts } from "../../config/theme";
import { QueryClient, useQuery, useQueryClient } from "@tanstack/react-query";
import { getMyProfile } from "../../apis/auth";
import UserContext from "../../../context/UserContext";

const Notification = () => {
  const { user } = useContext(UserContext);
  const userId = 0;
  const queryClient = useQueryClient();
  const { data: user_ } = useQuery({
    queryKey: ["user"],
    queryFn: () => getMyProfile(),
  });

  const {
    data: allNotifications,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["Notifications", user.id],
    queryFn: () => getNotificationsByUser(user.id),
  });
  console.log("Nothing yet moodhy!", allNotifications);

  useEffect(() => {
    // Fetch the userId and set it in the state
    const fetchUserId = async () => {
      // Fetch the userId from your source (e.g., context, storage, etc.)
      const userId = await fetchUserIdFromSomewhere();
      setUserId(userId);
    };

    fetchUserId();
  }, []);

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
        refreshControl={
          <RefreshControl
            onRefresh={() => {
              refetch();

              queryClient.invalidateQueries(["Notifications_", user.id]);
            }}
            refreshing={isLoading}
          />
        }
        style={{
          width: "100%",
          // backgroundColor: "yellow",
          flexDirection: "column",
          paddingHorizontal: 30,
          paddingVertical: 30,
        }}
      >
        {/* <Text>{user?._id}</Text> */}
        {allNotifications?.map((el) => (
          <NotificationItemNew notification={el} />
          // <Text>{el.title}</Text>
          // <NotificationItem id={el?._id} notification={el} />
        ))}
        {/* <NotificationItem notifications={el} id={el._id}/> */}
        {/* <NotificationItem /> */}
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

// useEffect(() => {
//   getNotificationsByUser();
// }, []);

// useEffect(() => {
//   if (userId) {
//     fetchNotifications(userId);
//   }
// }, [userId]);

// const getNotificationsByUser = async () => {
//   try {
//     const userId = await SecureStore.getItemAsync("userId");
//     const userToken = await SecureStore.getItemAsync("userToken");

//     setUserId(userId);
//     setUserToken(userToken);

//     fetchNotifications(userId, userToken);
//   } catch (error) {
//     console.error("Error fetching notifications:", error);
//   }
// };

// const fetchNotifications = async (userId, userToken) => {
//   try {
//     const response = await fetch(`${BaseURL}/notifications/${userId}`, {
//       method: "GET",
//       headers: {
//         Authorization: `Bearer ${userToken}`,
//       },
//     });

//     if (response.ok) {
//       const data = await response.json();
//       if (data.success) {
//         setNotifications(data.notifications);
//       } else {
//         console.error("Failed to fetch notifications!!!!!!");
//       }
//     } else {
//       console.error("Failed to fetch notifications!!!!!!");
//     }
//   } catch (error) {
//     console.error("Error fetching notifications:", error);
//   }
// };

// const fetchNotifications = async (userId) => {
//   try {
//     const fetchedNotifications = await getNotificationsByUser(userId);
//     setNotifications(fetchedNotifications);
//   } catch (error) {
//     console.error("Error fetching notifications:", error);
//   }
// };
