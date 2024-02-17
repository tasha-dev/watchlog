// Codes by mahdi tasha
// Importing part
import ContainerComponent from "@/chunk/containerComponent";
import FormComponent from "@/component/page/login/formComponent";
import PageComponent from "@/component/pageComponent";
import { ReactNode } from "react";
import useFirebaseAuth from "@/hook/useFirebaseAuth";

// Creating and exporting login page as default
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
