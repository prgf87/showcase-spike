import * as ImagePicker from "expo-image-picker";

export const pickImageAsync = async () => {
  let result = await ImagePicker.launchImageLibraryAsync({
    allowsEditing: true,
    quality: 1,
  });

  if (!result.canceled) {
    return { image: result.assets[0] };
  } else {
    alert("You did not select any image.");
  }
};
