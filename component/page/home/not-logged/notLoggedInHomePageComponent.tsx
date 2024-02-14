// Codes by mahdi tasha
// Importing part
import { ReactNode } from "react";
import FirstSectionComponent from "@/component/page/home/not-logged/section/firstSectionComponent";
import SecondSectionComponent from "@/component/page/home/not-logged/section/secondSectionComponent";
import ThirdSectionComponent from "@/component/page/home/not-logged/section/thirdSectionComponent";

// Creating and exporting not logged in home page as default
export default function NotLoggedInHomePage():ReactNode {
  // Returning JSX
  return (
    <>
      <FirstSectionComponent />              
      <SecondSectionComponent />              
      <ThirdSectionComponent />
    </>
  );
}
