// Codes by mahdi tasha
// Forcing nextJS to render this component as client side component
'use client';

// Importing part
import { useRouter } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";
import HeaderComponent from "./headerComponent";
import { useTheme } from "@/app/store";
import useFirebaseAuth from "@/hook/useFirebaseAuth";
import LoadingComponent from "@/chunk/loadingComponent";

// Defining type of props
interface propsType {
  children: ReactNode;
  loginRequired?: boolean;
}

// Creating and exporting page component as default
export default function PageComponent({loginRequired, children}:propsType):ReactNode {
  // Defining auth
  const auth = useFirebaseAuth();

  // Defining theme
  const { theme } = useTheme();

  // Using useEffect to get data changes of theme
  useEffect(() => {
    const htmlElement:Element | null = document.querySelector('html');

    (theme === 'dark')
      ? htmlElement?.classList.add('dark') 
      : htmlElement?.classList.remove('dark')
  }, [theme])

  // Defining router 
  const router = useRouter();

  // Defining inner function of jsx to show
  function ReturnedElements():ReactNode {
    // Returning JSX
    return (
      <div className="lg:mt-[100px] mt-0">
        <HeaderComponent loggedIn={(auth.user === null)} />
        {children}
      </div>
    );
  }

  // Conditional rendering
  if (auth.loading) {
    return (
      <div className="flex justify-center items-center dark:bg-darkBg bg-lightBg fixed top-0 left-0 w-full h-full z-20">
        <LoadingComponent />
      </div>
    );
  } else {
    if (loginRequired) {
      if (auth.user !== null) {return <ReturnedElements />} 
      else {router.push('/login');}
    } else {return <ReturnedElements />}
  }
}
