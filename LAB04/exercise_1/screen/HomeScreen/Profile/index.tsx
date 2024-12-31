import {
	StackNavigationProp,
	createStackNavigator,
} from "@react-navigation/stack";
import React from "react";
import { ProfileStackParamList } from "../../types";
import ProfileStack from "./components/ProfileStack";
import EditProfileStack from "./components/EditProfileStack";
import { KeyboardAvoidingView, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import ProfileAction from "./store/hook";
import { useNavigation } from "@react-navigation/native";

const Stack = createStackNavigator<ProfileStackParamList>();
export const Profile = () => {
	const { onChangeProfile } = ProfileAction.useChangeProfile();
	const navigation =
		useNavigation<StackNavigationProp<ProfileStackParamList, "EditProfile">>();
	return (
		<KeyboardAvoidingView behavior="padding" style={styles.keyboardAvoidingView}>
			<Stack.Navigator initialRouteName="ProfileStack">
				<Stack.Screen name="ProfileStack" component={ProfileStack} />
				<Stack.Screen
					options={{
						headerBackTitle: "",
						headerRight: () => {
							return (
								<TouchableOpacity
									style={styles.headerRightButton}
									onPress={() => {
										onChangeProfile();
										navigation.navigate("ProfileStack");
									}}>
									<AntDesign name="check" size={24} />
								</TouchableOpacity>
							);
						},
					}}
					name="EditProfile"
					component={EditProfileStack}
				/>
			</Stack.Navigator>
		</KeyboardAvoidingView>
	);
};

const styles = StyleSheet.create({
	keyboardAvoidingView: {
		width: "100%",
		height: "100%",
	},
	headerRightButton: {
		paddingRight: 16, 
	},
});
