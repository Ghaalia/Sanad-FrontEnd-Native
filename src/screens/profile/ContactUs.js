import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Instagram, MailIcon, MessageCircle } from "lucide-react-native";
import { colors } from "../../config/theme";

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
        Contact Us
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
            borderRadius: 20,
            backgroundColor: colors.SanadBgGrey,
            padding: 10,
          }}
        >
          <Text> +965 99776567 </Text>
          <MessageCircle color="#F5574E" />
        </View>

        <View
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            borderRadius: 20,
            backgroundColor: colors.SanadBgGrey,
            padding: 10,
          }}
        >
          <Text> @Sanad.kw </Text>
          <Instagram color="#F5574E" />
        </View>

        <View
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            borderRadius: 20,
            backgroundColor: colors.SanadBgGrey,
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
