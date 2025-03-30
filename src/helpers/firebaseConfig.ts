// firebaseConfig.ts
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyBkin-JQ1QihH53MjjwYHXC4Bpo47LlveQ",
  authDomain: "movie-app-62a9d.firebaseapp.com",
  projectId: "movie-app-62a9d",
  storageBucket: "movie-app-62a9d.firebasestorage.app",
  messagingSenderId: "564683372180",
  appId: "1:564683372180:web:3dd386dde28ad90dfa6681",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
onAuthStateChanged(auth, async (user) => {
  if (user) {
    const token = await user.getIdToken();
    await AsyncStorage.setItem("authToken", token);
  } else {
    await AsyncStorage.removeItem("authToken");
  }
});
export { auth };
