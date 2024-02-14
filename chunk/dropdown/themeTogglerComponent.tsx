// Codes by mahdi tasha
// Forcing nextJS to render this component as client side component
'use client';

// Importing part
import { ReactNode } from "react";
import { useTheme } from "@/app/store";

// Creating and exporting theme toggler component as default
export default function ThemeTogglerComponent():ReactNode {
  // Defining theme 
  const { theme, setTheme } = useTheme();

  // Returning JSX
  return (
    <button              
      onClick={() => {
        (theme === 'dark') 
          ? setTheme('light')
          : setTheme('dark')
        }
      }
      className={'px-[10px] py-[5px] bg-transparent text-white w-full block text-left truncate transition-all duration-500 hover:bg-black/30 text-[14px] font-normal '}
    >
      Theme : {theme}
    </button>
  );
}
