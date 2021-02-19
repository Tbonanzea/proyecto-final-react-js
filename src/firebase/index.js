import firebase from "firebase/app";
import "@firebase/firestore";

const app = firebase.initializeApp({
	apiKey: "AIzaSyATWljcGvLNp9YHeHyvesI9Uq5CPPY830k",
	authDomain: "ecommerce-motomania.firebaseapp.com",
	projectId: "ecommerce-motomania",
	storageBucket: "ecommerce-motomania.appspot.com",
	messagingSenderId: "1007459400072",
	appId: "1:1007459400072:web:ec0f23bbf9fe63d5cde23d",
});

export function getFirebase() {
	return app;
}

export function getFirestore() {
	return firebase.firestore(app);
}
