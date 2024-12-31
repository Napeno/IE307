import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import React from "react"
import { RootNativeStackParamList } from "./type"
import { MediaBottomTab, PlacesBottomTab } from "./View"
import { useGetLocation } from "./store/hook"
import * as Notifications  from "expo-notifications"
import * as SQLite from "expo-sqlite"
const db = SQLite.openDatabaseSync("ie307")

const Stack = createBottomTabNavigator<RootNativeStackParamList>()
const Router = () => {
	const { onGetLocation } = useGetLocation()
  const notificationListener = React.useRef<any>()
  const responseListener = React.useRef<any>()
	React.useEffect(() => {
		onGetLocation()
	}, [])
  React.useEffect(()=>{
    notificationListener.current  = Notifications.addNotificationReceivedListener(() => {})
    responseListener.current = Notifications.addNotificationResponseReceivedListener(() => {})
    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current)
      Notifications.removeNotificationSubscription(responseListener.current)
    }
  },[])
  
  // React.useEffect(()=>{
  //   db.transaction(tx => {
  //     tx.executeSql(`
  //       create table if not exists Places (id varchar primary key, title varchar, image varchar, latitude real, longitude real);
  //       `)
  //     console.log("success create tables Places");
      
  //   })
  //   let data  
  // },[])

  React.useEffect(() => {
    const initializeAndFetchPlaces = async () => {
      try {
        await db.runAsync(`
          CREATE TABLE IF NOT EXISTS Places (
            id TEXT PRIMARY KEY,
            title TEXT,
            image TEXT,
            latitude REAL,
            longitude REAL
          );
        `);
        console.log("Successfully ensured the 'Places' table exists.");
  
        const result = await db.runAsync("SELECT * FROM Places");
        console.log("Fetched Places:", result);
      } catch (error) {
        console.error("Error initializing or fetching Places:", error);
      }
    };
  
    initializeAndFetchPlaces();
  }, []);
  
	return (
		<Stack.Navigator
			screenOptions={{ headerShown: false }}
			initialRouteName="Places">
			<Stack.Screen name="Places" component={PlacesBottomTab} />
			<Stack.Screen name="Media" component={MediaBottomTab} />
		</Stack.Navigator>
	)
}

export default Router
