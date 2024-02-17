// Codes by mahdi tasha
// Forcing nextJS to render this component as client side component
'use client';

// Importig part
import { ReactNode, useState } from "react";
import MovieItemComponent from "./movieItemComponent";
import TitleComponent from "./titleComponent";
import ButtonComponent from "./buttonComponent";

// Defining type of props
interface dataType {
  name: string;
  score: number;
  addedDate: Date;
}

interface propsType {
  title: 'movies' | 'series';
  list: dataType[];
}

// Creating and exporting move list comonent as default
export default function MovieListComponent({title, list}:propsType):ReactNode {
  // Defining state of component
  const [isFormShowing, setFormShowing] = useState<boolean>(false);

  // Returning JSX
  return (
    <>
      <div className="flex items-center justify-between flex-wrap gap-[20px]">
          <TitleComponent noMargin tier={0}>{title.toLocaleUpperCase()}</TitleComponent>
          <ButtonComponent onClick={() => {
            (isFormShowing)
              ? setFormShowing(false)
              : setFormShowing(true)
          }}>
            {
              (isFormShowing)
                ? 'Hide'
                : 'Add'
            }
          </ButtonComponent>
        </div>
        <ul className="flex flex-col gap-[10px]">
          {
            (list.length !== 0)
              ? (
                <>
                  {
                    list.map((item:dataType) => (
                      <MovieItemComponent 
                        name={item.name} 
                        score={item.score} 
                        addedDate={item.addedDate}
                      />
                    ))
                  }
                </>
              ) : <TitleComponent tier={2}>There is nothing to show</TitleComponent>
          }  
        </ul>
    </>
  );
}
