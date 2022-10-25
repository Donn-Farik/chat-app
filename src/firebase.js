import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC5CmKtrnAaIfW7syTvOIFlUfj44kmdn1Y",
  authDomain: "chat-app-8ea78.firebaseapp.com",
  projectId: "chat-app-8ea78",
  storageBucket: "chat-app-8ea78.appspot.com",
  messagingSenderId: "373156644763",
  appId: "1:373156644763:web:20f00075ead7e787c5c33e",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { auth, db };
