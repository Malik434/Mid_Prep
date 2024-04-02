import React, { useState } from "react";
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import useAuth from "../hooks/UserHook";
import { useTheme } from "../context/ThemeContext";
import { styles } from "../styles/style";

const RegisterScreen = () => {
	const { theme } = useTheme();
	const dynamicStyles = styles(theme);
	const navigation = useNavigation();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const { signUp } = useAuth();

	const handleRegister = () => {
		if (!email || !password) {
			return alert("Please fill in all fields");
		}

		try {
			signUp(email, password);
		} catch (error) {
			console.error("Error registering user:", error);
			return alert(
				"Error registering user: " + error.message || "An error occurred"
			);
		}

		setEmail("");
		setPassword("");

		// navigation.navigate("Home");
	};

	return (
		<View style={dynamicStyles.container}>
			<Text style={dynamicStyles.title}>Create an Account</Text>
			<TextInput
				style={dynamicStyles.input}
				placeholder='Email'
				placeholderTextColor={theme.textColor}
				value={email}
				onChangeText={setEmail}
				autoCapitalize='none'
				keyboardType='email-address'
			/>
			<TextInput
				style={dynamicStyles.input}
				placeholder='Password'
				placeholderTextColor={theme.textColor}
				value={password}
				onChangeText={setPassword}
				secureTextEntry
			/>
			<TouchableOpacity style={dynamicStyles.button} onPress={handleRegister}>
				<Text style={dynamicStyles.buttonText}>Register</Text>
			</TouchableOpacity>

			<TouchableOpacity
				style={dynamicStyles.buttonSecondary}
				onPress={() => navigation.navigate("Login")}>
				<Text style={dynamicStyles.paragraph}>
					Already have an account? Log in
				</Text>
			</TouchableOpacity>
		</View>
	);
};

export default RegisterScreen;
