import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import styles from '../../styles/home'

export const Favorites = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewContainer}>
        <Text style={styles.text}>Favorites Screen</Text>
      </View>
    </SafeAreaView>
  );
};
