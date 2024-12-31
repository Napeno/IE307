import React from "react";
import { Text, View, Image, Alert, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { CategoriesStackParamList } from "../../../types";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useRecoilState } from "recoil";
import { cartState } from "../../../../store/atom";

interface IItemDetailComponent {
  post: {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
      rate: number;
      count: number;
    };
  };
}
const ItemDetailComponent: React.FC<IItemDetailComponent> = (props) => {
  const { post } = props;
  const [cartList, setCartList] = useRecoilState(cartState);
  const navigation =
    useNavigation<StackNavigationProp<CategoriesStackParamList, "CategoriesStack">>();
  const alert = () =>
    Alert.alert("Message", "This product is already in your cart", [
      { text: "Ok" },
    ]);
  const handleAddPostToCartList = () => {
    console.log("plus");
    if (cartList.products.find((item) => item.productId === post.id)) {
      alert();
      return;
    }
    setCartList((preState) => ({
      ...preState,
      products: [...preState.products, { productId: post.id, quantity: 1 }],
    }));
  };
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("DetailPostStack", {
              post_id: post.id,
              title: post.title,
            })
          }
        >
          <Image source={{ uri: post.image || "" }} style={styles.image} />
        </TouchableOpacity>
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{post.title}</Text>
        </View>

        <View style={styles.footerContainer}>
          <View style={styles.priceContainer}>
            <Text style={styles.price}>${post.price}</Text>
            <Text>
              {post.rating.rate}
              <AntDesign name="star" color={"#FFC436"} /> ({post.rating.count})
            </Text>
          </View>
          <View style={styles.addButtonContainer}>
            <TouchableOpacity onPress={handleAddPostToCartList}>
              <AntDesign name="pluscircle" size={32} color={"#0F2167"} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "48%",
    marginTop: 8,
    padding: 4,
    backgroundColor: "#FFFFFF",
  },
  imageContainer: {
    width: "100%",
    height: 192, // Tailwind class h-48
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  detailsContainer: {
    flex: 1,
    justifyContent: "space-between",
  },
  titleContainer: {
    width: "100%",
    paddingHorizontal: 8,
  },
  title: {
    fontSize: 14,
    lineHeight: 20,
    color: "#000000",
  },
  footerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  priceContainer: {
    flex: 1,
  },
  price: {
    fontWeight: "bold",
    color: "#E11D48", // Tailwind class text-red-600
  },
  addButtonContainer: {
    justifyContent: "center",
    alignItems: "flex-end",
    flex: 1,
  },
});

export default ItemDetailComponent;
