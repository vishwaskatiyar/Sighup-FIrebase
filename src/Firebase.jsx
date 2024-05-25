import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCgg696aZt7ksCeSWyOef8czeNJXpHKS_0",
  authDomain: "sighnuppage.firebaseapp.com",
  projectId: "sighnuppage",
  storageBucket: "sighnuppage.appspot.com",
  messagingSenderId: "742013219575",
  appId: "1:742013219575:web:ae6e511428fea33060d9f2",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };
