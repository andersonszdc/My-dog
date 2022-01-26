import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAl7_o-sgtTJOP7FcPxNQiG8pZMEjHrjUA",
  authDomain: "my-dog-9c436.firebaseapp.com",
  projectId: "my-dog-9c436",
  storageBucket: "my-dog-9c436.appspot.com",
  messagingSenderId: "842029179848",
  appId: "1:842029179848:web:c93688a7f4a8db36cf16fd",
};

initializeApp(firebaseConfig);

export const db = getFirestore();
