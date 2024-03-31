import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";

export default function HomeScreen() {
	const navigation = useNavigation();
	return (
		<View style={styles.container}>
			<Text style={styles.h1}>Home</Text>
			<Text>Navigate to the Details screen</Text>
			<TouchableOpacity
				style={styles.button}
				onPress={() => navigation.navigate("About")}>
				<Text style={styles.buttonText}>Go to Details</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = {
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#22739850",
	},

	button: {
		backgroundColor: "#227398",
		marginTop: 10,
		padding: 10,
	},

	h1: {
		fontWeight: "bold",
		fontSize: 24,
		marginBottom: 40,
	},

	buttonText: {
		color: "white",
	},
};
