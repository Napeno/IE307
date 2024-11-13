// NGUYỄN SƠN HÀ 21522029

import { ScrollView, View, Image, Text, TextInput, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native';
import styles from '../styles/feed'
import ListView from '../components/post/item';
import {
  useFonts,
  Quicksand_300Light,
  Quicksand_400Regular,
  Quicksand_500Medium,
  Quicksand_600SemiBold,
  Quicksand_700Bold,
} from '@expo-google-fonts/quicksand';
import { Filter } from 'react-native-svg';

const FavoriteScreen = () => {

  let [fontsLoaded] = useFonts({
    Quicksand_300Light,
    Quicksand_400Regular,
    Quicksand_500Medium,
    Quicksand_600SemiBold,
    Quicksand_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.viewContainer}>
          <ListView />
        </View>
    </SafeAreaView>
  )
}

export default FavoriteScreen
