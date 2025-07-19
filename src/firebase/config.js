import { initializeApp } from 'firebase/app';
import { getAuth, signInAnonymously, onAuthStateChanged } from 'firebase/auth';

let auth;

try {
  // Canvas environment compatibility: check for global config variables
  const firebaseConfig = window.__firebase_config;
  const appId = window.__app_id;

  if (!firebaseConfig || !appId) {
    console.warn("Firebase config not found in window. Using anonymous auth requires setup in index.html.");
  } else {
    const app = initializeApp(firebaseConfig);
    auth = getAuth(app);
  }
} catch (e) {
  console.error("Firebase initialization error:", e);
  auth = null;
}

export { auth, signInAnonymously, onAuthStateChanged };