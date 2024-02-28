// Codes by mahdi tasha
// Forcing nextJS to render this component as client side component
'use client';

// Importing part
import { ReactNode } from "react";
import TitleComponent from "./titleComponent";
import IconComponent from "./iconComponent";
import useFirebaseAuth from "@/hook/useFirebaseAuth";

// Defining type of props
interface propsType {
  name: string;
  score: number;
  addedDate: string;
}

// Creatnig and exporting movie item component as default
export default function MovieItemComponent({name, score, addedDate}:propsType):ReactNode {
  // Defining firebase
  const auth = useFirebaseAuth();

  // Returning JSX
  return (
    <li className="flex items-center gap-[20px] flex-wrap justify-between">
      <div>
        <div className="flex items-center gap-[10px] flex-wrap mb-[10px]">
          <TitleComponent noMargin tier={1}>{name}</TitleComponent>
          <TitleComponent noMargin tier={2}>(⭐{score})</TitleComponent>
        </div>
        <TitleComponent noMargin tier={3}>{new Date(addedDate).toLocaleDateString()}</TitleComponent> 
      </div>
      <button 
        className="w-[50px] h-[50px] aspect-square shrink-0 flex items-center justify-center rounded-[10px] bg-red-600 text-white"
        onClick={() => {
          console.log(auth.user?.uid)
        }}
      >
        <IconComponent size={20} name="bin"/>
      </button>
    </li>
  );
}
