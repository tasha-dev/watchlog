// Codes by mahdi tasha
// Importing part
import ContainerComponent from "@/chunk/containerComponent";
import FormComponent from "@/component/page/sign-up/formComponent";
import PageComponent from "@/component/pageComponent";
import { ReactNode } from "react";

// Creating and exporting sign up page as default
export default function LoginPage():ReactNode {
  // Returning JSX
  return (
    <PageComponent loginRequired={false}>
      <ContainerComponent size="small">
        <FormComponent />
      </ContainerComponent>
    </PageComponent>
  );
}

