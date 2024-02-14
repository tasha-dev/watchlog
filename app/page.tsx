// Codes by mahdi tasha
// Forcing nextJS to redner this component as client side component
'use client';

// Importing part
import PageComponent from "@/component/pageComponent";
import TitleComponent from "@/chunk/titleComponent";
import { ReactNode, useState } from "react";
import NotLoggedInHomePage from "@/component/page/home/not-logged/notLoggedInHomePageComponent";

// Creating and exporting the home page as default
export default function HomePage():ReactNode {
  // Defining state of component
  const [userLoggedIn, setUserLoggedIn] = useState<boolean>(false);

  // Returning JSX
  return (
    <PageComponent> 
      {
        (userLoggedIn)
          ? (
            <TitleComponent tier={1}>User Is Logged in</TitleComponent>
          ) : <NotLoggedInHomePage /> 
      }
    </PageComponent>
  );
}
