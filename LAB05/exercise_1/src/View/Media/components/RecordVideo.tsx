import { View, StyleSheet, Text, TouchableOpacity, Alert } from "react-native";
import React, { useState, useRef } from "react";
import { CameraView, CameraType, useCameraPermissions } from "expo-camera";
import * as FileSystem from "expo-file-system";
import { AntDesign } from "@expo/vector-icons";
import { useSetRecoilState } from "recoil";
import { listImageLibraryState } from "../../../store/atom";
import { schedulePushNotification } from "../../../../src/utils/Helpers";

const RecordVideo = () => {
  const [facing, setFacing] = useState<CameraType>("back");
  const [isRecording, setIsRecording] = useState(false);
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef<CameraView | null>(null);
  const setListImage = useSetRecoilState(listImageLibraryState);

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>
          We need your permission to access the camera and microphone.
        </Text>
        <TouchableOpacity
          style={styles.permissionButton}
          onPress={requestPermission}
        >
          <Text style={styles.permissionButtonText}>Grant Permission</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const toggleCameraFacing = () => {
    setFacing((current) => (current === "back" ? "front" : "back"));
  };

  const recordVideo = async () => {
    if (!cameraRef.current) return;

    if (isRecording) {
      try {
        await cameraRef.current.stopRecording();
        setIsRecording(false);
      } catch (error) {
        console.error("Error stopping recording:", error);
        Alert.alert("Error", "An error occurred while stopping the recording.");
      }
    } else {
      setIsRecording(true);
      try {
        const video = await cameraRef.current.recordAsync({
          maxDuration: 60,
          quality: "720p",
        });

        console.log("Video recorded:", video.uri);

        // Save video to the 'videos' directory
        const destinationUri = `${FileSystem.documentDirectory}videos/`;
        await FileSystem.makeDirectoryAsync(destinationUri, { intermediates: true });

        const savedVideoUri = `${destinationUri}${Date.now()}.mp4`;
        await FileSystem.moveAsync({
          from: video.uri,
          to: savedVideoUri,
        });

        // Notify the user
        await schedulePushNotification("Video added successfully!", "The video has been added to your media library.");

        Alert.alert("Video Saved", `Saved to ${savedVideoUri}`);

        // Update the gallery state
        setListImage((prevState) => ({
          ...prevState,
          data: [...prevState.data, { id: savedVideoUri, uri: savedVideoUri }],
        }));
      } catch (error) {
        console.error("Error recording video:", error);
        Alert.alert("Error", "An error occurred while recording the video.");
      } finally {
        setIsRecording(false);
      }
    }
  };

  return (
    <View style={styles.container}>
      <CameraView
        ref={cameraRef}
        style={styles.camera}
        facing={facing}
        mode="video"
      >
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
            <Text style={styles.text}>Flip Camera</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.recordButton} onPress={recordVideo}>
            <AntDesign
              name="camerao"
              size={34}
              color={isRecording ? "red" : "white"}
            />
          </TouchableOpacity>
        </View>
      </CameraView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#EDEDED",
  },
  message: {
    textAlign: "center",
    paddingBottom: 10,
    fontSize: 16,
  },
  permissionButton: {
    alignItems: "center",
    padding: 10,
    backgroundColor: "#007BFF",
    borderRadius: 5,
  },
  permissionButtonText: {
    color: "#FFF",
    fontWeight: "bold",
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end",
    paddingBottom: 20,
  },
  button: {
    alignItems: "center",
    padding: 10,
    backgroundColor: "#007BFF",
    borderRadius: 5,
  },
  text: {
    fontSize: 16,
    color: "white",
  },
  recordButton: {
    alignItems: "center",
    padding: 10,
    backgroundColor: "transparent",
  },
});

export default RecordVideo;
