// Codes by mahdi tasha
// Importing part
import useFirebaseAuth from "@/hook/useFirebaseAuth";
import useFirebaseApp from "@/hook/useFirebaseApp";
import { useEffect, useState } from "react";
import { DataSnapshot, getDatabase, onValue, ref } from "firebase/database";

// Defining types
interface movieType {
  addedDate: string;
  name: string;
  score: number;
}

type propType = 'movies' | 'series';

// Creating and exporting use firebase movie hook as default
export default function useFirebaseData(type:propType):{
  loading: boolean,
  data: movieType[] | [],
  names: string[] | []
} {
  // Defining states of component
  const [isLoading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<movieType[] | []>([]);
  const [names, setNames] = useState<string[] | []>([]);

  // Defining firebase
  const auth = useFirebaseAuth();

  // Using useEffect to set states
  useEffect(() => {
    if (auth.user) {
      const db = getDatabase();
      const uid = auth.user.uid;
      const dbRef = ref(db, `${type}/${uid}`);

      onValue(dbRef, (snapshot:DataSnapshot) => {
        const val = snapshot.val();
        
        if (val !== null) {
          setData(Object.values(val));
          setNames(Object.keys(val));
        } else {
          setData([]);
          setNames([]);
        }
      })

      setLoading(false);
    }
  }, [auth.loading])
  
  // Returning values
  return {
    loading: isLoading,
    data: data,
    names: names
  };
}
