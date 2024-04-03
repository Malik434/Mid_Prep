import { useState, useEffect } from "react";
import { View, Text, FlatList, Image, RefreshControl, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { styles } from "../styles/style";
import { useTheme } from "../context/ThemeContext";
import booksData from '../data/Books.json'; // Import the local JSON file
import BookSearch from "../components/BookSearch";
import SideToggle from "../components/SideToggle";

export default function BookShelfScreen() {
    const { theme } = useTheme();
    const dynamicStyles = styles(theme);
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = () => {
        setRefreshing(true);
        fetchData();
        setRefreshing(false);
    };

    const fetchData = async () => {
        try {
            const storedBooks = await AsyncStorage.getItem("books");
            if (storedBooks !== null) {
                // Data found in AsyncStorage
                setBooks(JSON.parse(storedBooks));
                console.log("Data fetched from AsyncStorage");
            } else {
                // Data not found in AsyncStorage, fetch from local JSON file
                setBooks(booksData);
                AsyncStorage.setItem("books", JSON.stringify(booksData));
                console.log("Data fetched from local JSON file");
            }
            setLoading(false); // Move setLoading here
        } catch (error) {
            console.error("Error:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (loading) {
        return (
            <View style={{ height: 100, ...dynamicStyles.container }}>
                <Text>Loading...</Text>
            </View>
        );
    }

    return (
		// <SideToggle /> {/* Add the SideToggle component */}
            // <BookSearch books={books} /> {/* Add the BookSearch component */}
	
				<FlatList
				  data={books}
				  keyExtractor={(item) => item.id}
				  style={dynamicStyles.cardsContainer}
				  refreshControl={
					<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
				  }
				  renderItem={({ item }) => (
					<TouchableOpacity onPress={() => console.log('Book pressed', item.title)}>
					  <View key={item._id} style={dynamicStyles.card}>
						<Image source={{ uri: item.coverPhotoUri }} style={dynamicStyles.cardImage} />
					  
						<View style={dynamicStyles.cardDetials}>
						  <Text style={dynamicStyles.cardTitle}>{item.title}</Text>
						  <Text style={dynamicStyles.cardAuthor}>
							Author: {item.author.name}
						  </Text>
						  <Text style={dynamicStyles.cardDescription}>{item.description}</Text>
						</View>
					  </View>
					</TouchableOpacity>
				  )}
				/>
			  );
}