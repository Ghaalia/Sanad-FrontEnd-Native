import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Instagram, MailIcon, MessageCircle } from "lucide-react-native";

const ContactUs = () => {
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
            justifyContent: "space-between",
            alignItems: "center",
            borderRadius: 20,
            borderWidth: 0.25,
            padding: 10,
          }}
        >
          <Text> +965 99776567 </Text>
          <MessageCircle color="#F5574E" />
        </View>

        <View
          style={{
            width: "90%",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            borderRadius: 20,
            borderWidth: 0.25,
            padding: 10,
          }}
        >
          <Text> @Sanad.kw </Text>
          <Instagram color="#F5574E" />
        </View>

        <View
          style={{
            width: "90%",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            borderRadius: 20,
            borderWidth: 0.25,
            padding: 10,
          }}
        >
          <Text> Sanadkw@gmail.com </Text>
          <MailIcon color="#F5574E" />
        </View>
      </View>
    </View>
  );
};

export default ContactUs;

const styles = StyleSheet.create({});
