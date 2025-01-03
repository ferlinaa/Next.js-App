// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5-DBPEkUfyflxy3IxhQYR3JossfLYyGg",
  authDomain: "coba-nextapp.firebaseapp.com",
  projectId: "coba-nextapp",
  storageBucket: "coba-nextapp.firebasestorage.app",
  messagingSenderId: "503500549051",
  appId: "1:503500549051:web:ff7c9f1cab57c2df98729e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;