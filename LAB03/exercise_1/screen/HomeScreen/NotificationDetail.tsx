import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import styles from '../../styles/home'

export const NotificationDetail = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewContainer}>
        <Text style={styles.text}>Notification Detail Screen</Text>
      </View>
    </SafeAreaView>
  );
};
