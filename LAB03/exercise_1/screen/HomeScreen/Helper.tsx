import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import styles from '../../styles/homescreen'
import { useNavigation } from "@react-navigation/native";

export const Helper = () => {

    const navigation = useNavigation();

    const handleNavigate = () => {
        navigation.navigate("HelperDetail");
    };

    return (
        <SafeAreaView style={styles.container}>
        <View style={styles.viewContainer}>
            <Text style={styles.text}>Helper Screen</Text>
            <TouchableOpacity style={styles.button} onPress={handleNavigate}>
                <Text style={styles.buttonText}>GO TO DETAIL</Text>
            </TouchableOpacity>
        </View>
        </SafeAreaView>
    );
};
