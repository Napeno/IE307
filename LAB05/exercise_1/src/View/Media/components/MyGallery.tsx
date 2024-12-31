import { View, StyleSheet, ScrollView, Text } from "react-native";
import React from "react";
import { useRecoilValue } from "recoil";
import { listImageLibraryState } from "../../../store/atom";
import { Video } from "expo-av";

const MyGallery = () => {
  const listImage = useRecoilValue(listImageLibraryState);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.gallery}>
        {listImage.data && listImage.data.length > 0 ? (
          listImage.data.map((item) => {
            console.log("item", item);
            return (
              <View key={item.id} style={styles.videoWrapper}>
                <Video
                  source={{ uri: item.uri }}
                  style={styles.video}
                  useNativeControls
                  resizeMode="contain"
                />
              </View>
            );
          })
        ) : (
          <Text style={styles.noVideosText}>No videos available</Text>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  gallery: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 5,
  },
  videoWrapper: {
    width: "48%",
    aspectRatio: 1,
    marginBottom: 10,
  },
  video: {
    width: "100%",
    height: "100%",
    borderRadius: 5,
  },
  noVideosText: {
    color: "#FFF",
    textAlign: "center",
    marginTop: 20,
    fontSize: 16,
  },
});

export default MyGallery;
