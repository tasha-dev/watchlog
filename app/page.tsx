// Codes by mahdi tasha
// Forcing nextJS to redner this component as client side component
'use client';

// Importing part
import FirstSectionComponent from "@/component/page/home/logged/firstSectionComponent";
import PageComponent from "@/component/pageComponent";
import TitleComponent from "@/chunk/titleComponent";
import { ReactNode, useState } from "react";
import SecondSectionComponent from "@/component/page/home/logged/secondSectionComponent";
import ThirdSectionComponent from "@/component/page/home/logged/thirdSectionComponent";

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
          ) : (
            <>
              <FirstSectionComponent />
              <SecondSectionComponent />
              <ThirdSectionComponent />
            </>
          )
      }
    </PageComponent>
  );
}
