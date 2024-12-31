import React, { useState } from "react";
import { AntDesign, Feather, FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import styles from "../styles/styles";
import { SafeAreaView, TextInput, TouchableOpacity, Text, View } from "react-native";

export const SignUpScreen = () => {
  const navigation = useNavigation();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleInputChange = (field, value) => {
    if (field === "username") setUsername(value);
    if (field === "email") setEmail(value);
    if (field === "password") setPassword(value);
    if (field === "confirmPassword") setConfirmPassword(value);
  };

  return (
    <SafeAreaView>
      <View style={styles.containerSignUp}>
        <View style={styles.logo}>
          <FontAwesome5 name="react" style={styles.logoIcon} />
        </View>
        <Text style={styles.title}>Create New Account</Text>
        <View style={styles.formContainer}>
          <View style={styles.inputGroup}>
            <AntDesign name="user" size={24} />
            <TextInput
              style={styles.input}
              placeholder="Enter username"
              value={username}
              onChangeText={(text) => handleInputChange("username", text)}
            />
          </View>
          <View style={styles.inputGroup}>
            <Feather name="mail" size={24} />
            <TextInput
              style={styles.input}
              placeholder="Enter email"
              value={email}
              onChangeText={(text) => handleInputChange("email", text)}
            />
          </View>
          <View style={styles.inputGroup}>
            <AntDesign name="lock1" size={24} />
            <TextInput
              style={styles.input}
              placeholder="Enter password"
              secureTextEntry
              value={password}
              onChangeText={(text) => handleInputChange("password", text)}
            />
          </View>
          <View style={styles.inputGroup}>
            <AntDesign name="lock1" size={24} />
            <TextInput
              style={styles.input}
              placeholder="Confirm password"
              secureTextEntry
              value={confirmPassword}
              onChangeText={(text) => handleInputChange("confirmPassword", text)}
            />
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>CREATE</Text>
          </TouchableOpacity>
          <View>
            <Text style={styles.footerText}>
              Already have an account?{" "}
              <Text onPress={() => navigation.navigate("LogIn")} style={styles.link}>
                Login now!
              </Text>
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
