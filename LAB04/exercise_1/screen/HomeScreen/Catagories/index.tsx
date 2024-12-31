import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { CategoriesStackParamList } from "../../types";
import CategoriesStack from "./components/CategoriesStack";
import DetailPostStack from "./components/DetailPostStack";
import { useRecoilValue } from "recoil";
import { postListState } from "../Home/store/atom";
import { View, ActivityIndicator, StyleSheet } from "react-native";

const Stack = createStackNavigator<CategoriesStackParamList>();
export const Categories = () => {
  const { state } = useRecoilValue(postListState);
  return (
    <>
      {state === "loading" && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size={"large"} />
        </View>
      )}
      {state === "hasValue" && (
        <Stack.Navigator>
          <Stack.Screen name="CategoriesStack" component={CategoriesStack} />
          <Stack.Screen
            options={({ route }) => ({
              headerTitle: route.params.title,
            })}
            name="DetailPostStack"
            component={DetailPostStack}
          />
        </Stack.Navigator>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
});
