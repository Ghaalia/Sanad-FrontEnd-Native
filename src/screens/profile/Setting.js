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
      <View
        style={{
          backgroundColor: "white",
          height: "65%",
          width: "80%",
          flexDirection: "column",
          alignItems: "center",
          shadowColor: "black",
          shadowOffset: { height: -1, width: -10 },
          shadowOpacity: 0.25,
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
          position: "relative",
          paddingTop: 40,
          paddingHorizontal: 20,
          gap: 25,
        }}
      >
        <View
          style={{
            width: "90%",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            paddingVertical: 10,
          }}
        >
          <Text
            style={{
              fontSize: 17,
            }}
          >
            Language
          </Text>

          <Text style={styles.button}>AR</Text>
          <Text style={styles.button}>EN</Text>
        </View>

        <View
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            paddingVertical: 10,
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
            justifyContent: "space-around",
            alignItems: "center",
            paddingVertical: 10,
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
          onPress={() => {
            logout_mutate();
          }}
        >
          <Text style={styles.logout}>Logout</Text>
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
    width: "20%",
    textAlign: "center",
  },
  logout: {
    color: "white",
    height: 40,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 20,
    width: "60%",
    textAlign: "center",
    backgroundColor: "#F5574E",
    overflow: "hidden",
  },
});
