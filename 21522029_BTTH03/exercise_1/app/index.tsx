// NGUYỄN SƠN HÀ 21522029
import { SafeAreaView, View } from "react-native"
import React, { useContext } from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from "@react-navigation/native"
import { RootNativeStackParamList } from "../screen/types"
import { LogInScreen, SignUpScreen } from "../screen"
import { HomeScreen } from "../screen/HomeScreen"
import {HomeDetail} from "../screen/HomeScreen/HomeDetail"
import {Home} from "../screen/HomeScreen/Home"
import {NotificationDetail} from '../screen/HomeScreen/NotificationDetail'
import {Notification} from '../screen/HomeScreen/Notification'
import {HelperDetail} from '../screen/HomeScreen/HelperDetail'
import {Helper} from '../screen/HomeScreen/Helper'
type AppProps = {
	children: React.ReactNode
}
type AppContextProps = {
	data: {
		email: string
		password: string
	}[]
	isLoggedIn: "idle" | "success" | "hasError"
	setIsLoggedIn: React.Dispatch<
		React.SetStateAction<"idle" | "success" | "hasError">
	>
}
export const AppContext = React.createContext<AppContextProps | null>(null)
const AppContextProvider: React.FC<AppProps> = (props) => {
	const { children } = props
	const [isLoggedIn, setIsLoggedIn] = React.useState<
		"idle" | "success" | "hasError"
	>("idle")
	return (
		<AppContext.Provider
			value={{
				data: [
					{
						email: `21522029@gm.uit.edu.vn`,
						password: `123456`,
					},
				],
				isLoggedIn,
				setIsLoggedIn,
			}}>
			{children}
		</AppContext.Provider>
	)
}
const Stack = createNativeStackNavigator<RootNativeStackParamList>();
export default function App() {
	return (
		<AppContextProvider>
			<Screen />
		</AppContextProvider>
	)
}

const Screen = () => {
	const appContext = React.useContext(AppContext)
	return (
		<Stack.Navigator
		  screenOptions={{ headerShown: false }}
		  initialRouteName={appContext?.isLoggedIn === "success" ? "HomeScreen" : "HomeScreen"}>
		  <Stack.Screen name="HomeScreen" component={HomeScreen} />
		  <Stack.Screen name="HomeDetail" component={HomeDetail} 
		  options={{
			headerShown: true, 
		  }}
		  />
		  <Stack.Screen name="NotificationDetail" component={NotificationDetail} 
		   options={{
			headerShown: true, 
		  }}
		  />
		  <Stack.Screen name="Notification" component={Notification} />
		  <Stack.Screen name="HelperDetail" component={HelperDetail} 
		   options={{
			headerShown: true, 
		  }}
		  />
		  <Stack.Screen name="Helper" component={Helper} />
		  <Stack.Screen name="LogIn" component={LogInScreen} />
		  <Stack.Screen name="SignUp" component={SignUpScreen} />
		</Stack.Navigator>
	  )
}
