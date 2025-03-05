import { initializeApp, getApps, getApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

// Use environment variables
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Prevent re-initializing Firebase in Next.js SSR
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

// Function to add email to Firestore
export const addEmailToWaitlist = async (email: string) => {
  try {
    await addDoc(collection(db, "waitlist"), {
      email,
      timestamp: serverTimestamp(),
    });
    return { success: true };
  } catch (error) {
    console.error("Error adding email to waitlist:", error);
    return { success: false, error };
  }
};
