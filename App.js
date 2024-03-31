import "react-native-gesture-handler";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

import HomeScreen from "./screens/HomeScreen";

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const DetailsScreen = () => {
	return <Text>Details</Text>;
};

export default function App() {
	return (
		<NavigationContainer>
			{/* Stack Navigation */}
			{/* <Stack.Navigator
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
					name='Details'
					component={DetailsScreen}
					options={{
						gestureEnabled: false,
					}}
				/>
			</Stack.Navigator> */}

			{/* Side Navigation */}
			{/* <Drawer.Navigator
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
					name='Details'
					component={DetailsScreen}
					options={{
						drawerIcon: ({ focused, color, size }) => (
							<Feather name='info' size={size} color={color} />
						),
					}}
				/>
			</Drawer.Navigator> */}

			{/* Bottom Navigation */}
			<Tab.Navigator
				initialRouteName='Home'
				tabBarOptions={{
					activeTintColor: "tomato",
					inactiveTintColor: "white",
				}}
				screenOptions={{
					headerStyle: {
						backgroundColor: "#227398",
					},
					headerTintColor: "white",
					headerTitleStyle: {
						fontWeight: "bold",
					},
					tabBarStyle: {
						backgroundColor: "#227398",
						padding: 10,
						height: 60,
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
					name='Details'
					component={DetailsScreen}
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
