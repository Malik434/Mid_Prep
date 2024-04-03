import { Text, Touchable, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

import HomeScreen from "./screens/HomeScreen";
import StoreScreen from "./screens/StoreScreen";
import About from "./screens/About";

import ProfileDropdown from "./components/ProfileDropdown";

import { useTheme } from "./context/ThemeContext";

const Tab = createBottomTabNavigator();

export default function MainApp() {
    const { theme } = useTheme();

    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName='Home'
                screenOptions={{
                    headerStyle: {
                        backgroundColor: theme.backgroundColor,
                    },
                    headerTintColor: theme.textColor,
                    headerTitleStyle: {
                        fontWeight: "bold",
                    },
                    tabBarActiveTintColor: theme.activeColor,
                    tabBarInactiveTintColor: theme.textColor,
                    tabBarStyle: {
                        backgroundColor: theme.backgroundColor,
                        padding: 10,
                        height: 60,
                    },
                    headerRight: () => {
                        return <ProfileDropdown />;
                    },
                }}>
                <Tab.Screen
                    name='Home'
                    component={HomeScreen}
                    options={{
                        tabBarIcon: ({ focused, color, size }) => (
                            <Feather name='home' size={size} color={color} />
                        ),
                    }}
                />
                <Tab.Screen
                    name='Book Shelf'
                    component={StoreScreen}
                    options={{
                        tabBarIcon: ({ focused, color, size }) => (
                            <Feather name='box' size={size} color={color} />
                        ),
                    }}
                />
                <Tab.Screen
                    name='About'
                    component={About}
                    options={{
                        tabBarIcon: ({ focused, color, size }) => (
                            <Feather name='info' size={size} color={color} />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}