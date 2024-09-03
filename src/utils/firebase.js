// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyAhzkbvm3Hk49GbFr4UpQnAIjjTlnJBvfY",
	authDomain: "netflixgpt-128c1.firebaseapp.com",
	projectId: "netflixgpt-128c1",
	storageBucket: "netflixgpt-128c1.appspot.com",
	messagingSenderId: "679734844181",
	appId: "1:679734844181:web:92f8c49046654b9de8671c",
	measurementId: "G-1ZV7BSXRZ9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
