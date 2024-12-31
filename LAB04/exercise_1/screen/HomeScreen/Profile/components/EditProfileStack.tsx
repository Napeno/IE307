import React from "react";
import { Text, View, TextInput, ScrollView, StyleSheet } from "react-native";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { userState } from "../../../../store/atom";
import { editProfileFormState } from "../store/atom";

const EditProfileStack: React.FC = () => {
	const user = useRecoilValue(userState);
	const setEditProfile = useSetRecoilState(editProfileFormState);
	return (
		<ScrollView>
			<View style={styles.container}>
				<View style={styles.rowContainer}>
					<View style={styles.inputGroup}>
						<Text style={styles.label}>First Name</Text>
						<TextInput
							onChangeText={(firstname) =>
								setEditProfile((preState) => ({ ...preState, firstname }))
							}
							style={styles.input}
							placeholder={user.name?.firstname}
						/>
					</View>
					<View style={styles.inputGroup}>
						<Text style={styles.label}>Last Name</Text>
						<TextInput
							onChangeText={(lastname) =>
								setEditProfile((preState) => ({ ...preState, lastname }))
							}
							style={styles.input}
							placeholder={user.name?.lastname}
						/>
					</View>
				</View>

				<View style={styles.rowContainer}>
					<View style={styles.inputGroup}>
						<Text style={styles.label}>Username</Text>
						<TextInput
							onChangeText={(username) =>
								setEditProfile((preState) => ({ ...preState, username }))
							}
							style={styles.input}
							placeholder={user?.username || ""}
						/>
					</View>
				</View>

				<View style={styles.rowContainer}>
					<View style={styles.inputGroup}>
						<Text style={styles.label}>Email</Text>
						<TextInput
							onChangeText={(email) =>
								setEditProfile((preState) => ({ ...preState, email }))
							}
							style={styles.input}
							placeholder={user?.email || ""}
						/>
					</View>
				</View>

				<View style={styles.rowContainer}>
					<View style={styles.inputGroup}>
						<Text style={styles.label}>Phone Number</Text>
						<TextInput
							onChangeText={(phonenumber) =>
								setEditProfile((preState) => ({
									...preState,
									phonenumber,
								}))
							}
							style={styles.input}
							placeholder={user?.phone || ""}
						/>
					</View>
				</View>

				<View style={styles.rowContainer}>
					<View style={styles.inputGroup}>
						<Text style={styles.label}>House Number</Text>
						<TextInput
							onChangeText={(number) =>
								setEditProfile((preState) => ({
									...preState,
									housenumber: +number,
								}))
							}
							style={styles.input}
							placeholder={`${user?.address?.number || ""}`}
						/>
					</View>
				</View>

				<View style={styles.rowContainer}>
					<View style={styles.inputGroup}>
						<Text style={styles.label}>Street</Text>
						<TextInput
							onChangeText={(street) =>
								setEditProfile((preState) => ({ ...preState, street }))
							}
							style={styles.input}
							placeholder={`${user?.address?.street || ""}`}
						/>
					</View>
				</View>

				<View style={styles.rowContainer}>
					<View style={styles.inputGroup}>
						<Text style={styles.label}>City</Text>
						<TextInput
							onChangeText={(city) =>
								setEditProfile((preState) => ({ ...preState, city }))
							}
							style={styles.input}
							placeholder={`${user?.address?.city || ""}`}
						/>
					</View>
				</View>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		width: "100%",
		paddingHorizontal: 16,
		paddingTop: 16,
	},
	rowContainer: {
		flexDirection: "row",
		width: "100%",
		marginBottom: 16,
	},
	inputGroup: {
		flex: 1,
		marginHorizontal: 4,
	},
	label: {
		fontSize: 18,
		fontWeight: "bold",
		marginBottom: 8,
	},
	input: {
		borderWidth: 1,
		borderColor: "#9CA3AF", // Tailwind class border-gray-500
		paddingVertical: 8,
		paddingHorizontal: 8,
		borderRadius: 8,
		fontSize: 16,
	},
});

export default EditProfileStack;
