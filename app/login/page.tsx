// Codes by mahdi tasha
// Importing part
import ContainerComponent from "@/chunk/containerComponent";
import PageComponent from "@/component/pageComponent";
import { ReactNode } from "react";

// Creating and exporting login page as default
export default function LoginPage():ReactNode {
  // Returning JSX
  return (
    <PageComponent loginRequired={false}>
      <ContainerComponent size="large">
      asdasd
      </ContainerComponent>
    </PageComponent>
  );
}
