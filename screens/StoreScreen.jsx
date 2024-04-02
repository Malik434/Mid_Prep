import { useState, useEffect } from "react";
import { View, Text, FlatList, Image, RefreshControl } from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { styles } from "../styles/style";
import { useTheme } from "../context/ThemeContext";

// Clear AsyncStorage
// AsyncStorage.clear();

export default function StoreScreen() {
	const { theme } = useTheme();
	const dynamicStyles = styles(theme);
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [refreshing, setRefreshing] = useState(false);

	const onRefresh = () => {
		setRefreshing(true);
		fetchData();
		setRefreshing(false);
	};

	const fetchData = async () => {
		try {
			const storedProducts = await AsyncStorage.getItem("products");
			if (storedProducts !== null) {
				// Data found in AsyncStorage
				setProducts(JSON.parse(storedProducts));
				console.log("Data fetched from AsyncStorage");
			} else {
				// Data not found in AsyncStorage, fetch from API
				const response = await axios.get("https://fakestoreapi.com/products");
				setProducts(response.data);
				AsyncStorage.setItem("products", JSON.stringify(response.data));
				console.log("Data fetched from API");
			}
		} catch (error) {
			console.error("Error:", error);
		}
	};

	useEffect(() => {
		fetchData();
		setLoading(false);
	}, []);

	if (loading) {
		return (
			<View style={{ height: 100, ...dynamicStyles.container }}>
				<Text>Loading...</Text>
			</View>
		);
	}

	return (
		<FlatList
			data={products}
			keyExtractor={(item) => item.id}
			style={dynamicStyles.cardsContainer}
			refreshControl={
				<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
			}
			renderItem={({ item }) => (
				<View key={item.id} style={dynamicStyles.card}>
					<Image source={{ uri: item.image }} style={dynamicStyles.cardImage} />

					<View style={dynamicStyles.cardDetials}>
						<Text style={dynamicStyles.cardTitle}>{item.title}</Text>
						<Text style={dynamicStyles.cardRating}>
							Ratings: {item.rating.rate} ({item.rating.count})
						</Text>
						<Text style={dynamicStyles.cardPrice}>${item.price}</Text>
					</View>
				</View>
			)}
		/>
	);
}
