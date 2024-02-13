// Codes by mahdi tasha
// Importing part
import { ReactNode } from "react";
import ContainerComponent from "@/chunk/containerComponent";
import TitleComponent from "@/chunk/titleComponent";
import ButtonComponent from "@/chunk/buttonComponent";
import DropdownComponent from "@/chunk/dropdown/dropdownComponent";

// Creating and exporting header component as default
export default function HeaderComponent():ReactNode {
  // Returning JSX
  return (
    <header>
      <ContainerComponent size="large" className="flex items-center justify-between gap-[20px]">
        <TitleComponent tier={1} theme="dark">WatchLog</TitleComponent>
        <div className="flex items-center justify-between gap-[20px]">
          <ButtonComponent link="/login">Log In</ButtonComponent>
          <DropdownComponent title="Links">
            asdasd
          </DropdownComponent>
        </div>
      </ContainerComponent>
    </header>
  );
}
