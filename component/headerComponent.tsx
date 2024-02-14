// Codes by mahdi tasha
// Importing part
import { ReactNode } from "react";
import ContainerComponent from "@/chunk/containerComponent";
import TitleComponent from "@/chunk/titleComponent";
import ButtonComponent from "@/chunk/buttonComponent";
import DropdownComponent from "@/chunk/dropdown/dropdownComponent";
import DropDownLinkComponent from "@/chunk/dropdown/dropdownLinkComponent";
import ThemeTogglerComponent from "@/chunk/dropdown/themeTogglerComponent";

// Defining type of props
interface propsType {
  loggedIn: boolean;
}

// Creating and exporting header component as default
export default function HeaderComponent({loggedIn}:propsType):ReactNode {
  // Returning JSX
  return (
    <header className="dark:bg-darkBg/30 bg-lightBg/30 lg:fixed static top-0 left-0 w-full z-20 backdrop-blur-xl">
      <ContainerComponent size="large" className="flex items-center justify-between gap-[20px]">
        <TitleComponent noMargin tier={1}>WatchLog</TitleComponent>
        <div className="flex items-center justify-between gap-[20px]">
          {
            (!loggedIn)
              ? <ButtonComponent className="lg:flex hidden" link="/login">Log In</ButtonComponent>
              : false
          } 
          <DropdownComponent title="Links">
            <ThemeTogglerComponent />
            {
              (!loggedIn)
                ? <DropDownLinkComponent className="lg:hidden block" link="/login">Login</DropDownLinkComponent>
                : false
            }
          </DropdownComponent>
        </div>
      </ContainerComponent>
    </header>
  );
}
