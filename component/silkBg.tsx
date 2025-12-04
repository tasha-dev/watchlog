// Codes by mahdi tasha
// Forcing next.js to render this component as client side component
"use client";

// Importing part
import { JSX } from "react";
import Silk from "./Silk";

// Creatingg and exporting SilkBg component as default
export default function SilkBg(): JSX.Element {
  // Returning JSX
  return (
    <div className="fixed left-0 top-0 w-dvw h-dvh -z-10 dark:invert-0 invert">
      <Silk />
    </div>
  );
}
