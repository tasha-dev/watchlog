// Codes by mahdi tasha
// Forcing nextJS to render this component as client side component
'use client';

// Importing part
import ContainerComponent from "@/chunk/containerComponent";
import TitleComponent from "@/chunk/titleComponent";
import PageComponent from "@/component/pageComponent";
import { ReactNode } from "react";

// Creating and exporting error page as default
export default function ErrorPage():ReactNode {
  // returning JSX
  return (
    <PageComponent loginRequired={false}>
      <ContainerComponent size="large" className="min-h-screen flex items-center justify-center">
        <TitleComponent tier={0} className="text-center">
          An <span className="text-violet-500">Error</span> has happend 
        </TitleComponent>
      </ContainerComponent>
    </PageComponent>
  );
}

