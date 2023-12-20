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

const ShareDonateModal = ({
  doneModalVisible,
  onBackPress,
  isLoading = false,
  handleShareLink,
}) => {
  console.log("IM HERE");
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

      <Modal
        animationType="slide"
        visible={doneModalVisible}
        transparent={true}
      >
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
                Share your images to any organization, family, or friends, and
                let them choose the items they want!
              </Text>

              <View style={styles.decisionRow}>
                <TouchableOpacity
                  onPress={handleShareLink}
                  style={styles.optionBtn}
                >
                  <Octicons name="link" size={30} color={colors.SanadRed} />
                  <Text
                    style={{
                      fontWeight: "500",
                      fontSize: 13,
                      color: colors.SanadBlue1,
                      textAlign: "center",
                    }}
                  >
                    Share Link
                  </Text>
                </TouchableOpacity>
                <Text
                  style={{
                    fontWeight: "500",
                    fontSize: 20,
                    color: colors.SanadBlue1,
                    textAlign: "center",
                  }}
                >
                  Or
                </Text>
                <TouchableOpacity
                  style={styles.optionBtn}
                  //   onPress={onCameraPress}
                >
                  <AntDesign
                    name="pdffile1"
                    size={30}
                    color={colors.SanadRed}
                  />
                  <Text
                    style={{
                      fontWeight: "500",
                      fontSize: 13,
                      color: colors.SanadBlue1,
                      textAlign: "center",
                    }}
                  >
                    Share PDF
                  </Text>
                </TouchableOpacity>
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
    borderRadius: 15,
    padding: 20,
    paddingBottom: 30,
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

export default ShareDonateModal;
