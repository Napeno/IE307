import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { useRecoilValue } from "recoil";
import { postListState } from "../store/atom";
import ItemDetailComponent from "./ItemDetailComponent";

const HotDetailComponent: React.FC = () => {
  const posts = useRecoilValue(postListState);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hot detail</Text>
      <View style={styles.postContainer}>
        {posts.contents.map((post, index) => {
          if (index % 2 === 0) {
            return <ItemDetailComponent key={index} post={post} />;
          }
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 16,
  },
  title: {
    paddingVertical: 12,
    fontSize: 24,
    fontWeight: "bold",
    color: "#E11D48", 
  },
  postContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});

export default HotDetailComponent;