import { BaseURL, instance } from ".";

export const uploadImages = async (imagesData) => {
  const formData = new FormData();

  imagesData.forEach((uri, index) => {
    const fileType = uri.split(".").pop();
    formData.append("images", {
      uri,
      name: `photo_${index}.${fileType}`,
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
