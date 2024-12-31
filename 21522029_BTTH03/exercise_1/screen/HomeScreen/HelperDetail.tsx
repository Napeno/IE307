import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import styles from '../../styles/home'

export const HelperDetail = () => {
    return (
        <SafeAreaView style={styles.container}>
        <View style={styles.viewContainer}>
            <Text style={styles.text}>Helper Detail Screen</Text>
        </View>
        </SafeAreaView>
    );
};
