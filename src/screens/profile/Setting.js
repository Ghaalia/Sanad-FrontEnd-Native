import {
  Pressable,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext, useState } from "react";
import { Moon } from "lucide-react-native";
import { logout } from "../../apis/auth";
import { useMutation } from "@tanstack/react-query";
import { setStatusBarStyle } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import UserContext from "../../../context/UserContext";
import { colors, fonts } from "../../config/theme";

const Setting = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const { user, setUser } = useContext(UserContext);
  const navigation = useNavigation();

  const { mutate: logout_mutate, error } = useMutation({
    mutationKey: ["logout"],
    mutationFn: () => logout(),
    onSuccess: () => {
      setUser(false);
      // navigation.navigate("login");
    },
  });
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#F5574E",
        justifyContent: "flex-end",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          flex: 1,
          width: "100%",
          color: "white",
          fontWeight: "600",
          marginTop: 75,
          paddingTop: 35,
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
          fontSize: 28,
        }}
      >
        Settings
      </Text>
      <View
        style={{
          backgroundColor: "white",
          height: "75%",
          width: "88%",
          paddingHorizontal: 30,
          gap: 30,
          paddingTop: 30,
          flexDirection: "column",
          justifyContent: "flex-start",
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
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingVertical: 10,
            paddingHorizontal: 10,
            backgroundColor: colors.SanadBgGrey,
            borderRadius: 30,
          }}
        >
          <Text
            style={{
              width: "50%",
              fontSize: 17,
            }}
          >
            Language
          </Text>
          <View
            style={{
              width: "50%",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={styles.button}>AR</Text>
            <Text style={styles.button}>EN</Text>
          </View>
        </View>

        <View
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingVertical: 10,
            paddingHorizontal: 10,
            backgroundColor: colors.SanadBgGrey,
            borderRadius: 30,
          }}
        >
          <Text
            style={{
              fontSize: 17,
            }}
          >
            Dark/Light mode
          </Text>

          <Moon color="#767577" size={30} strokeWidth={1.7} />
        </View>

        <View
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingVertical: 10,
            paddingHorizontal: 10,
            backgroundColor: colors.SanadBgGrey,
            borderRadius: 30,
          }}
        >
          <Text
            style={{
              fontSize: 17,
            }}
          >
            Allow Notifications
          </Text>

          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <TouchableOpacity
          style={styles.logout}
          onPress={() => {
            logout_mutate();
          }}
        >
          <Text
            style={{
              color: colors.SanadWhite,
              fontWeight: fonts.bold,
              fontSize: 15,
            }}
          >
            Logout
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({
  button: {
    height: 35,
    borderWidth: 0.25,
    paddingVertical: 10,
    borderRadius: 20,
    width: "45%",
    textAlign: "center",
  },
  logout: {
    marginTop: 40,
    width: "100%",
    color: "white",
    height: 50,
    paddingVertical: 10,
    paddingHorizontal: 30,
    width: "100%",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    backgroundColor: "#F5574E",
    borderRadius: 40,
  },
});
