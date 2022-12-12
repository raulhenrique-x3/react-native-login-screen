import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDAWoAgD0CeMECM-1Rijz6LKz64xnmRcvA",
  authDomain: "react-native-login-system.firebaseapp.com",
  projectId: "react-native-login-system",
  storageBucket: "react-native-login-system.appspot.com",
  messagingSenderId: "774310937794",
  appId: "1:774310937794:web:2dad8356ad65ceeffa275b",
  measurementId: "G-47CJ0QJ189",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
