import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Pressable,
  Clipboard,
  Alert,
} from "react-native";
import React, { useContext, useState } from "react";
import { colors, fonts } from "../../config/theme";
import {
  MaterialCommunityIcons,
  Ionicons,
  Entypo,
  AntDesign,
} from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
// import Clipboard from "@react-native-community/clipboard";

import DonateUploadModal from "../../components/profile/DonateUploadModal";
import { saveSecurely, fetchSecurely } from "../../utils/storage";
import { printToFileAsync } from "expo-print";
import * as Sharing from "expo-sharing";
import { useNavigation } from "@react-navigation/native";
import { uploadImages } from "../../apis/donation";
import { WEBSITE_URL } from "../../apis";
import UserContext from "../../../context/UserContext";
import ShareDonateModal from "../../components/donation/ShareDonateModal";
import { useEffect } from "react";

const Album = () => {
  const navigation = useNavigation();
  const { user, setUser } = useContext(UserContext);
  const [doneModalVisible, setDoneModalVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(null);
  const [isRemovalMode, setIsRemovalMode] = useState(false);
  const [categoryImages, setCategoryImages] = useState({
    Furniture: [],
    Devices: [],
    Electronics: [],
    Clothes: [],
  });

  const handleOpenDoneModal = () => {
    setDoneModalVisible(true);
  };

  const onGalleryPress = async () => {
    if (!currentCategory) {
      console.error("No category selected");
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
      quality: 1,
    });

    if (!result.canceled) {
      if (result.assets.length > 12) {
        alert("You can only select up to 12 images.");
        return;
      }

      const newImages = result.assets.map((asset) => ({
        image: asset.uri,
        category: currentCategory,
      }));
      setCategoryImages((prevImages) => {
        const updatedImages = { ...prevImages };
        updatedImages[currentCategory] = [
          ...updatedImages[currentCategory],
          ...newImages,
        ].slice(0, 12); // adjust this logic based on your requirements
        return updatedImages;
      });
    }
  };

  const handleImagePicked = async (pickedImageUri, category) => {
    await saveImage(pickedImageUri, category);
  };

  const handleImageRemoved = async (removedImageUri, category) => {
    await saveImage(null, category, removedImageUri);
  };

  const uploadImage = async (mode, category) => {
    try {
      let result = {};
      // console.log("jkhsjksh");
      if (mode === "gallery") {
        await ImagePicker.requestMediaLibraryPermissionsAsync();
        result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [1, 1],
          quality: 1,
        });
      } else {
        await ImagePicker.requestCameraPermissionsAsync();
        result = await ImagePicker.launchCameraAsync({
          cameraType: ImagePicker.CameraType.front,
          allowsEditing: true,
          aspect: [1, 1],
          quality: 1,
        });
      }

      if (!result.canceled) {
        const newImage = { image: result.assets[0].uri, category };
        handleImagePicked(newImage, category);
        console.log(newImage);
        // handleImagePicked(newImage, category);
        setCategoryImages((prevImages) => {
          // Create a copy of the current state
          const updatedImages = { ...prevImages };
          // Update only the specified category
          updatedImages[category] = [
            ...updatedImages[category],
            newImage,
          ].slice(0, 30);
          return updatedImages;
        });
      }
    } catch (error) {
      alert("Error uploading image: " + error.message);
      setModalVisible(false);
    }
  };

  const handleUpload = async () => {
    try {
      const allImages = [].concat(...Object.values(categoryImages));
      console.log(categoryImages);
      const response = await uploadImages(allImages);
      console.log("Images uploaded successfully:", response);
    } catch (error) {
      console.error("Error uploading images:", error);
    }
  };

  const removeImage = async (removeUri, category) => {
    try {
      handleImageRemoved(removeUri, category);
      console.log("Removing image from category:", category);
      setCategoryImages((prevImages) => {
        const updatedImages = prevImages[category].filter(
          (imageUri) => imageUri !== removeUri
        );
        const newState = { ...prevImages, [category]: updatedImages };
        console.log("New state after removal:", newState);
        return newState;
      });
    } catch (error) {
      console.error("Error in removeImage:", error);
      alert("Error while removing image");
    }
  };
  // TOGGLE REMOVE IMAGES
  const toggleRemovalMode = () => {
    setIsRemovalMode(!isRemovalMode);
  };

  //i might erase this part
  useEffect(() => {
    const loadImages = async () => {
      try {
        const storedImagesString = await fetchSecurely("categoryImages");
        if (storedImagesString) {
          const storedImages = JSON.parse(storedImagesString);
          setCategoryImages(storedImages);
        }
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    loadImages();
  }, []);

  const saveImage = async (uri, category, removeUri = null) => {
    try {
      if (uri) {
        const localUri = await downloadImage(uri);
        const updatedImages = [...categoryImages[category], localUri];
        const newCategoryImages = {
          ...categoryImages,
          [category]: updatedImages,
        };
        setCategoryImages(newCategoryImages);
        await saveSecurely("categoryImages", JSON.stringify(newCategoryImages));
      } else if (removeUri) {
        const updatedImages = categoryImages[category].filter(
          (imageUri) => imageUri !== removeUri
        );
        const newCategoryImages = {
          ...categoryImages,
          [category]: updatedImages,
        };
        setCategoryImages(newCategoryImages);
        await saveSecurely("categoryImages", JSON.stringify(newCategoryImages));
      }
    } catch (error) {
      console.error("Error in saveImage:", error);
      alert("Error while saving image");
    }
  }; //end

  // const imageToBase64 = async (uri) => {
  //   const response = await fetch(uri);
  //   const blob = await response.blob();
  //   return new Promise((resolve, reject) => {
  //     const reader = new FileReader();
  //     reader.onloadend = () => resolve(reader.result);
  //     reader.onerror = reject;
  //     reader.readAsDataURL(blob);
  //   });
  // };

  const imageToBase64 = async (uri) => {
    try {
      const response = await fetch(uri);
      const blob = await response.blob();

      return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = () => {
          const base64 = reader.result.split(",")[1]; // Extract base64 data part
          resolve(base64);
        };

        reader.onerror = (error) => {
          reject(error);
        };

        reader.readAsDataURL(blob);
      });
    } catch (error) {
      console.error(`Error converting image to Base64: ${error}`);
      return ""; // Handle the error gracefully
    }
  };

  // const createCategoryPage = async (categoryName, imageUris) => {
  //   if (!Array.isArray(imageUris)) {
  //     console.error(`Invalid image URIs for category ${categoryName}`);
  //     return "";
  //   }
  //   const base64Images = await Promise.all(
  //     imageUris.map((uri) => imageToBase64(uri))
  //   );

  //   const imagesHtml = base64Images
  //     .slice(0, 12)
  //     .map(
  //       (base64, index) => `<div class="image-container">
  //       <img src="${base64}" alt="Image ${index + 1}" class="image" />
  //       <div class="image-number"><h4 class="text-number">${
  //         index + 1
  //       }</h4></div>
  //     </div>`
  //     )
  //     .join("");

  //   return `
  //     <div class="page">
  //     <h2 style="color: #F5574E;">${categoryName}</h2>
  //       <div class="grid-container">
  //         ${imagesHtml}
  //       </div>
  //     </div>
  //   `;
  // };

  const createCategoryPage = async (categoryName, imageUris) => {
    try {
      if (!Array.isArray(imageUris)) {
        console.error(`Invalid image URIs for category ${categoryName}`);
        return "";
      }
      const base64Images = await Promise.all(
        imageUris.map(async (uri) => {
          try {
            const base64 = await imageToBase64(uri);
            return base64;
          } catch (error) {
            console.error(`Error converting image to base64: ${error}`);
            return ""; // Handle the error gracefully
          }
        })
      );

      const imagesHtml = base64Images
        .slice(0, 12)
        .map(
          (base64, index) => `<div class="image-container">
          <img src="data:image/jpeg;base64,${base64}" alt="Image ${
            index + 1
          }" class="image" />
          <div class="image-number"><h4 class="text-number">${
            index + 1
          }</h4></div>
        </div>`
        )
        .join("");

      return `
        <div class="page">
          <h2 style="color: #F5574E;">${categoryName}</h2>
          <div class="grid-container">
            ${imagesHtml}
          </div>
        </div>
      `;
    } catch (error) {
      console.error(`Error creating category page: ${error}`);
      return ""; // Handle the error gracefully
    }
  };

  const createAndSharePDF = async (categories) => {
    let pagesHtml = "";
    for (const [categoryName, imageUris] of Object.entries(categories)) {
      pagesHtml += await createCategoryPage(categoryName, imageUris);
    }

    const html = `
    <html>
    <head>
      <style>
        body { margin: 0; padding: 0; }
        .page { width: 210mm; height: 297mm; page-break-after: always; }
        .grid-container { display: grid; grid-template-columns: repeat(3, 1fr); grid-template-rows: repeat(4, 1fr); grid-gap: 5mm; }
        .image-container {
          position: relative;
          padding-top: 100%; /* This ensures a square aspect ratio */
          overflow: hidden;
        }
        .image-number {
          position: absolute;
          top: 5px;
          right: 5px;
          background-color: red;
          color: white;
          border-radius: 50%;
          padding: 5px;
          font-size: 12px;
          width: 20px;
          height: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .text-number{
          color: #F5574E;
          font-size: 16px;
        }
        .image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        h2 { text-align: center; }
      </style>
    </head>
    <body>
      ${pagesHtml}
    </body>
  </html>
`;

    const { uri } = await printToFileAsync({ html });
    await Sharing.shareAsync(uri);
  };

  // const handleSharePress = async () => {
  //   await createAndSharePDF(categoryImages);
  // };
  const handleSharePdf = async () => {
    await createAndSharePDF(categoryImages);
  };
  const handleShareLink = () => {
    Clipboard.setString(`${WEBSITE_URL}/image-gallery/${user.id}`);
    Alert.alert("Link Copied", "The link has been copied to the clipboard.");
  };

  return (
    <View
      style={{
        flex: 1,
        width: "100%",
        backgroundColor: colors.SanadBgGrey,
        alignItems: "center",
      }}
    >
      <View
        style={{
          height: "15%",
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          paddingTop: 30,
          backgroundColor: colors.SanadBlue1,
          borderEndEndRadius: 30,
          borderEndStartRadius: 30,
          shadowColor: "black",
          shadowOffset: { height: 8, width: 4 },
          shadowRadius: 8,
          shadowOpacity: 0.2,
        }}
      >
        <Pressable
          onPress={() => {
            navigation.navigate("donate");
          }}
        >
          <Text
            style={{
              color: colors.SanadWhite,
              fontSize: 32,
              fontFamily: "Urbanist_600SemiBold",
            }}
          >
            Donate
          </Text>
        </Pressable>
        <Image
          style={{ width: "30%", resizeMode: "contain" }}
          source={require("../../../assets/onlylogo.png")}
        />
      </View>
      <View style={styles.container}>
        <View style={styles.container_title}>
          <Text style={styles.container_title_text}>Item Categories</Text>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
            <TouchableOpacity
              onPress={() => {
                handleOpenDoneModal();
                // handleUpload();
              }}
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                gap: 10,
                backgroundColor: colors.SanadRed,
                paddingTop: 8,
                paddingBottom: 8,
                paddingHorizontal: 20,
                borderRadius: 40,
              }}
            >
              <Text
                style={{
                  fontWeight: fonts.semibold,
                  fontSize: 16,
                  color: colors.SanadWhite,
                }}
              >
                Share
              </Text>
              {/* <Entypo name="export" size={20} color="white" /> */}
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleRemovalMode}>
              <Ionicons name="ios-trash" size={24} color="#9e9e9e" />
            </TouchableOpacity>
            {/* <TouchableOpacity onPress={handleSharePdf}>
              <AntDesign name="pdffile1" size={20} color="red" />
            </TouchableOpacity> */}
          </View>
        </View>
        <ScrollView
          style={{ height: "75%", width: "88%", flexDirection: "column" }}
        >
          <View style={styles.category_photos_container}>
            <View style={styles.category_container}>
              <View style={styles.iconAndName}>
                <MaterialCommunityIcons
                  name="sofa-single"
                  size={24}
                  color="#F5574E"
                />
                <Text style={styles.category_name}>Furniture</Text>
              </View>
              <View style={styles.photo_counter_container}>
                <Text>{categoryImages.Furniture.length}</Text>
                <Text>|</Text>
                <Text>12</Text>
              </View>
            </View>
            {categoryImages.Furniture.map((imageUri, index) => (
              <View key={index} style={styles.imageContainer}>
                <Image
                  style={styles.imageStyle}
                  source={{ uri: imageUri.image }}
                />
                <View style={styles.imageNumber}>
                  <Text style={styles.number_text}>{index + 1}</Text>
                </View>
                {isRemovalMode && (
                  <TouchableOpacity
                    style={styles.removeButton}
                    onPress={() => removeImage(imageUri, "Furniture")}
                  >
                    <Text style={styles.removeButtonText}>x</Text>
                  </TouchableOpacity>
                )}
              </View>
            ))}
            {categoryImages.Furniture.length < 12 && (
              <TouchableOpacity
                style={styles.photos_container_wrap}
                onPress={() => {
                  setCurrentCategory("Furniture");
                  setModalVisible(true);
                }}
              >
                <View style={styles.add_button}>
                  <Text style={{ fontSize: 30 }}>+</Text>
                </View>
              </TouchableOpacity>
            )}
          </View>

          <View style={styles.category_photos_container}>
            <View style={styles.category_container}>
              <View style={styles.iconAndName}>
                <MaterialCommunityIcons
                  name="fridge"
                  size={24}
                  color="#F5574E"
                />
                <Text style={styles.category_name}>Home Devices</Text>
              </View>
              <View style={styles.photo_counter_container}>
                <Text>{categoryImages.Devices.length}</Text>
                <Text>|</Text>
                <Text>12</Text>
              </View>
            </View>
            {categoryImages.Devices.map((imageUri, index) => (
              <View key={index} style={styles.imageContainer}>
                <Image
                  style={styles.imageStyle}
                  source={{ uri: imageUri.image }}
                />
                <View style={styles.imageNumber}>
                  <Text style={styles.number_text}>{index + 1}</Text>
                </View>
                {isRemovalMode && (
                  <TouchableOpacity
                    style={styles.removeButton}
                    onPress={() => removeImage(imageUri, "Devices")}
                  >
                    <Text style={styles.removeButtonText}>X</Text>
                  </TouchableOpacity>
                )}
              </View>
            ))}
            {categoryImages.Devices.length < 12 && (
              <TouchableOpacity
                style={styles.photos_container_wrap}
                onPress={() => {
                  setCurrentCategory("Devices");
                  setModalVisible(true);
                }}
              >
                <View style={styles.add_button}>
                  <Text style={{ fontSize: 30 }}>+</Text>
                </View>
              </TouchableOpacity>
            )}
          </View>

          <View style={styles.category_photos_container}>
            <View style={styles.category_container}>
              <View style={styles.iconAndName}>
                <MaterialCommunityIcons
                  name="tablet-cellphone"
                  size={24}
                  color="#F5574E"
                />
                <Text style={styles.category_name}>Electronics</Text>
              </View>
              <View style={styles.photo_counter_container}>
                <Text>{categoryImages.Electronics.length}</Text>
                <Text>|</Text>
                <Text>12</Text>
              </View>
            </View>
            {categoryImages.Electronics.map((imageUri, index) => (
              <View key={index} style={styles.imageContainer}>
                <Image
                  style={styles.imageStyle}
                  source={{ uri: imageUri.image }}
                />
                <View style={styles.imageNumber}>
                  <Text style={styles.number_text}>{index + 1}</Text>
                </View>
                {isRemovalMode && (
                  <TouchableOpacity
                    style={styles.removeButton}
                    onPress={() => removeImage(imageUri, "Electronics")}
                  >
                    <Text style={styles.removeButtonText}>X</Text>
                  </TouchableOpacity>
                )}
              </View>
            ))}
            {categoryImages.Electronics.length < 12 && (
              <TouchableOpacity
                style={styles.photos_container_wrap}
                onPress={() => {
                  setCurrentCategory("Electronics");
                  setModalVisible(true);
                }}
              >
                <View style={styles.add_button}>
                  <Text style={{ fontSize: 30 }}>+</Text>
                </View>
              </TouchableOpacity>
            )}
          </View>

          <View style={styles.category_photos_container}>
            <View style={styles.category_container}>
              <View style={styles.iconAndName}>
                <Ionicons name="ios-shirt" size={24} color="#F5574E" />
                <Text style={styles.category_name}>Clothes</Text>
              </View>
              <View style={styles.photo_counter_container}>
                <Text>{categoryImages.Clothes.length}</Text>
                <Text>|</Text>
                <Text>12</Text>
              </View>
            </View>
            {categoryImages.Clothes.map((imageUri, index) => (
              <View key={index} style={styles.imageContainer}>
                <Image
                  style={styles.imageStyle}
                  source={{ uri: imageUri.image }}
                />
                <View style={styles.imageNumber}>
                  <Text style={styles.number_text}>{index + 1}</Text>
                </View>
                {isRemovalMode && (
                  <TouchableOpacity
                    style={styles.removeButton}
                    onPress={() => removeImage(imageUri, "Clothes")}
                  >
                    <Text style={styles.removeButtonText}>X</Text>
                  </TouchableOpacity>
                )}
              </View>
            ))}
            {categoryImages.Clothes.length < 12 && (
              <TouchableOpacity
                style={styles.photos_container_wrap}
                onPress={() => {
                  setCurrentCategory("Clothes");
                  setModalVisible(true);
                }}
              >
                <View style={styles.add_button}>
                  <Text style={{ fontSize: 30 }}>+</Text>
                </View>
              </TouchableOpacity>
            )}
          </View>
          {/* <TouchableOpacity style={styles.redbutton} onPress={handleUpload}>
            <Text style={styles.button}>Send</Text>
          </TouchableOpacity> */}
        </ScrollView>
      </View>

      <DonateUploadModal
        modalVisible={modalVisible}
        currentCategory={currentCategory}
        onBackPress={() => {
          setModalVisible(false);
        }}
        onCameraPress={() => uploadImage("camera", currentCategory)}
        onGalleryPress={onGalleryPress}
        onRemovePress={() => removeImage()}
      />
      <ShareDonateModal
        handleSharePdf={handleSharePdf}
        handleUpload={handleUpload}
        handleShareLink={handleShareLink}
        doneModalVisible={doneModalVisible}
        onBackPress={() => {
          setDoneModalVisible(false);
        }}
      />
    </View>
  );
};

export default Album;

const styles = StyleSheet.create({
  container: {
    height: "75%",
    width: "100%%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 40,
  },
  container_title: {
    width: "100%",
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  container_title_text: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: fonts.semibold,
  },

  //Card of Category + Photos
  category_photos_container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  category_container: {
    width: "100%",
    height: "auto",
    backgroundColor: colors.SanadWhite,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  iconAndName: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  category_name: {
    fontWeight: fonts.semibold,
    color: colors.SanadBlue1,
  },
  photo_counter_container: {
    flexDirection: "row",
    gap: 3,
  },
  photos_container_wrap: {
    flexWrap: "wrap",
    paddingVertical: 20,
    gap: 6.5,
  },
  add_button: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.SanadWhite,
    borderRadius: 10,
  },
  category_photos_container: {
    flexDirection: "row", // Line items up in a row
    flexWrap: "wrap", // Allow items to wrap to the next line
    justifyContent: "center", // Center items (optional)
    alignItems: "center",
    gap: 6.5,
  },
  imageContainer: {
    position: "relative",
    margin: 5,
  },
  imageStyle: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  removeButton: {
    position: "absolute",
    top: 2,
    right: 2,
    backgroundColor: "rgba(105,105,105, 0.9)",
    borderRadius: 15,
    width: 22,
    height: 22,
    justifyContent: "center",
    alignItems: "center",
  },
  removeButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  imageNumber: {
    position: "absolute",
    backgroundColor: colors.SanadRed,
    borderRadius: 10,
    width: 22,
    height: 22,
    alignItems: "center",
    justifyContent: "center",
    left: 2,
    top: 2,
  },
  number_text: {
    color: colors.SanadWhite,
    fontWeight: "bold",
    fontSize: 16, // Adjust size as needed
  },

  //Done
  redbutton: {
    backgroundColor: colors.SanadRed,
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    marginVertical: 30,
  },
  button: {
    width: "100%",
    fontSize: 20,
    fontWeight: fonts.semibold,
    color: "white",
    textAlign: "center",
    fontFamily: "Urbanist_600SemiBold",
  },
});

// const downloadImage = async (imageUrl) => {
//   const fileName = imageUrl.split("/").pop(); // Extract the filename
//   const fileUri = FileSystem.documentDirectory + fileName;

//   try {
//     await FileSystem.downloadAsync(imageUrl, fileUri);
//     return fileUri;
//   } catch (error) {
//     console.error("Error downloading the image:", error);
//   }
// };

// const handleUpload = async () => {
//   try {
//     // Iterate over each category
//     for (const category of Object.keys(categoryImages)) {
//       // Get up to 12 images for the current category
//       const imagesForCategory = categoryImages[category].slice(0, 12);

//       // If there are images to upload
//       if (imagesForCategory.length > 0) {
//         console.log(`Uploading images for category: ${category}`);
//         const response = await uploadImages(imagesForCategory);
//         console.log(
//           `Images uploaded successfully for ${category}:`,
//           response
//         );
//       }
//     }
//   } catch (error) {
//     console.error("Error uploading images:", error);
//   }
// };

// const loadImages = async () => {
//   try {
//     const storedImages = await AsyncStorage.getItem("categoryImages");
//     if (storedImages !== null) {
//       setCategoryImages(JSON.parse(storedImages));
//     }
//   } catch (error) {
//     console.error("Error fetching images from AsyncStorage:", error);
//   }
// };

// const saveImagesToStorage = async (images) => {
//   try {
//     const jsonValue = JSON.stringify(images);
//     await AsyncStorage.setItem("categoryImages", jsonValue);
//   } catch (error) {
//     console.error("Error saving images to AsyncStorage:", error);
//   }
// };

// useEffect(() => {
//   const loadImages = async () => {
//     try {
//       const storedImagesString = await fetchSecurely("categoryImages");
//       if (storedImagesString) {
//         const storedImages = JSON.parse(storedImagesString);
//         setCategoryImages(storedImages);
//       }
//     } catch (error) {
//       console.error("Error fetching images:", error);
//     }
//   };

//   loadImages();
// }, []);

// const saveImage = async (uri, category, removeUri = null) => {
//   try {
//     if (uri) {
//       const localUri = await downloadImage(uri);
//       const updatedImages = [...categoryImages[category], localUri];
//       const newCategoryImages = {
//         ...categoryImages,
//         [category]: updatedImages,
//       };
//       setCategoryImages(newCategoryImages);
//       await saveSecurely("categoryImages", JSON.stringify(newCategoryImages));
//     } else if (removeUri) {
//       const updatedImages = categoryImages[category].filter(
//         (imageUri) => imageUri !== removeUri
//       );
//       const newCategoryImages = {
//         ...categoryImages,
//         [category]: updatedImages,
//       };
//       setCategoryImages(newCategoryImages);
//       await saveSecurely("categoryImages", JSON.stringify(newCategoryImages));
//     }
//   } catch (error) {
//     console.error("Error in saveImage:", error);
//     alert("Error while saving image");
//   }
// };
