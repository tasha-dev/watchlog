// Codes by mahdi tasha
// Forcing nextJS to render this component as client side component
'use client';

// Importing part
import { ReactNode, useEffect, useState } from "react";
import ContainerComponent from "@/chunk/containerComponent";
import Image from "next/image";
import mainImage from '@/public/img/page/home/firstSection/img-boy-tv.jpg';
import LoadingComponent from "@/chunk/loadingComponent";
import useFirebaseData from "@/hook/useFirebaseData";
import MovieListComponent from "@/chunk/movieListComponent";

// Defining types
interface dataType {
  name: string;
  score: number;
  addedDate: Date;
}

// Creating and exporting logged in home page as default
export default function LoggedInHomePage():ReactNode {
  // Getting data from firebase
  const movies = useFirebaseData('movies');
  const series = useFirebaseData('series');

  // Returning JSX
  return (
    <section>
      <Image width={1024} height={1024} alt="Image of a boy watching tv" src={mainImage.src} className="w-full h-[300px] object-cover" />
      <ContainerComponent size="small">
        {
          (movies.loading)
            ? (
              <div className="h-[300px] flex items-center justify-center">
                 <LoadingComponent />
              </div>
            ) : <MovieListComponent objectNames={movies.names} list={movies.data} title="movies" />
        } 
        <div className="my-[20px] w-full h-[1px] dark:bg-lightBorder bg-darkBorder" />
        {
          (series.loading)
            ? (
              <div className="h-[300px] flex items-center justify-center">
                 <LoadingComponent />
              </div>
            ) : <MovieListComponent objectNames={series.names} list={series.data} title="series" />
        }
      </ContainerComponent>
    </section>
  );
}
