import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAaU6CHE7jTQmhIfXQcExllOyefC_uVERQ",
  authDomain: "otp-verification-53d87.firebaseapp.com",
  projectId: "otp-verification-53d87",
  storageBucket: "otp-verification-53d87.appspot.com",
  messagingSenderId: "669099969783",
  appId: "1:669099969783:web:b6ca28819556538d3197f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
