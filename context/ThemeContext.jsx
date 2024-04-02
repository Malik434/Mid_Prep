// ThemeContext.js
import React, { createContext, useContext, useState } from "react";

// Define light and dark themes
const lightTheme = {
	backgroundColor: "#76ABAE",
	textColor: "#31363F",
	containerColor: "#EEEEEE",
	activeColor: "#FFD369",
	// Add more styles as needed
};

const darkTheme = {
	backgroundColor: "#222831",
	textColor: "#EEEEEE",
	containerColor: "#31363F",
	activeColor: "#FFD369",
	// Add more styles as needed
};

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
	const [isDarkMode, setIsDarkMode] = useState(true);

	const theme = isDarkMode ? darkTheme : lightTheme;

	const toggleDarkMode = () => {
		setIsDarkMode(!isDarkMode);
	};

	return (
		<ThemeContext.Provider value={{ theme, isDarkMode, toggleDarkMode }}>
			{children}
		</ThemeContext.Provider>
	);
};
