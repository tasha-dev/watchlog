// Codes by mahdi tasha
// Importing part
import { ReactNode } from "react";
import ContainerComponent from "@/chunk/containerComponent";
import Image from "next/image";
import mainImage from '@/public/img/page/home/firstSection/img-boy-tv.jpg';
import TitleComponent from "@/chunk/titleComponent";
import MovieItemComponent from "@/chunk/movieItemComponent";

// Defining types
interface dataType {
  name: string;
  score: number;
  addedDate: Date;
}

// Creating and exporting logged in home page as default
export default function LoggedInHomePage():ReactNode {
  // Defining some dummy data
  const movies:dataType[] = [{
    name: 'Blonde',
    score: 3,
    addedDate: new Date()
  }, {
    name: 'X',
    score: 2,
    addedDate: new Date()
  }];

  const series:dataType[] = [{
    name: 'Blonde',
    score: 3,
    addedDate: new Date()
  }, {
    name: 'X',
    score: 2,
    addedDate: new Date()
  }];

  // Returning JSX
  return (
    <section>
      <Image width={1024} height={1024} alt="Image of a boy watching tv" src={mainImage.src} className="w-full h-[300px] object-cover" />
      <ContainerComponent size="small">
      
        <TitleComponent noMargin tier={0}>Movies:</TitleComponent>
        <ul className="flex flex-col gap-[10px]">
          {
            movies.map((item:dataType) => (
              <MovieItemComponent 
                name={item.name} 
                score={item.score} 
                addedDate={item.addedDate}
              />
            ))
          }
        </ul>
        <div className="my-[20px] w-full h-[1px] dark:bg-lightBorder bg-darkBorder" />
        <TitleComponent noMargin tier={0}>Series:</TitleComponent>
        <ul className="flex flex-col gap-[10px]">
          {
            series.map((item:dataType) => (
              <MovieItemComponent 
                name={item.name} 
                score={item.score} 
                addedDate={item.addedDate}
              />
            ))
          }
        </ul>
      </ContainerComponent>
    </section>
  );
}
