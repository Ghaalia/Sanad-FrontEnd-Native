import {
  StyleSheet,
  Pressable,
  View,
  Modal,
  ActivityIndicator,
  TouchableOpacity,
  Text,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "../../config/theme";

const UploadModal = ({
  modalVisible,
  onBackPress,
  onCameraPress,
  onGalleryPress,
  onRemovePress,
  isLoading = false,
}) => {
  return (
    <Modal animationType="slide" visible={modalVisible} transparent={true}>
      <Pressable style={styles.container} onPress={onBackPress}>
        {isLoading && <ActivityIndicator size={70} color={colors.SanadBlue1} />}

        {!isLoading && (
          <View
            style={[styles.modalView, { backgroundColor: colors.SanadWhite }]}
          >
            <Text
              style={{
                marginBottom: 10,
                fontSize: 15,
                fontWeight: "700",
                color: colors.SanadBlue1,
              }}
            >
              Profile Photo
            </Text>

            <View style={styles.decisionRow}>
              <TouchableOpacity
                style={styles.optionBtn}
                onPress={onCameraPress}
              >
                <MaterialCommunityIcons
                  name="camera-outline"
                  size={30}
                  color={colors.SanadRed}
                />
                <Text
                  style={{
                    fontWeight: "500",
                    fontSize: 13,
                    color: colors.SanadBlue1,
                  }}
                >
                  Camera
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.optionBtn}
                onPress={onGalleryPress}
              >
                <MaterialCommunityIcons
                  name="image-outline"
                  size={30}
                  color={colors.SanadRed}
                />
                <Text
                  style={{
                    fontWeight: "500",
                    fontSize: 13,
                    color: colors.SanadBlue1,
                  }}
                >
                  Gallery
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.optionBtn}
                onPress={onRemovePress}
              >
                <MaterialCommunityIcons
                  name="trash-can-outline"
                  size={30}
                  color={colors.SanadMedGrey}
                />
                <Text
                  style={{
                    fontWeight: "500",
                    fontSize: 13,
                    color: colors.SanadBlue1,
                  }}
                >
                  Remove
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </Pressable>
    </Modal>
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
    width: "100%",
    paddingTop: 15,
  },
  optionBtn: {
    width: 80,
    backgroundColor: colors.SanadBgGrey,
    borderRadius: 15,
    padding: 10,
    paddingHorizontal: 15,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default UploadModal;
