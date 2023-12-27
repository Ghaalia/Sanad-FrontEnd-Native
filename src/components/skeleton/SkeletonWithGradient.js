import { LinearGradient } from "expo-linear-gradient";
import { View } from "react-native";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

const SkeletonWithGradient = ({ width, height }) => {
  return (
    <LinearGradient
      colors={["#f5f5f5", "#e0e0e0", "#f5f5f5"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={{
        width: width,
        height: height,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        borderRadius: 30,
        marginBottom: 20,
      }}
    >
      <SkeletonPlaceholder>
        <View style={{ width: "100%", height: "100%" }} />
      </SkeletonPlaceholder>
    </LinearGradient>
  );
};

export default SkeletonWithGradient;
