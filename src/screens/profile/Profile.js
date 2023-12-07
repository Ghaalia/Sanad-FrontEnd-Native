import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import ProfileImage from "../../components/ProfileImage";
import {
  FontAwesome5,
  Ionicons,
  MaterialIcons,
  Feather,
} from "@expo/vector-icons";
import UserContext from "../../../context/UserContext";

const Profile = () => {
  const navigation = useNavigation();
  const { user } = useContext(UserContext);
  console.log(user);
  if (!user) {
    // navigation
    navigation.replace("login");
  }
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#F5574E",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Text
        style={{
          flex: 1,
          color: "white",
          fontWeight: "600",
          marginTop: 75,
          // backgroundColor: "green",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          fontSize: 28,
        }}
      >
        My Profile
      </Text>

      <View
        style={{
          backgroundColor: "white",
          height: "75%",
          width: "88%",
          paddingHorizontal: 30,
          // paddingBottom: 40,
          // paddingTop: 20,
          gap: 45,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          shadowColor: "black",
          shadowOffset: { height: 1, width: 1 },
          shadowRadius: 10,
          shadowOpacity: 0.25,
          borderTopRightRadius: 16,
          borderTopLeftRadius: 16,
          position: "relative",
        }}
      >
        {/*  Profile Image */}
        <ProfileImage />

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("volunteeringHistory");
          }}
          style={{
            backgroundColor: "white",
            height: 124.5,
            width: "100%",
            gap: 10,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 16,
            shadowColor: "black",
            shadowOffset: { height: 2, width: -5 },
            shadowOpacity: 0.25,
            borderTopRightRadius: 16,
            borderTopLeftRadius: 16,
          }}
        >
          <FontAwesome5 name="handshake" size={24} color="#F5574E" />
          <View
            style={{
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#1B1931", fontWeight: "600" }}>
              Volunteering
            </Text>
            <Text style={{ color: "#1B1931", fontWeight: "600" }}>History</Text>
          </View>
        </TouchableOpacity>

        <View
          style={{
            // backgroundColor: "yellow",
            width: "100%",
            height: 200,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("editeProfile");
            }}
            style={{
              width: "100%",
              height: 40,
              backgroundColor: "white",
              flexDirection: "row",
              alignItems: "center",
              borderRadius: 30,
              paddingHorizontal: 5,
              justifyContent: "space-between",
              borderStyle: "solid",
              borderWidth: 0.5,
              borderColor: "#F5574E",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                gap: 5,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Ionicons
                name="person-circle-outline"
                size={32}
                color="#F5574E"
              />
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "600",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                Edit My Profile
              </Text>
            </View>
            <MaterialIcons name="arrow-forward-ios" size={24} color="#1B1931" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("account");
            }}
            style={{
              width: "100%",
              height: 40,
              backgroundColor: "white",
              flexDirection: "row",
              alignItems: "center",
              borderRadius: 30,
              paddingHorizontal: 5,
              justifyContent: "space-between",
              borderStyle: "solid",
              borderWidth: 0.5,
              borderColor: "#F5574E",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                gap: 5,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <View
                style={{
                  width: 30,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <FontAwesome5 name="lock" size={20} color="#F5574E" />
              </View>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "600",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                Account
              </Text>
            </View>
            <MaterialIcons name="arrow-forward-ios" size={24} color="#1B1931" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("setting");
            }}
            style={{
              width: "100%",
              height: 40,
              backgroundColor: "white",
              flexDirection: "row",
              alignItems: "center",
              borderRadius: 30,
              paddingHorizontal: 5,
              justifyContent: "space-between",
              borderStyle: "solid",
              borderWidth: 0.5,
              borderColor: "#F5574E",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                gap: 5,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <View
                style={{
                  width: 30,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Feather name="settings" size={24} color="#F5574E" />
              </View>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "600",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                Settings
              </Text>
            </View>
            <MaterialIcons name="arrow-forward-ios" size={24} color="#1B1931" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("contactUs");
            }}
            style={{
              width: "100%",
              height: 40,
              backgroundColor: "white",
              flexDirection: "row",
              alignItems: "center",
              borderRadius: 30,
              paddingHorizontal: 5,
              justifyContent: "space-between",
              borderStyle: "solid",
              borderWidth: 0.5,
              borderColor: "#F5574E",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                gap: 5,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <View
                style={{
                  width: 30,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Ionicons name="md-call-sharp" size={24} color="#F5574E" />
              </View>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "600",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                Contact Us
              </Text>
            </View>
            <MaterialIcons name="arrow-forward-ios" size={24} color="#1B1931" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Profile;
