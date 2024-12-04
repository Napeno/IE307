import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useNavigation } from 'expo-router';
import { DrawerActions } from '@react-navigation/native';
import { AppContext } from "../app/index";

export default function CustomDrawerContent(props:any) {
    const appContext = React.useContext(AppContext);

    const {bottom} = useSafeAreaInsets();
    const navigation = useNavigation();

    const closeDrawer = ()=>{
        navigation.dispatch(DrawerActions.closeDrawer())
    }

    const handleLogOut = () => {
      appContext?.setIsLoggedIn("idle");
    };
  
    return (
      <View
          style={{flex: 1}}
      >
        <DrawerContentScrollView {...props} scrollEnabled={false}>
          <View style={{padding: 20}}>
              {/* <Image style={{height: 35}} resizeMode='contain' source={require('../assets/images/logo.png')} /> */}
          </View>
          <DrawerItemList {...props} />
        </DrawerContentScrollView>

        <Pressable onPress={handleLogOut} style={{padding: 20, paddingBottom: bottom+10}}>
          <Text>Logout</Text>
        </Pressable>
      </View>
    )
}