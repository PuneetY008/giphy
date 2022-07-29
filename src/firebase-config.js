import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: `${process.env.apiKey}`,
  authDomain: "giphy-ee978.firebaseapp.com",
  projectId: "giphy-ee978",
  storageBucket: "giphy-ee978.appspot.com",
  messagingSenderId: "1078503815008",
  appId: "1:1078503815008:web:be26605383369dcf5ad005",
  measurementId: "G-10C5HRYZ4Z",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
