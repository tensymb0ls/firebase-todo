// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration.
const firebaseConfig = {
  apiKey: "AIzaSyDiHpW9lpaVXdGjNeUOCHbMjA_9yrL1xgM",
  authDomain: "todo-d0db3.firebaseapp.com",
  projectId: "todo-d0db3",
  storageBucket: "todo-d0db3.appspot.com",
  messagingSenderId: "543288949688",
  appId: "1:543288949688:web:33c846e027c603bbae6d4d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const dataBase = getFirestore(app);
export { dataBase };
