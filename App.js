import "react-native-gesture-handler";

// import { createDrawerNavigator } from "@react-navigation/drawer";

import { ThemeProvider } from "./context/ThemeContext";
import MainApp from "./MainApp";

// const Drawer = createDrawerNavigator();

export default function App() {
	return (
		<ThemeProvider>
			<MainApp />
		</ThemeProvider>
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
