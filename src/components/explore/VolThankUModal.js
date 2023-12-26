import {
  StyleSheet,
  Pressable,
  View,
  Modal,
  ActivityIndicator,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";
import {
  AntDesign,
  MaterialCommunityIcons,
  Octicons,
} from "@expo/vector-icons";
import { colors } from "../../config/theme";
import placeholder from "../../../assets/profile/profile.jpg";

const VolThankUModal = ({ showModal, onBackPress, isLoading = false }) => {
  // console.log("IM HERE");
  return (
    <View>
      {/* <Image
            source={uri ? { uri } : placeholder}
            style={{
              borderRadius: 90,
              width: 160,
              height: 160,
              borderColor: colors.SanadBgGrey,
              borderWidth: 5,
              resizeMode: "contain",
              backgroundColor: colors.SanadWhite,
            }}
          /> */}

      <Modal animationType="slide" visible={showModal} transparent={true}>
        <Pressable style={styles.container} onPress={onBackPress}>
          {isLoading && (
            <ActivityIndicator size={70} color={colors.SanadBlue1} />
          )}

          {!isLoading && (
            <View
              style={[styles.modalView, { backgroundColor: colors.SanadWhite }]}
            >
              <Text
                style={{
                  marginBottom: 10,
                  fontSize: 28,
                  fontWeight: "700",
                  color: colors.SanadRed,
                }}
              >
                Thank You!
              </Text>

              <Text
                style={{
                  marginBottom: 10,
                  fontSize: 15,
                  fontWeight: "700",
                  color: colors.SanadBlue1,
                  textAlign: "center",
                }}
              >
                for your participation, we will get back to you shortly!
              </Text>
              <View style={{ height: 50 }}>
                <Image
                  style={{ width: 100, height: 100, resizeMode: "contain" }}
                  source={require("../../../assets/explore/smiling.png")}
                />
              </View>
            </View>
          )}
        </Pressable>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  modalView: {
    height: 230,
    borderRadius: 15,
    padding: 20,
    alignItems: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    width: "100%",
  },
  decisionRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    paddingTop: 15,
  },
  optionBtn: {
    width: 100,
    backgroundColor: colors.SanadBgGrey,
    borderRadius: 15,
    padding: 10,
    paddingHorizontal: 15,
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
});

export default VolThankUModal;
