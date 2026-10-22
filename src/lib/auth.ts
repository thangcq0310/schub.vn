import {
  getAuth,
  connectAuthEmulator,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  type User,
} from "firebase/auth"
import app, { useEmulators } from "./firebase"

export const auth = getAuth(app)
if (useEmulators) connectAuthEmulator(auth, "http://127.0.0.1:9099", { disableWarnings: true })

// Google accounts allowed into /admin. Keep in sync with isAdmin() in firestore.rules,
// which is what actually protects the data.
const ADMIN_EMAILS = ["chuquangthangftu@gmail.com"]

export function isAdmin(user: User | null | undefined): boolean {
  return !!user?.email && user.emailVerified && ADMIN_EMAILS.includes(user.email)
}

export function signInWithGoogle() {
  return signInWithPopup(auth, new GoogleAuthProvider())
}

export function signOutAdmin() {
  return signOut(auth)
}
