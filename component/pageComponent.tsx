// Codes by mahdi tasha
// Forcing nextJS to render this component as client side component
'use client';

// Importing part
import { useRouter } from "next/navigation";
import { ReactNode, useState } from "react";
import HeaderComponent from "./headerComponent";

// Defining type of props
interface propsType {
  children: ReactNode;
  loginRequired?: boolean;
}

// Creating and exporting page component as default
export default function PageComponent({loginRequired, children}:propsType):ReactNode {
  // Defining states of the component
  // TODO:Remove With Firebase Later
  const [userLoggedIn, setUserLoggedIn] = useState<boolean>(false);

  // Defining router 
  const router = useRouter();

  // Defining inner function of jsx to show
  function ReturnedElements():ReactNode {
    // Returning JSX
    return (
      <div>
        <HeaderComponent />
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
