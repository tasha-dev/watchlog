// Codes by mahdi tasha
// Importing part
import ContainerComponent from "@/chunk/containerComponent";
import PageComponent from "@/component/pageComponent";
import { ReactNode } from "react";

// Creating and exporting the home page as default
export default function HomePage():ReactNode {
  // Returning JSX
  return (
    <PageComponent>
      <ContainerComponent size="large">
        <div className="h-[10000000px] bg-red-600 w-full " />
      </ContainerComponent> 
    </PageComponent>
  );
}
