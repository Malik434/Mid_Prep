import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useTheme } from "../context/ThemeContext";
import { styles } from "../styles/style";

export default function HomeScreen() {
	const navigation = useNavigation();
	const { theme } = useTheme();
	const dynamicStyles = styles(theme);
	return (
		<View style={dynamicStyles.container}>
			<Text style={dynamicStyles.h1}>Home</Text>
			<Text style={dynamicStyles.paragraph}>
				Navigate to the Details screen
			</Text>
			<TouchableOpacity
				style={dynamicStyles.button}
				onPress={() => navigation.navigate("About")}>
				<Text style={dynamicStyles.buttonText}>Go to Details</Text>
			</TouchableOpacity>
		</View>
	);
}
