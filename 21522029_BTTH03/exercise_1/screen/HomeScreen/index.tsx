import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "./Home";
import { Categories } from "./Categories";
import { Profile } from "./Profile";
import { Favorites } from "./Favorites";
import { Notification } from "./Notification";
import { AntDesign, FontAwesome, Octicons } from "@expo/vector-icons";
import { View, StyleSheet } from "react-native";

const Tab = createBottomTabNavigator();

export const HomeScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;
          let IconComponent;

          switch (route.name) {
            case "Home":
              iconName = "home";
              IconComponent = AntDesign;
              break;
            case "Categories":
              iconName = "appstore1";
              IconComponent = AntDesign;
              break;
            case "Favorites":
              iconName = "heart-fill";
              IconComponent = Octicons;
              break;
            case "Profile":
              iconName = "user";
              IconComponent = FontAwesome;
              break;
            default:
              return null;
          }

          return (
            <IconComponent
              name={iconName}
              size={24}
              color={focused ? "blue" : "black"}
              style={styles.icon}
            />
          );
        },
        headerShown: true,
      })}
    >
      <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Tab.Screen name="Categories" component={Categories} />
      <Tab.Screen name="Favorites" component={Favorites} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  icon: {
    justifyContent: "center",
    alignItems: "center",
  },
});
