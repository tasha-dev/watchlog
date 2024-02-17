// Codes by mahdi tasha
// Forcing nextJS to render this component as client side component
'use client';

// Importig part
import { ReactNode, useEffect, useState } from "react";
import MovieItemComponent from "./movieItemComponent";
import TitleComponent from "./titleComponent";
import ButtonComponent from "./buttonComponent";
import { z } from 'zod';
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import InputComponent from "./inputComponent";
import SubmitBtnComponent from "./submitBtnComponent";
import useFirebaseApp from "@/hook/useFirebaseApp";
import { getDatabase, ref, set } from "firebase/database";
import useFirebaseAuth from "@/hook/useFirebaseAuth";

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

// Defining type of form
const formSchema = z.object({
  count: z.string().regex(/\b(?:[0-9]|10)\b/),
  name: z.string().min(1).max(100)
})

type formType = z.infer<typeof formSchema>;

// Creating and exporting move list comonent as default
export default function MovieListComponent({title, list}:propsType):ReactNode {
  // Defining state of component
  const [isFormShowing, setFormShowing] = useState<boolean>(false);
  const [isValidating, setValidating] = useState<boolean>(false);

  // Defining useForm hook
  const {
    register,
    setError,
    handleSubmit,
    formState: {errors}
  } = useForm<formType>({
    resolver: zodResolver(formSchema)
  });

  // Defining firebase 
  const auth = useFirebaseAuth();
  const firebaseApp = useFirebaseApp();
  const database = getDatabase(firebaseApp);
  const databaseRef = ref(database, '/');

  useEffect(() => {
    console.log(auth);
  }, [])

  // Defining a function to handle submit of form
  const onSubmitHandler:SubmitHandler<formType> = (data) => {
    setValidating(true);

    set(databaseRef, {
      massage: 'Happy'
    })
     .then(() => {
        setFormShowing(false);
        setValidating(false);
      })
     .catch(() => {
        setValidating(false);
        setError('root', {message: 'There was an error. Please try again.'})
      })
  }

  // Returning JSX
  return (
    <div>
      <div className="flex items-center justify-between flex-wrap gap-[20px]">
          <TitleComponent noMargin tier={0}>{`${title[0].toUpperCase()}${title.slice(1, title.length)}`}</TitleComponent>
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
        {  
          (isFormShowing)
            ? (
              <form onSubmit={handleSubmit(onSubmitHandler)} className="my-[30px]">
                <div className="grid lg:grid-cols-3 grid-cols-1 gap-[10px] mb-[10px]">
                  <InputComponent registerName="name" label="Name" register={register} errorText={errors.name?.message} className="lg:col-span-2 grid-cols-1" />
                  <InputComponent registerName="count" label="Score" register={register} errorText={errors.count?.message} />
                </div>
                {
                  (errors.root?.message)
                    ? (
                      <div className="mt-[20px]">
                         <p className="text-red-600 lg:text-[16px] text-[13px] font-bold">
                          {errors.root?.message}
                         </p>
                      </div>
                  ) : false
                }
                <SubmitBtnComponent isValidating={isValidating} className="w-full" />
              </form>
            ) : false
        }
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
    </div>
  );
}
