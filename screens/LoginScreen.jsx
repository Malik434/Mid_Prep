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

const LoginScreen = () => {
	const { theme } = useTheme();
	const dynamicStyles = styles(theme);

	const navigation = useNavigation();
	const { signIn } = useAuth();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleLogin = () => {
		if (!email || !password) {
			return alert("Please fill in all fields");
		}

		try {
			signIn(email, password);
		} catch (error) {
			console.error("Error signing in:", error);
			return alert("Error signing in: " + error.message || "An error occurred");
		}

		setEmail("");
		setPassword("");
	};

	return (
		<View style={dynamicStyles.container}>
			<Text style={dynamicStyles.title}>Login</Text>
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
			<TouchableOpacity style={dynamicStyles.button} onPress={handleLogin}>
				<Text style={dynamicStyles.buttonText}>Login</Text>
			</TouchableOpacity>

			<TouchableOpacity
				style={dynamicStyles.buttonSecondary}
				onPress={() => navigation.navigate("Register")}>
				<Text style={dynamicStyles.paragraph}>
					Don't have an account? Register
				</Text>
			</TouchableOpacity>
		</View>
	);
};

export default LoginScreen;
