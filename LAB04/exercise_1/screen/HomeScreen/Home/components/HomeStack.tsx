import React from "react";
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  Text,
  View,
  StyleSheet,
  ImageBackground,
} from "react-native";
import HotDetailComponent from "./HotDetailComponent";
import NewArrivalsComponent from "./NewArivalsComponent";
import { useRecoilValue } from "recoil";
import { postListState } from "../store/atom";

const HomeStack = () => {
  const { state } = useRecoilValue(postListState);
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView>
        {state === "loading" && (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size={"large"} />
          </View>
        )}
        {state === "hasValue" && (
          <>
            <View style={styles.mainContainer}>
              <View style={styles.headerContainer}>
                <Text style={styles.headerText}>
                  Shop for quality, Shop for style
                </Text>
                <ImageBackground
                  source={{ uri: "https://img.freepik.com/free-vector/winter-season-sale-business-landing-page-template_23-2149948625.jpg" }}
                  style={styles.banner}
                />
              </View>
            </View>
            <HotDetailComponent />
            <NewArrivalsComponent />
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  mainContainer: {
    flex: 1,
  },
  headerContainer: {
    justifyContent: "center",
    width: "100%",
    paddingHorizontal: 16,
  },
  headerText: {
    paddingVertical: 8,
    fontSize: 18,
    fontStyle: "italic",
    fontWeight: "bold",
    color: "#B91C1C", 
  },
  banner: {
    width: "100%",
    height: 112,
  },
});

export default HomeStack;
