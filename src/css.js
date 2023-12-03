import { StyleSheet } from "react-native";
import {
  useFonts,
  Urbanist_400Regular,
  Urbanist_600SemiBold,
} from "@expo-google-fonts/urbanist";

const styles = StyleSheet.create({
  button: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
    fontFamily: "Urbanist_600SemiBold",
  },
  textinput: {
    backgroundColor: "gray",
    color: "white",
    width: 339,
    height: 50,
    borderRadius: 30,
    paddingHorizontal: 20,
    fontFamily: "Urbanist_400Regular",
  },

  header: {
    fontFamily: "Urbanist_600SemiBold",
    fontWeight: "bold",
    color: "white",
    justifyContent: "center",
    fontSize: 24,
    marginBottom: 15,
    marginTop: 15,
  },
  bg: {
    backgroundColor: "#1B1931",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    flex: 1,
  },
  redbutton: {
    backgroundColor: "#F5574E",
    width: 339,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    marginTop: 30,
  },
  paragraph: {
    color: "#6B6893",
    fontSize: 14,
    fontFamily: "Urbanist_400Regular",
    textAlign: "center",
    width: 290,
    marginBottom: 30,
  },
  boxinput: {
    backgroundColor: "gray",
    color: "white",
    width: 69,
    height: 60,
    borderRadius: 8,
    paddingHorizontal: 20,
    fontFamily: "Urbanist_400Regular",
  },
});

export default styles;
