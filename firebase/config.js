import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
   apiKey: "AIzaSyBZrssN1-3wPjYBlPzyBgrnR9uTVcJczFI",
   authDomain: "citas-medicas-app-64aa3.firebaseapp.com",
   projectId: "citas-medicas-app-64aa3",
   storageBucket: "citas-medicas-app-64aa3.appspot.com",
   messagingSenderId: "774256781524",
   appId: "1:774256781524:web:4e2fd79c31078a45d23341"
   };

   const app = initializeApp(firebaseConfig);
   export const db = getFirestore(app);