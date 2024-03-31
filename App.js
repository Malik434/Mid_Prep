import "react-native-gesture-handler";

import { Text, Touchable, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

import useAuth from "./hooks/UserHook";

import HomeScreen from "./screens/HomeScreen";
import StoreScreen from "./screens/StoreScreen";
import RegisterScreen from "./screens/RegisterScreen";
import LoginScreen from "./screens/LoginScreen";

import ProfileDropdown from "./components/ProfileDropdown";

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const AboutScreen = () => {
	return <Text>Details</Text>;
};

export default function App() {
	const { user } = useAuth();

	return (
		<NavigationContainer>
			{user ? (
				<Tab.Navigator
					initialRouteName='Home'
					screenOptions={{
						headerStyle: {
							backgroundColor: "#227398",
						},
						headerTintColor: "white",
						headerTitleStyle: {
							fontWeight: "bold",
						},
						tabBarActiveTintColor: "tomato",
						tabBarInactiveTintColor: "white",
						tabBarStyle: {
							backgroundColor: "#227398",
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
						headerTintColor: "white",
						headerStyle: { backgroundColor: "#227398" },
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

{
	/* Stack Navigation */
}
{
	/* <Stack.Navigator
				initialRouteName='Home'
				screenOptions={{
					headerMode: "screen",
					headerTintColor: "white",
					headerStyle: { backgroundColor: "#227398" },
				}}>
				<Stack.Screen
					name='Home'
					component={HomeScreen}
					options={{
						title: "Awesome app",
					}}
				/>
				<Stack.Screen
					name='Store'
					component={StoreScreen}
					options={{
						title: "Store",
					}}
				/>
				<Stack.Screen
					name='About'
					component={AboutScreen}
					options={{
						gestureEnabled: false,
					}}
				/>
			</Stack.Navigator> */
}

{
	/* Side Navigation */
}
{
	/* <Drawer.Navigator
				initialRouteName='Home'
				screenOptions={{
					headerStyle: {
						backgroundColor: "#227398",
					},
					headerTintColor: "white",
					headerTitleStyle: {
						fontWeight: "bold",
					},
					drawerStyle: {
						backgroundColor: "#227398",
					},
					drawerActiveTintColor: "tomato",
					drawerInactiveTintColor: "white",
				}}>
				<Drawer.Screen
					name='Home'
					component={HomeScreen}
					options={{
						drawerIcon: ({ focused, color, size }) => (
							<Feather name='home' size={size} color={color} />
						),
					}}
				/>
        <Drawer.Screen
					name='Store'
					component={StoreScreen}
					options={{
						drawerIcon: ({ focused, color, size }) => (
							<Feather name='box' size={size} color={color} />
						),
					}}
				/>
				<Drawer.Screen
					name='About'
					component={AboutScreen}
					options={{
						drawerIcon: ({ focused, color, size }) => (
							<Feather name='info' size={size} color={color} />
						),
					}}
				/>
			</Drawer.Navigator> */
}

{
	/* Bottom Navigation */
}
