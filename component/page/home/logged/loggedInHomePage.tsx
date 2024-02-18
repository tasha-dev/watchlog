// Codes by mahdi tasha
// Forcing nextJS to render this component as client side component
'use client';

// Importing part
import { ReactNode, useEffect, useState } from "react";
import ContainerComponent from "@/chunk/containerComponent";
import Image from "next/image";
import mainImage from '@/public/img/page/home/firstSection/img-boy-tv.jpg';
import MovieListComponent from "@/chunk/movieListComponent";
import useFirebaseApp from "@/hook/useFirebaseApp";
import { DataSnapshot, getDatabase, onValue, ref } from "firebase/database";
import useFirebaseAuth from "@/hook/useFirebaseAuth";
import LoadingComponent from "@/chunk/loadingComponent";

// Defining types
interface dataType {
  name: string;
  score: number;
  addedDate: Date;
}

// Creating and exporting logged in home page as default
export default function LoggedInHomePage():ReactNode {
  // Defining states of component
  const [movies, setMovies] = useState<dataType[]>([]);
  const [series, setSeries] = useState<dataType[]>([]);
  const [moviesFetching, setMoviesFetching] = useState<boolean>(true);
  const [seriesFetching, setSeriesFetching] = useState<boolean>(true);

  // Getting data from firebase
  const app = useFirebaseApp();
  const auth = useFirebaseAuth();

  useEffect(() => { 
    if (auth.user) {
      const database = getDatabase();
      const databaseRefMovies = ref(database, `/movies/${auth.user.uid}`);
      const databaseRefSeries = ref(database, `/series/${auth.user.uid}`);

     onValue(databaseRefMovies, (snapshot:DataSnapshot) => {
        const value: {} | null = snapshot.val();
        const array:dataType[] | [null] = [];

        if (value !== null && Object.keys(value).length !== 0) {
          for (const key in value) {
            if (value.hasOwnProperty(key)) {
              // @ts-ignore
              const item:dataType = value[key];
              const addedDate = item.addedDate;
              const name = item.name;
              const score = item.score;

              array.push({
                name: name,
                score: score,
                addedDate: new Date(addedDate)
              })
            }
          }
        }

        setMovies(array);
        setMoviesFetching(false);
      })

      onValue(databaseRefSeries, (snapshot:DataSnapshot) => {
        const value: {} | null = snapshot.val();
        const array:dataType[] | [null] = [];

        if (value !== null && Object.keys(value).length !== 0) {
          for (const key in value) {
            if (value.hasOwnProperty(key)) {
              // @ts-ignore
              const item:dataType = value[key];
              const addedDate = item.addedDate;
              const name = item.name;
              const score = item.score;

              array.push({
                name: name,
                score: score,
                addedDate: new Date(addedDate)
              })
            }
          }
        }

        setSeries(array);
        setSeriesFetching(false);
      })
    }
  }, [auth])

  // Returning JSX
  return (
    <section>
      <Image width={1024} height={1024} alt="Image of a boy watching tv" src={mainImage.src} className="w-full h-[300px] object-cover" />
      <ContainerComponent size="small">
        {
          (moviesFetching)
            ? (
              <div className="h-[300px] flex items-center justify-center">
                 <LoadingComponent />
              </div>
            ) : <MovieListComponent title="movies" list={movies} />
        } 
        <div className="my-[20px] w-full h-[1px] dark:bg-lightBorder bg-darkBorder" />
        {
          (seriesFetching)
            ? (
              <div className="h-[300px] flex items-center justify-center">
                 <LoadingComponent />
              </div>
            ) : <MovieListComponent title="series" list={series} />
        } 
      </ContainerComponent>
    </section>
  );
}
