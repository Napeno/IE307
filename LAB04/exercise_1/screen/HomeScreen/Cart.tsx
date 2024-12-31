import React from "react";
import {
	SafeAreaView,
	View,
	Text,
	Image,
	Alert,
	ActivityIndicator,
	StyleSheet,	TouchableOpacity,
	ScrollView
} from "react-native";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { cartState } from "../../store/atom";
import { AntDesign } from "@expo/vector-icons";
import { postListState } from "./Home/store/atom";
import { useNavigation } from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { HomeTabParamsList } from "../types";

interface IItemCart {
	productId: number;
	quantity: number;
}
const ItemCart: React.FC<IItemCart> = (props) => {
	const { productId, quantity } = props;
	const posts = useRecoilValue(postListState);
	const setCartList = useSetRecoilState(cartState);
	const post = React.useRef<any>(
		posts.contents.find((item) => item.id === productId)
	);
	const alert = () =>
		Alert.alert("Are you sure you want to delete this product", undefined, [
			{
				text: "Yes",
				onPress: () => {
					setCartList((preState) => ({
						...preState,
						products: preState.products.filter(
							(item) => item.productId !== productId
						),
					}));
				},
			},
			{ text: "No", style: "cancel" },
		]);
	return (
		<View style={styles.cartItem}>
			<Text>{post?.current?.title}</Text>
			<View style={styles.cartRow}>
				<View style={styles.imageContainer}>
					<Image
						source={{ uri: post?.current.image }}
						style={styles.image}
					/>
				</View>

				<View style={styles.quantityContainer}>
					<Text style={styles.price}>${post?.current.price}</Text>
					<View style={styles.quantityRow}>
						<TouchableOpacity
							onPress={() => {
							setCartList((preState) => ({
								...preState,
								products: preState.products.map((item) => {
									if (item.productId === productId)
										return { productId, quantity: item.quantity - 1 };
									return item;
								}),
							}));
						}}>
							<AntDesign name="minus" size={16} />
						</TouchableOpacity>
						<Text style={styles.quantity}>{quantity}</Text>
						<TouchableOpacity
							onPress={() => {
							setCartList((preState) => ({
								...preState,
								products: preState.products.map((item) => {
									if (item.productId === productId)
										return { productId, quantity: item.quantity + 1 };
									return item;
								}),
							}));
						}}>
							<AntDesign name="plus" size={16} />
						</TouchableOpacity>
					</View>
				</View>
				<View>
					<Text>Total: ${(post?.current.price || 0) * quantity}</Text>
				</View>
				<TouchableOpacity onPress={alert}>
					<AntDesign name="close" size={24} color={"red"} />
				</TouchableOpacity>
			</View>
		</View>
	);
};
export const Cart = () => {
	const navigate =
		useNavigation<BottomTabNavigationProp<HomeTabParamsList, "Cart">>();
	const cart = useRecoilValue(cartState);
	if (!cart.id) return null;
	return (
		<ScrollView>
			<SafeAreaView>
				{cart.state === "loading" && (
					<View style={styles.loadingContainer}>
						<ActivityIndicator size={"large"} />
					</View>
				)}
				{cart.products.length > 0 && cart.state === "hasValue" ? (
					<View style={styles.cartList}>
						{cart.products.map((item) => {
							return (
								<ItemCart
									productId={item.productId}
									quantity={item.quantity}
									key={item.productId}
								/>
							);
						})}
					</View>
				) : (
					<View style={styles.emptyCartContainer}>
						<Text>You have no products in your cart</Text>
						<TouchableOpacity
							onPress={() => navigate.navigate("Home", { screen: "HomeStack" })}
							style={styles.shopButton}>
							<Text>SHOPPING NOW!</Text>
						</TouchableOpacity>
					</View>
				)}
			</SafeAreaView>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	cartItem: {
		width: "100%",
		borderRadius: 8,
		paddingHorizontal: 8,
		marginTop: 16,
		paddingVertical: 12,
		borderWidth: 1,
		borderColor: "#9CA3AF", // Tailwind class border-gray-500
	},
	cartRow: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	imageContainer: {
		width: 48,
		height: 48,
		backgroundColor: "#D1D5DB", // Tailwind class bg-gray-400
	},
	image: {
		width: "100%",
		height: "100%",
		resizeMode: "cover",
	},
	quantityContainer: {
		alignItems: "center",
		justifyContent: "center",
	},
	price: {
		fontSize: 18,
		fontWeight: "bold",
	},
	quantityRow: {
		flexDirection: "row",
		alignItems: "center",
	},
	quantity: {
		fontSize: 18,
		fontWeight: "bold",
	},
	loadingContainer: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		width: "100%",
		height: "100%",
	},
	cartList: {
		alignItems: "center",
		justifyContent: "flex-start",
		height: "100%",
		paddingHorizontal: 16,
	},
	emptyCartContainer: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		height: "100%",
	},
	shopButton: {
		padding: 8,
		backgroundColor: "#3B82F6", 
	},
});
