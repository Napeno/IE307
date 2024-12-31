import { RouteProp, useRoute } from "@react-navigation/native";
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { HomeStackParamList } from "../../../types";
import { useRecoilValue } from "recoil";
import { AntDesign } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import { postListState } from "../../Home/store/atom";

const DetailPostStack: React.FC = () => {
  const route = useRoute<RouteProp<HomeStackParamList, "DetailPost">>();
  console.log(route.params.post_id);
  const posts = useRecoilValue(postListState).contents;

  return (
    <ScrollView>
      {posts.map((item, index) => {
        if (item.id === route.params.post_id)
          return (
            <View key={index} style={styles.container}>
              <View style={styles.imageContainer}>
                <Image source={{ uri: item.image }} style={styles.image} />
              </View>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
              <Text style={styles.price}>Price: ${item.price}</Text>
              <Text style={styles.rating}>
                Rating: {item.rating.rate} <AntDesign name="star" color={"#EEC759"} size={16} /> ({item.rating.count} reviews)
              </Text>
            </View>
          );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  imageContainer: {
    width: "100%",
    aspectRatio: 1,
    backgroundColor: "#D1D5DB",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000000",
    marginTop: 8,
  },
  description: {
    fontSize: 16,
    marginTop: 8,
    color: "#4B5563", 
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000000",
    marginTop: 8,
  },
  rating: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000000",
    marginTop: 8,
    flexDirection: "row",
    alignItems: "center",
  },
});

export default DetailPostStack;
