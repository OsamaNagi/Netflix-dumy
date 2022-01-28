import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD7WVY4eLWfSvYOGAccgS0Cf86ahJQOzX0",
  authDomain: "netflix-dumy.firebaseapp.com",
  projectId: "netflix-dumy",
  storageBucket: "netflix-dumy.appspot.com",
  messagingSenderId: "832283979872",
  appId: "1:832283979872:web:01aae3b516d77f51739305",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
