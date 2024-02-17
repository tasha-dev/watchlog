// Codes by mahdi tasha
// Importing part
import { User, getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import useFirebaseApp from "@/hook/useFirebaseApp";

// Creating and exporting useFirebaseAuth custom hook as default
export default function useFirebaseAuth():{
  user: User,
  loading: boolean
} {
  // Defining state of component
  const [isLoading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<User | any>();

  // Initializing firebase
  const app = useFirebaseApp();

  // Using useEffect hook to set states
  useEffect(() => {
    const auth = getAuth();

    onAuthStateChanged(auth, (userAuth) => setUser(userAuth));
    setLoading(false);
  }, [])

  // Returning data
  return {
    loading: isLoading,
    user: user
  };
}
