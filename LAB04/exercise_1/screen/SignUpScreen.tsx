import React from "react";
import {
	SafeAreaView,
	TextInput,
	TouchableOpacity,
	Text,
	View,
	StyleSheet,
} from "react-native";
import { AntDesign, Feather, FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export const SignUpScreen = () => {
	const navigation = useNavigation();
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.innerContainer}>
				<View style={styles.logoContainer}>
					<FontAwesome5 name="react" size={52} color="#61dbfb" />
				</View>
				<View>
					<Text style={styles.title}>Create New Account</Text>
				</View>
				<View style={styles.formContainer}>
					<View style={styles.inputContainer}>
						<AntDesign name="user" size={24} />
						<TextInput style={styles.input} placeholder="Enter username" />
					</View>
					<View style={styles.inputContainer}>
						<Feather name="mail" size={24} />
						<TextInput style={styles.input} placeholder="Enter email" />
					</View>
					<View style={styles.inputContainer}>
						<AntDesign name="lock1" size={24} />
						<TextInput style={styles.input} placeholder="Enter password" secureTextEntry={true} />
					</View>
					<View style={styles.inputContainer}>
						<AntDesign name="lock1" size={24} />
						<TextInput style={styles.input} placeholder="Confirm password" secureTextEntry={true} />
					</View>
					<TouchableOpacity style={styles.createButton}>
						<Text style={styles.createButtonText}>CREATE</Text>
					</TouchableOpacity>
					<View>
						<Text style={styles.footerText}>
							Already have an account?{' '}
							<Text onPress={() => navigation.navigate("LogIn")} style={styles.loginLink}>
								Login now!
							</Text>
						</Text>
					</View>
				</View>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	innerContainer: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		paddingHorizontal: 32,
	},
	logoContainer: {
		width: 80,
		height: 80,
		backgroundColor: "black",
		borderRadius: 40,
		alignItems: "center",
		justifyContent: "center",
		marginBottom: 16,
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
		marginBottom: 16,
	},
	formContainer: {
		width: "100%",
	},
	inputContainer: {
		flexDirection: "row",
		alignItems: "center",
		borderWidth: 2,
		borderColor: "#CBD5E1", // Tailwind class border-slate-300
		borderRadius: 8,
		padding: 8,
		marginBottom: 16,
	},
	input: {
		flex: 1,
		marginLeft: 8,
	},
	createButton: {
		backgroundColor: "#FB923C", // Tailwind class bg-orange-500
		borderWidth: 2,
		borderRadius: 8,
		paddingVertical: 12,
		alignItems: "center",
		marginBottom: 16,
	},
	createButtonText: {
		color: "white",
		fontSize: 18,
		fontWeight: "bold",
	},
	footerText: {
		textAlign: "center",
	},
	loginLink: {
		color: "#3B82F6", // Tailwind class text-blue-600
		fontWeight: "bold",
	},
});
