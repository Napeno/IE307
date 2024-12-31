import { StackNavigationProp, createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { MediaStackParamList } from "../../type";
import MyGallery from "./components/MyGallery";
import RecordVideo from "./components/RecordVideo";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Stack = createStackNavigator<MediaStackParamList>();

const MediaBottomTab = () => {
  const navigation = useNavigation<
    StackNavigationProp<MediaStackParamList, "MainMedia">
  >();

  return (
    <Stack.Navigator initialRouteName="MainMedia">
      <Stack.Screen
        options={{
          headerTitle: "My Gallery",
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("RecordVideo")}
              style={styles.headerRightButton}
            >
              <AntDesign name="videocamera" size={26} />
            </TouchableOpacity>
          ),
        }}
        name="MainMedia"
        component={MyGallery}
      />
      <Stack.Screen
        name="RecordVideo"
        component={RecordVideo}
        options={{ headerTitle: "Record Video" }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  headerRightButton: {
    paddingRight: 10,
  },
});

export default MediaBottomTab;
