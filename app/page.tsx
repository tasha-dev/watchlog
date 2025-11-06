// Codes by mahdi tasha
// Importing part
import Header from "@/component/header";
import { JSX } from "react";

// Creating and exporting Home page as default
export default function HomePage(): JSX.Element {
  // Returning JSX
  return (
    <>
      <Header className="h-[70px]" />
      <div className="h-[calc(100dvh-70px)] w-dvw flex items-center justify-center overflow-hidden text-foreground">
        <div></div>
      </div>
    </>
  );
}
