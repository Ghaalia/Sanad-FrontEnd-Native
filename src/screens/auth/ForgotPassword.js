import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { TextInput } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import styles from "../../css";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const ForgotPassword = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor: "#1B1931" }}>
      <View>
        <Image
          style={{ height: 180, width: 395 }}
          source={require("../../../assets/Group143.png")}
        />
        <ScrollView>
          <View style={styles.bg}>
            <Pressable
              onPress={() => {
                navigation.navigate("login");
              }}
              style={{
                justifyContent: "center",
                alignContent: "center",
                padding: 30,
              }}
            >
              <Image
                style={{
                  width: 41,
                  height: 41,
                }}
                source={require("../../../assets/back.png")}
              />
            </Pressable>
            <Text style={styles.header}>Forgot Password ?</Text>
            <View>
              <Text style={styles.paragraph}>
                Don't worry! It occurs. Please enter the email address linked
                with your account.
              </Text>
            </View>
            <View
              style={{
                height: 100,
                width: 393,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TextInput
                placeholder="Enter your email"
                placeholderTextColor="white"
                // onChangeText={(text) => {
                //   setEmail(text);
                // }}
                style={styles.textinput}
              />
            </View>

            {/* <Text> {JSON.stringify(error)}</Text> */}
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("otpvarification");
              }}
              style={styles.redbutton}
            >
              <Text style={styles.button}>Send Code</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default ForgotPassword;

// GenderSelection.js
// import React, { useState } from "react";
// import { View, TouchableOpacity, StyleSheet } from "react-native";
// import Icon from "react-native-vector-icons/FontAwesome";

// const GenderSelection = ({ onSelect }) => {
//   const [selectedGender, setSelectedGender] = useState(null);

//   const handleGenderSelect = (gender) => {
//     setSelectedGender(gender);
//     onSelect(gender);
//   };

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity
//         style={selectedGender === "male" ? styles.selectedIcon : styles.icon}
//         onPress={() => handleGenderSelect("male")}
//       >
//         <Icon name="mars" size={30} color="blue" />
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={selectedGender === "female" ? styles.selectedIcon : styles.icon}
//         onPress={() => handleGenderSelect("female")}
//       >
//         <Icon name="venus" size={30} color="pink" />
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: "row",
//     justifyContent: "center",
//     marginVertical: 10,
//     marginTop: 100,
//   },
//   icon: {
//     marginHorizontal: 10,
//   },
//   selectedIcon: {
//     marginHorizontal: 10,
//     backgroundColor: "lightblue",
//     padding: 10,
//     borderRadius: 20,
//   },
// });

// export default GenderSelection;
