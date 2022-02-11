import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCT6EjAjivOs7nGUAd9a3_QhY8kJJwPeVU",
    authDomain: "league-of-legends-703e2.firebaseapp.com",
    projectId: "league-of-legends-703e2",
    storageBucket: "league-of-legends-703e2.appspot.com",
    messagingSenderId: "763874136951",
    appId: "1:763874136951:web:5f4ad2bd036dda75e8c772",
};

// init firebase
initializeApp(firebaseConfig);

//init firebase auth
const auth = getAuth();
export { auth };