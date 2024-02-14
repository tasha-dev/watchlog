// Codes by mahdi tasha
// Forcing nextJS to render this component as client side component
'use client';

// Importing part
import { useRouter } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";
import HeaderComponent from "./headerComponent";
import { useTheme } from "@/app/store";

// Defining type of props
interface propsType {
  children: ReactNode;
  loginRequired?: boolean;
}

// Creating and exporting page component as default
export default function PageComponent({loginRequired, children}:propsType):ReactNode {
  // Defining states of the component
  // TODO:Remove With Firebase Later
  const [userLoggedIn, setUserLoggedIn] = useState<boolean>(true);

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
        <HeaderComponent loggedIn={userLoggedIn} />
        {children}
      </div>
    );
  }

  // Conditional rendering
  if (loginRequired) {
    if (userLoggedIn) {return <ReturnedElements />} 
    else {router.push('/login');}
  } else {return <ReturnedElements />}
}
