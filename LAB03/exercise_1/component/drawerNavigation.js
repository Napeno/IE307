import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Home } from '../screen/HomeScreen/Home'; 
import { Categories } from '../screen/HomeScreen/Categories';
import { Profile } from '../screen/HomeScreen/Profile';
import { CustomDrawerContent } from './drawer';  

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Categories" component={Categories} />
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
