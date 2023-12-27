import { BaseURL, instance } from ".";

export const uploadImages = async (imagesData) => {
  const formData = new FormData();
  console.log(imagesData);
  imagesData.forEach((uri, index) => {
    const fileType = uri.image.split(".").pop();
    formData.append("images", {
      uri: uri.image,
      name: `photo_${uri.category}_${index}.${fileType}`,
      type: `image/${fileType}`,
    });
  });

  try {
    const response = await instance.post(`${BaseURL}/image-gallery`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

export const getSelectedUnselectedImages = async (userId) => {
  try {
    const response = await instance.get(`/image-gallery/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching images:", error);
    throw error;
  }
};
