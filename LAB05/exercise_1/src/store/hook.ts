import "react-native-get-random-values";
import { v4 as uuid } from "uuid";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  imageSelectedState,
  inputTitleState,
  listImageLibraryState,
  listPlaceState,
  locationState,
} from "./atom";
import { getImageInDevice, saveImage, schedulePushNotification } from "../utils/Helpers";
import * as Location from "expo-location";
import { Alert } from "react-native";
import * as SQLite from "expo-sqlite";
import React from "react";
import * as MediaLibrary from "expo-media-library";

const initializeDatabase = async (db: SQLite.Database) => {
  try {
    await db.execAsync(`
      CREATE TABLE IF NOT EXISTS Places (
        id TEXT PRIMARY KEY,
        title TEXT,
        image TEXT,
        latitude REAL,
        longitude REAL
      );
    `);
    console.log("Successfully initialized the 'Places' table.");
  } catch (error) {
    console.error("Error initializing the database:", error);
  }
};

export const useGetListPlaces = () => {
  const [listPlace, setListPlaces] = useRecoilState(listPlaceState);

  React.useEffect(() => {
    const fetchPlaces = async () => {
      const db = await SQLite.openDatabaseAsync("ie307.db");
      await initializeDatabase(db);

      try {
        const result = await db.getAllAsync("SELECT * FROM Places;");
        setListPlaces(result);
        console.log("Fetched Places:", result);
      } catch (error) {
        console.error("Error fetching Places:", error);
      }
    };

    fetchPlaces();
  }, []);

  return {
    onGetListPlaces: async () => console.log(listPlace),
  };
};

export const useAddPlaces = () => {
  const inputTitle = useRecoilValue(inputTitleState);
  const imageSelect = useRecoilValue(imageSelectedState);
  const location = useRecoilValue(locationState);
  const setListPlaces = useSetRecoilState(listPlaceState);

  const alert = (message: string) =>
    Alert.alert(message, undefined, [{ text: "OK" }]);

  const onAddPlaces = async () => {
    if (!inputTitle || !imageSelect || !location) {
      alert("Title, image, or location is empty");
      return;
    }

    try {
      const db = await SQLite.openDatabaseAsync("ie307");
      const id = uuid();

      await schedulePushNotification("Place added successfully", "The place has been added to your favorites list!");

      await db.runAsync(
        `
        INSERT INTO Places (id, title, image, latitude, longitude) 
        VALUES (?, ?, ?, ?, ?);
      `,
        id,
        inputTitle,
        imageSelect,
        location.coords.latitude,
        location.coords.longitude
      );

      setListPlaces((prevState) => [
        ...prevState,
        {
          id,
          image: imageSelect,
          title: inputTitle,
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        },
      ]);
      console.log("Place added successfully");
    } catch (error) {
      console.error("Error adding place:", error);
    }
  };

  return { onAddPlaces };
};

export const useGetListImage = () => {
  const setImageLib = useSetRecoilState(listImageLibraryState);
  const albumName = "Photos";

  const onGetListImage = async () => {
    setImageLib({ state: "loading", data: [] });

    try {
      const isMediaLibraryEnabled = await MediaLibrary.getPermissionsAsync();
      if (!isMediaLibraryEnabled.granted) {
        await MediaLibrary.requestPermissionsAsync();
      }

      const album = await MediaLibrary.getAlbumAsync(albumName);
      const photos = await MediaLibrary.getAssetsAsync({
        first: 20,
        album,
        sortBy: ["creationTime"],
        mediaType: "photo",
      });

      const data = await Promise.all(
        photos.assets.map(async (item) => ({
          id: item.id,
          uri: await saveImage(item.uri),
        }))
      );

      setImageLib({ state: "hasValue", data });
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  return { onGetListImage };
};

export const useGetImageToUp = () => {
	const setImage = useSetRecoilState(imageSelectedState)
	const onGetImageToUp = async (useLib: boolean) => {
		try {
			const url = await getImageInDevice(useLib)
			url?.assets?.[0] && url.assets[0].uri && setImage(url.assets[0].uri)
		} catch (error) {
			console.log(error)
		}
	}
	return { onGetImageToUp }
}

export const useGetLocation = () => {
  const setLocation = useSetRecoilState(locationState);

  const alert = (message: string) =>
    Alert.alert(message, undefined, [{ text: "OK" }]);

  const onGetLocation = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        alert("Permission to access location was denied");
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    } catch (error) {
      console.error("Error fetching location:", error);
    }
  };

  return { onGetLocation };
};
