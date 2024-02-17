// Codes by mahdi tasha
// Importing part
import { initializeApp , FirebaseApp } from "firebase/app";

// Creating and exporting useFirebaseApp hook as default
export default function useFirebaseApp():FirebaseApp {
  // Defioning configs of fitebase
  const firebaseConfig = {
    apiKey: "AIzaSyAR_EXUd79Z3HFvX6DBOxhXcWfM4BxFn9k",
    authDomain: "watchlog-702fd.firebaseapp.com",
    projectId: "watchlog-702fd",
    storageBucket: "watchlog-702fd.appspot.com",
    messagingSenderId: "797791245981",
    appId: "1:797791245981:web:1b5e2df3585b20a748e674",
    measurementId: "G-P3V7ZS64DF"
  };

  // Initialzing the firebase
  const app = initializeApp(firebaseConfig);

  // Returning firebase
  return app;
}
