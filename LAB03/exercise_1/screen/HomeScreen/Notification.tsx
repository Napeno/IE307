import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import styles from '../../styles/home'
import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";

export const Notification = () => { 

    const navigation = useNavigation();

    const handleNavigate = () => {
        navigation.navigate("NotificationDetail");
    };

    return (
        <SafeAreaView style={styles.container}>
        <View style={styles.viewContainer}>
            <Text style={styles.text}>Notification Screen</Text>
            <TouchableOpacity style={styles.button} onPress={handleNavigate}>
            <Text style={styles.buttonText}>GO TO DETAIL</Text>
            </TouchableOpacity>
        </View>
        </SafeAreaView>
    );
};
