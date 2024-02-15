// Codes by mahdi tasha
// Forcing nextJS to redner this component as client side component
'use client';

// Importing part
import PageComponent from "@/component/pageComponent";
import { ReactNode } from "react";
import NotLoggedInHomePage from "@/component/page/home/not-logged/notLoggedInHomePageComponent";
import LoggedInHomePage from "@/component/page/home/logged/loggedInHomePage";
import { useAuth } from "./store";

// Creating and exporting the home page as default
export default function HomePage():ReactNode {
  // Defining state of component
  const { loggedIn } = useAuth();

  // Returning JSX
  return (
    <PageComponent> 
      {
        (loggedIn)
          ? <LoggedInHomePage />
          : <NotLoggedInHomePage /> 
      }
    </PageComponent>
  );
}
