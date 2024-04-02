import { Text, Touchable, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Feather } from "@expo/vector-icons";

import HomeScreen from "./screens/HomeScreen";
import StoreScreen from "./screens/StoreScreen";
import RegisterScreen from "./screens/RegisterScreen";
import LoginScreen from "./screens/LoginScreen";

import ProfileDropdown from "./components/ProfileDropdown";

import useAuth from "./hooks/UserHook";

import { useTheme } from "./context/ThemeContext";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const AboutScreen = () => {
	return <Text>Details</Text>;
};

export default function MainApp() {
	const { user } = useAuth();
	const { theme } = useTheme();

	return (
		<NavigationContainer>
			{user ? (
				<Tab.Navigator
					initialRouteName='Home'
					screenOptions={{
						headerStyle: {
							// backgroundColor: "#227398",
							backgroundColor: theme.backgroundColor,
						},
						// headerTintColor: "white",
						headerTintColor: theme.textColor,
						headerTitleStyle: {
							fontWeight: "bold",
						},
						tabBarActiveTintColor: theme.activeColor,
						// tabBarInactiveTintColor: "white",
						tabBarInactiveTintColor: theme.textColor,
						tabBarStyle: {
							// backgroundColor: "#227398",
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
						name='Store'
						component={StoreScreen}
						options={{
							tabBarIcon: ({ focused, color, size }) => (
								<Feather name='box' size={size} color={color} />
							),
						}}
					/>
					<Tab.Screen
						name='About'
						component={AboutScreen}
						options={{
							tabBarIcon: ({ focused, color, size }) => (
								<Feather name='info' size={size} color={color} />
							),
						}}
					/>
				</Tab.Navigator>
			) : (
				<Stack.Navigator
					initialRouteName='Login'
					screenOptions={{
						headerMode: "screen",
						// headerTintColor: "white",
						headerTintColor: theme.textColor,
						headerStyle: {
							// backgroundColor: "#227398",
							backgroundColor: theme.backgroundColor,
						},
					}}>
					<Stack.Screen
						name='Login'
						component={LoginScreen}
						options={{
							title: "Log in",
						}}
					/>

					<Stack.Screen
						name='Register'
						component={RegisterScreen}
						options={{
							title: "Create an Account",
							headerLeft: null,
						}}
					/>
				</Stack.Navigator>
			)}
		</NavigationContainer>
	);
}
