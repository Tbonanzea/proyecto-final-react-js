import firebase from "firebase/app";
import "@firebase/firestore";

const APIKEY = process.env.REACT_APP_FIREBASE_APIKEY;
const AUTHDOMAIN = process.env.REACT_APP_FIREBASE_AUTHDOMAIN;
const PROJECTID = process.env.REACT_APP_FIREBASE_PROJECTID;
const STORAGEBUCKET = process.env.REACT_APP_FIREBASE_STORAGEBUCKET;
const MESSAGINGSENDERID = process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID;
const APPID = process.env.REACT_APP_FIREBASE_APPID;

const app = firebase.initializeApp({
	apiKey: APIKEY,
	authDomain: AUTHDOMAIN,
	projectId: PROJECTID,
	storageBucket: STORAGEBUCKET,
	messagingSenderId: MESSAGINGSENDERID,
	appId: APPID,
});

export function getFirebase() {
	return app;
}

export function getFirestore() {
	return firebase.firestore(app);
}
