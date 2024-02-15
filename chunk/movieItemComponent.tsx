// Codes by mahdi tasha
// Importing part
import { ReactNode } from "react";
import TitleComponent from "./titleComponent";

// Defining type of props
interface propsType {
  name: string;
  score: number;
  addedDate: Date;
}

// Creatnig and exporting movie item component as default
export default function MovieItemComponent({name, score, addedDate}:propsType):ReactNode {
  // Returning JSX
  return (
    <li className="flex items-center gap-[20px] flex-wrap justify-between">
      <div className="flex items-center gap-[10px] flex-wrap">
        <TitleComponent noMargin tier={1}>{name}</TitleComponent>
        <TitleComponent noMargin tier={2}>(⭐{score})</TitleComponent>
      </div> 
      <TitleComponent noMargin tier={3}>{addedDate.toDateString()}</TitleComponent> 
    </li>
  );
}
