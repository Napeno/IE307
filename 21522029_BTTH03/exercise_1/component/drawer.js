import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export const CustomDrawerContent = ({ navigation }) => {
  return (
    <View style={styles.drawerContent}>
      <TouchableOpacity
        style={styles.drawerItem}
        onPress={() => navigation.navigate('Home')}
      >
        <Ionicons name="home-outline" size={24} color="black" />
        <Text style={styles.drawerItemText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.drawerItem}
        onPress={() => navigation.navigate('Categories')}
      >
        <Ionicons name="list-outline" size={24} color="black" />
        <Text style={styles.drawerItemText}>Categories</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.drawerItem}
        onPress={() => navigation.navigate('Profile')}
      >
        <Ionicons name="person-outline" size={24} color="black" />
        <Text style={styles.drawerItemText}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
  },
  drawerItemText: {
    marginLeft: 15,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
