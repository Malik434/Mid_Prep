import { useState, useEffect } from "react";
import { View, Text, FlatList, Image, RefreshControl } from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Clear AsyncStorage
// AsyncStorage.clear();

export default function StoreScreen() {
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
			<View style={{ height: 100, ...styles.container }}>
				<Text>Loading...</Text>
			</View>
		);
	}

	return (
		<FlatList
			data={products}
			keyExtractor={(item) => item.id}
			style={styles.container}
			refreshControl={
				<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
			}
			renderItem={({ item }) => (
				<View key={item.id} style={styles.card}>
					<Image source={{ uri: item.image }} style={styles.cardImage} />

					<View style={styles.cardDetials}>
						<Text style={styles.cardTitle}>{item.title}</Text>
						<Text style={styles.cardRating}>
							Ratings: {item.rating.rate} ({item.rating.count})
						</Text>
						<Text style={styles.cardPrice}>${item.price}</Text>
					</View>
				</View>
			)}
		/>
	);
}

const styles = {
	container: {
		backgroundColor: "#22739850",
		padding: 40,
	},
	card: {
		backgroundColor: "#22739850",
		padding: 25,
		margin: 10,
		borderRadius: 10,
	},
	cardImage: {
		width: "100%",
		aspectRatio: 1,
		borderRadius: 10,
	},
	cardDetials: {
		marginTop: 10,
	},
	cardTitle: {
		fontSize: 18,
		fontWeight: "bold",
	},
	cardRating: {
		fontSize: 16,
		color: "yellow",
		marginTop: 5,
	},

	cardPrice: {
		fontSize: 16,
		color: "green",
		backgroundColor: "#f0f0f0",
		padding: 5,
		borderRadius: 5,
		marginTop: 5,
		textAlign: "center",
		fontWeight: "bold",
	},
};
