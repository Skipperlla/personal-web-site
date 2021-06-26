import firebaseClient from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const credentials = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGİNG_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
};

if (!firebaseClient.apps.length) firebaseClient.initializeApp(credentials);
const auth = firebaseClient.auth();
const db = firebaseClient.firestore();
const storage = firebaseClient.storage();
const serverTimestamp = firebaseClient.firestore.FieldValue.serverTimestamp;
export { auth, db, storage, serverTimestamp };
