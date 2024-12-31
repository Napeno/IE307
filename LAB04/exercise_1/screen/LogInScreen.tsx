import React from "react";
import {
	SafeAreaView,
	View,
	Text,
	TextInput,
	TouchableOpacity,
	Alert,
	StyleSheet,
} from "react-native";
import { AntDesign, Feather, FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { AuthAction } from "../store/hook";
import { useSetRecoilState } from "recoil";
import { logInFormState } from "../store/atom";

export const LogInScreen = () => {
	const navigation = useNavigation();
	const [email, setEmail] = React.useState<string>("");
	const setLogInForm = useSetRecoilState(logInFormState);
	const { onLogIn } = AuthAction.useLogIn();
	const AlertContent = () =>
		Alert.alert("Incorrect email or password", "", [
			{
				onPress: () => {},
			},
		]);
	const handleSubmit = () => {};
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.innerContainer}>
				<View style={styles.logoContainer}>
					<FontAwesome5 name="react" size={52} color="#61dbfb" />
				</View>
				<View>
					<Text style={styles.title}>Welcome</Text>
				</View>
				<View style={styles.formContainer}>
					<View style={styles.inputContainer}>
						<Feather name="mail" size={24} />
						<TextInput
							onChangeText={(username) =>
								setLogInForm((preState) => ({ ...preState, username }))
							}
							style={styles.input}
							placeholder="Enter email"
						/>
					</View>
					<View style={styles.inputContainer}>
						<AntDesign name="lock1" size={24} />
						<TextInput
							onChangeText={(password) =>
								setLogInForm((preState) => ({ ...preState, password }))
							}
							style={styles.input}
							placeholder="Enter password"
							secureTextEntry={true}
						/>
					</View>
					<View style={styles.forgotPasswordContainer}>
						<Text style={styles.forgotPasswordText}>Forgot password</Text>
					</View>
					<TouchableOpacity
						style={styles.loginButton}
						onPress={onLogIn}>
						<Text style={styles.loginButtonText}>LOG IN</Text>
					</TouchableOpacity>
					<View style={styles.orLoginContainer}>
						<Text style={styles.orLoginText}>Or login with</Text>
						<View style={styles.socialIconsContainer}>
							<FontAwesome5 name="facebook" color="blue" size={48} />
							<AntDesign name="google" color="red" size={48} />
						</View>
					</View>
					<View>
						<Text style={styles.signUpText}>
							Don't have an account?{' '}
							<Text
								onPress={() => navigation.navigate("SignUp")}
								style={styles.signUpLink}>
									Sign up here!
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
	forgotPasswordContainer: {
		alignItems: "flex-end",
		marginBottom: 16,
	},
	forgotPasswordText: {
		color: "#F472B6", // Tailwind class text-pink-400
	},
	loginButton: {
		backgroundColor: "#FB923C", // Tailwind class bg-orange-500
		borderWidth: 2,
		borderRadius: 8,
		paddingVertical: 12,
		alignItems: "center",
		marginBottom: 16,
	},
	loginButtonText: {
		color: "white",
		fontSize: 18,
		fontWeight: "bold",
	},
	orLoginContainer: {
		alignItems: "center",
		marginBottom: 16,
	},
	orLoginText: {
		fontSize: 16,
		fontWeight: "bold",
		marginBottom: 8,
	},
	socialIconsContainer: {
		flexDirection: "row",
		justifyContent: "center",
		gap: 16,
	},
	signUpText: {
		textAlign: "center",
	},
	signUpLink: {
		color: "#3B82F6", // Tailwind class text-blue-600
		fontWeight: "bold",
	},
});
