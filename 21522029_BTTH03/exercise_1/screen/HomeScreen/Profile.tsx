import React from "react";
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { AppContext } from "../../app/index";
import styles from '../../styles/home'

export const Profile = () => {
  const appContext = React.useContext(AppContext);

  const handleLogOut = () => {
    appContext?.setIsLoggedIn("idle");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.textIn}>Profile Screen</Text>
        <TouchableOpacity onPress={handleLogOut}>
          <Text style={styles.logOutText}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
