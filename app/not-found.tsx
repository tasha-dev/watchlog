// Codes by mahdi tasha
// Importing part
import ContainerComponent from "@/chunk/containerComponent";
import TitleComponent from "@/chunk/titleComponent";
import PageComponent from "@/component/pageComponent";
import { ReactNode } from "react";

// Creating and exporting 404 page as default
export default function NotFoundPage():ReactNode {
  // returning JSX
  return (
    <PageComponent loginRequired={false}>
      <ContainerComponent size="large" className="min-h-screen flex items-center justify-center">
        <TitleComponent tier={0} className="text-center">
          The page you were looking for is  <br />
          <span className="text-violet-500">not Found</span> 
        </TitleComponent>
      </ContainerComponent>
    </PageComponent>
  );
}
