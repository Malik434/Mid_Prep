import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useTheme } from "../context/ThemeContext";
import { styles } from "../styles/style";

export default function About() {
	const navigation = useNavigation();
	const { theme } = useTheme();
	const dynamicStyles = styles(theme);
	return (
		<View style={dynamicStyles.container}>
			<Text style={dynamicStyles.h1}>About</Text>
			<Text style={dynamicStyles.paragraph}>
				Details about the app go here.
			</Text>
		</View>
	);
}
