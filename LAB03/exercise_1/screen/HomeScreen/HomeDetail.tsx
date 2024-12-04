import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import styles from '../../styles/home'

export const HomeDetail = () => {

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewContainer}>
        <Text style={styles.text}>HomeDetail</Text>
      </View>
    </SafeAreaView>
  );
};
