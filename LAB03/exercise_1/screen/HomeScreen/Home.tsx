import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import CustomDrawerContent from "../../component/customDrawerContent";
import { Notification } from './Notification';
import { Helper } from './Helper';
import { useNavigation } from "@react-navigation/native";
import styles from '../../styles/homescreen';

import Icon from 'react-native-vector-icons/AntDesign';

const Drawer = createDrawerNavigator();

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleNavigate = () => {
    navigation.navigate("HomeDetail");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewContainer}>
        <Text style={styles.text}>HomeScreen</Text>
        <TouchableOpacity style={styles.button} onPress={handleNavigate}>
          <Text style={styles.buttonText}>GO TO DETAIL</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export const Home = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerLabelStyle: { marginLeft: 20 },
      }}
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          drawerIcon: ({}) => (
            <Icon name="home" size={24} color="black" />
          ),
        }}
      />
      <Drawer.Screen
        name="Notification"
        component={Notification}
        options={{
          drawerIcon: ({}) => (
            <Icon name="bells" size={24} color="black" />
          ),
        }}
      />
      <Drawer.Screen
        name="Helper"
        component={Helper}
        options={{
          drawerIcon: ({}) => (
            <Icon name="questioncircle" size={24} color="black" />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};
