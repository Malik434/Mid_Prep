import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
	FIREBASE_API_KEY,
	FIREBASE_AUTH_DOMAIN,
	FIREBASE_PROJECT_ID,
	FIREBASE_STORAGE_BUCKET,
	FIREBASE_MESSAGING_SENDER_ID,
	FIREBASE_APP_ID,
} from "@env";

const firebaseConfig = {
	apiKey: "AIzaSyC7dABBmIVx5ghfwN0Nh7b0f1NfrvXa2n0",
	authDomain: "react-native-uni.firebaseapp.com",
	projectId: "react-native-uni",
	storageBucket: "react-native-uni.appspot.com",
	messagingSenderId: "836314623675",
	appId: "1:836314623675:web:36cfde3ed01d318273039e",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
