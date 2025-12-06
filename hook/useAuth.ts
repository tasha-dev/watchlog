// Codes by mahdi tasha
// Forcing next.js to render this component as client side component
"use client";

// Importing part
import { useEffect, useState } from "react";
import { onAuthStateChanged, type User } from "firebase/auth";
import { auth } from "@/lib/firebase/client";

// Creating and exporting useAuth custom hook as default
export default function useAuth() {
  // Defining hooks
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Usiong useEffect to set unsubscribe event
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Returning part
  return { user, loading, isAuthenticated: !!user };
}
