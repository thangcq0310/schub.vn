import { initializeApp, type FirebaseOptions } from "firebase/app";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore/lite";

// Local development against `firebase emulators:start` (see docs/setup-firebase.md)
export const useEmulators = import.meta.env.VITE_USE_EMULATORS === "true"
export const isDemoMode = !import.meta.env.VITE_FIREBASE_API_KEY && !useEmulators

const firebaseConfig: FirebaseOptions = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "demo-key",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "demo.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "demo-project",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "demo.appspot.com",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "000000000000",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:000000000000:web:0000000000000000000000",
};

const app = initializeApp(firebaseConfig);
// Firestore Lite: REST-only reads/writes, much smaller bundle than the full SDK
const db = getFirestore(app);
if (useEmulators) connectFirestoreEmulator(db, "127.0.0.1", 8080)
export { db }

if (isDemoMode) {
  console.info("Firebase demo mode — using seed data. Create a .env file with real Firebase config to enable Firestore.")
}
export default app;
