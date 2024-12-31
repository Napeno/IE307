import { Entypo, FontAwesome, Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useRecoilValue } from "recoil";
import { postListState } from "../../Home/store/atom";
import { TCategories } from "../../../../utilities";
import ItemDetailComponent from "./ItemDetailComponent";

const CategoriesStack: React.FC = () => {
  const posts = useRecoilValue(postListState);
  const [choiceCategory, setChoiceCategory] = React.useState<TCategories>("all");
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.categoryRow}>
            <TouchableOpacity onPress={() => setChoiceCategory("all")}>
              <View style={styles.categoryItem}>
                <Entypo name="grid" size={42} />
                <Text
                  style={
                    choiceCategory === "all"
                      ? styles.activeCategoryText
                      : styles.categoryText
                  }
                >
                  All
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setChoiceCategory("electronics")}>
              <View style={styles.categoryItem}>
                <Ionicons name="logo-electron" size={42} />
                <Text
                  style={
                    choiceCategory === "electronics"
                      ? styles.activeCategoryText
                      : styles.categoryText
                  }
                >
                  electronics
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setChoiceCategory("jewelery")}>
              <View style={styles.categoryItem}>
                <FontAwesome name="diamond" size={42} />
                <Text
                  style={
                    choiceCategory === "jewelery"
                      ? styles.activeCategoryText
                      : styles.categoryText
                  }
                >
                  jewelery
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setChoiceCategory("men's clothing")}>
              <View style={styles.categoryItem}>
                <Ionicons name="shirt-outline" size={42} />
                <Text
                  style={
                    choiceCategory === "men's clothing"
                      ? styles.activeCategoryText
                      : styles.categoryText
                  }
                >
                  men's clothing
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.postsContainer}>
            {posts.contents.map((post, index) => {
              if (choiceCategory === "all")
                return <ItemDetailComponent key={index} post={post} />;
              if (post.category === choiceCategory)
                return <ItemDetailComponent key={index} post={post} />;
            })}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  container: {
    width: "100%",
    paddingHorizontal: 8,
  },
  categoryRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginBottom: 16,
  },
  categoryItem: {
    alignItems: "center",
    justifyContent: "center",
  },
  categoryText: {
    fontSize: 16,
    color: "#000000",
  },
  activeCategoryText: {
    fontSize: 16,
    color: "#3B82F6", // Tailwind class text-blue-400
  },
  postsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});

export default CategoriesStack;
