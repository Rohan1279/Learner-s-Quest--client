// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyBsBRDheDSietIkS05GFvXQArE306b8OP4",
  // authDomain: "learner-s-quest-authentication.firebaseapp.com",
  // projectId: "learner-s-quest-authentication",
  // storageBucket: "learner-s-quest-authentication.appspot.com",
  // messagingSenderId: "603987070657",
  // appId: "1:603987070657:web:bcf79a5e258e59091c8e40",

  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
