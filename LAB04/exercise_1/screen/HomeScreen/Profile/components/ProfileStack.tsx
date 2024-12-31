import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useRecoilValue } from "recoil";
import { userState } from "../../../../store/atom";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { ProfileStackParamList } from "../../../types";
import { AuthAction } from "../../../../store/hook";

const ProfileStack: React.FC = () => {
	const user = useRecoilValue(userState);
	const { onLogOut } = AuthAction.useLogOut();
	const navigation =
		useNavigation<StackNavigationProp<ProfileStackParamList, "ProfileStack">>();
	return (
		<View style={styles.container}>
			<View style={styles.headerContainer}>
				<View style={styles.avatar} />
				<Text style={styles.username}>{`${user.name?.firstname} ${user.name?.lastname}`}</Text>
				<TouchableOpacity onPress={() => navigation.navigate("EditProfile")}>
					<AntDesign name="form" size={24} />
				</TouchableOpacity>
			</View>

			<View style={styles.infoContainer}>
				<Text style={styles.label}>Name:</Text>
				<Text>{`${user.name?.firstname} ${user.name?.lastname}`}</Text>
			</View>

			<View style={styles.infoContainer}>
				<Text style={styles.label}>Username:</Text>
				<Text>{user.username}</Text>
			</View>

			<View style={styles.infoContainer}>
				<Text style={styles.label}>Email:</Text>
				<Text>{user.email}</Text>
			</View>

			<View style={styles.infoContainer}>
				<Text style={styles.label}>Phone:</Text>
				<Text>{user.phone}</Text>
			</View>

			<View style={styles.infoContainer}>
				<Text style={styles.label}>Address:</Text>
				<Text>{`${user.address?.number}, ${user.address?.street}, ${user.address?.city}`}</Text>
			</View>
			<TouchableOpacity onPress={onLogOut} style={styles.logoutButton}>
				<Text style={styles.logoutText}>LOG OUT</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: "100%",
		paddingHorizontal: 16,
		paddingTop: 16,
	},
	headerContainer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		marginBottom: 16,
	},
	avatar: {
		width: 64,
		height: 64,
		borderRadius: 32,
		backgroundColor: "#D1D5DB", // Tailwind class bg-gray-400
	},
	username: {
		flex: 1,
		marginLeft: 16,
		fontSize: 18,
		fontWeight: "bold",
	},
	infoContainer: {
		marginBottom: 16,
	},
	label: {
		fontSize: 16,
		fontWeight: "bold",
	},
	logoutButton: {
		alignItems: "center",
		justifyContent: "center",
		paddingVertical: 12,
		backgroundColor: "#0EA5E9", // Tailwind class bg-sky-600
		borderRadius: 8,
	},
	logoutText: {
		fontWeight: "bold",
		color: "#FFFFFF",
		fontSize: 16,
	},
});

export default ProfileStack;
