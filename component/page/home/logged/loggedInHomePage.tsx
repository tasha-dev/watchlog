// Codes by mahdi tasha
// Forcing nextJS to render this component as client side component
'use client';

// Importing part
import { ReactNode } from "react";
import ContainerComponent from "@/chunk/containerComponent";
import Image from "next/image";
import mainImage from '@/public/img/page/home/firstSection/img-boy-tv.jpg';
import MovieListComponent from "@/chunk/movieListComponent";

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

  const series:dataType[] = [];

  // Returning JSX
  return (
    <section>
      <Image width={1024} height={1024} alt="Image of a boy watching tv" src={mainImage.src} className="w-full h-[300px] object-cover" />
      <ContainerComponent size="small">
        <MovieListComponent title="movies" list={movies} /> 
        <div className="my-[20px] w-full h-[1px] dark:bg-lightBorder bg-darkBorder" />
        <MovieListComponent title="series" list={series} />
      </ContainerComponent>
    </section>
  );
}
