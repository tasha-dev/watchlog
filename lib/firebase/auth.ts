// Codes by mahdi tasha
// Importing part
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  updateProfile,
  type User,
} from "firebase/auth";
import { auth } from "./client";

// Creating and exporting auth function/helpers for firebase
export async function signUpWithEmail(
  email: string,
  password: string,
  displayName?: string,
): Promise<User> {
  const { user } = await createUserWithEmailAndPassword(auth, email, password);

  if (displayName) {
    await updateProfile(user, { displayName });
  }

  return user;
}

export async function signInWithEmail(
  email: string,
  password: string,
): Promise<User> {
  const { user } = await signInWithEmailAndPassword(auth, email, password);
  return user;
}

export async function signOutUser(): Promise<void> {
  await firebaseSignOut(auth);
}
