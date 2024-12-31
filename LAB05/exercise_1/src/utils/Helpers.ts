import * as FileSystem from "expo-file-system";
import * as ImagePicker from "expo-image-picker";
import * as Notifications from "expo-notifications";
import axios from "axios";

const imageDirectory = FileSystem.documentDirectory + "IE307_LAB_5/";

export const ensureDirectoryExist = async () => {
  try {
    const directoryInfo = await FileSystem.getInfoAsync(imageDirectory);
    if (!directoryInfo.exists) {
      await FileSystem.makeDirectoryAsync(imageDirectory, { intermediates: true });
      console.log("Directory created:", imageDirectory);
    }
  } catch (error) {
    console.error("Error ensuring directory exists:", error);
  }
};

export const getReverseGeoCode = async (latlng: string): Promise<any> => {
  const url = `https://rsapi.goong.io/geocode`;
  try {
    const options = {
      method: "GET",
      url: url,
      params: {
        latlng: latlng,
        api_key: process.env.EXPO_PUBLIC_GOONGMAP,
      },
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error("Error fetching reverse geocode:", error);
    return null;
  }
};


export const saveImage = async (uri: string) => {
  try {
    await ensureDirectoryExist();
    const fileName = new Date().getTime() + ".jpg";
    const destination = imageDirectory + fileName;
    await FileSystem.copyAsync({ from: uri, to: destination });
    console.log("Image saved at:", destination);
    return destination;
  } catch (error) {
    console.error("Error saving image:", error);
    throw error;
  }
};

export const getImageInDevice = async (useLibrary: boolean) => {
  try {
    let result: ImagePicker.ImagePickerResult;
    const option: ImagePicker.ImagePickerOptions = {
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [5, 3],
      quality: 0.75,
    };
    if (useLibrary) {
      result = await ImagePicker.launchImageLibraryAsync(option);
    } else {
      const permission = await ImagePicker.requestCameraPermissionsAsync();
      if (!permission.granted) {
        throw new Error("Camera permissions not granted");
      }
      result = await ImagePicker.launchCameraAsync(option);
    }
    return result;
  } catch (error) {
    console.error("Error accessing image:", error);
    throw error;
  }
};

export const schedulePushNotification = async (title: string, body: string) => {
  try {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      console.warn("Failed to get push token for push notification!");
      return;
    }
    Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: true,
      }),
    });
    await Notifications.scheduleNotificationAsync({
      content: { title: title, body: body, data: { data: "goes here" } },
      trigger: null,
    });
    console.log("Notification scheduled:", title);
  } catch (error) {
    console.error("Error scheduling notification:", error);
  }
};
