import { AntDesign, Feather, FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import styles from "../styles/styles";
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView, Platform } from "react-native";
import { AppContext } from "../app/index";

export const LogInScreen = () => {
  const navigation = useNavigation();
  const appContext = React.useContext(AppContext);
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  const AlertContent = () =>
    Alert.alert("Incorrect email or password", "", [
      {
        onPress: () => {
          appContext?.setIsLoggedIn("hasError");
        },
      },
    ]);

  const handleSubmit = () => {
    if (appContext?.data) {
      if (
        !appContext.data.some((e) => e.email === email && e.password === password)
      ) {
        AlertContent();
        console.log("hasError");
      } else {
        appContext.setIsLoggedIn("success");
        console.log("success");
      }
    }
  };

  return (
    <SafeAreaView style={styles.containerLogin}>
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flex: 1 }}>
        <View style={styles.logoContainer}>
          <FontAwesome5 name="react" size={52} color="#61dbfb" />
        </View>
        <Text style={styles.welcomeText}>Welcome</Text>

        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <Feather name="mail" size={24} />
            <TextInput
              value={email}
              onChangeText={setEmail}
              style={styles.textInput}
              placeholder="Enter email"
              keyboardType="email-address"
            />
          </View>
          <View style={styles.inputContainer}>
            <AntDesign name="lock1" size={24} />
            <TextInput
              value={password}
              onChangeText={setPassword}
              style={styles.textInput}
              placeholder="Enter password"
              secureTextEntry={true}
            />
          </View>
          <TouchableOpacity style={styles.loginButton} onPress={handleSubmit}>
            <Text style={styles.loginButtonText}>LOG IN</Text>
          </TouchableOpacity>

          <View style={styles.orContainer}>
            <Text style={styles.orText}>Or login with</Text>
            <View style={styles.socialIconsContainer}>
              <FontAwesome5 name="facebook" color="blue" size={48} />
              <AntDesign name="google" color={"red"} size={48} />
            </View>
          </View>
          <View>
            <Text style={styles.signupText}>
              Don't have an account?{" "}
              <Text onPress={() => navigation.navigate("SignUp")} style={styles.signupLink}>
                Sign up here!
              </Text>
            </Text>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
