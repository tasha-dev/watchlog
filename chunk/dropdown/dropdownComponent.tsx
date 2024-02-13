// Codes by mahdi tasha
// Forcing nextJS to render this component as client side component
'use client';

// Importing part
import { ReactNode , useState } from "react";
import IconComponent from "@/chunk/iconComponent";

// Defining type of props
interface propsType {
  title: string;
  children: ReactNode;
}

// Creating and exporting the dropdown component as default
export default function DropdownComponent({title, children}:propsType):ReactNode {
  // Defining state of component
  const [opened, setOpened] = useState(false);

  // Returning JSX
  return (
    <div className="relative">
      <button
        onClick={() => {
          (opened)
            ? setOpened(false)
            : setOpened(true);
        }}
        data-opened={opened}
        className="px-[20px] transition-all duration-500 py-[10px] rounded-[10px] bg-black/20 flex items-center justify-between text-[12px] text-white border data-[opened='true']:border-violet-500 data-[opened='false']:border-transparent"
      >
        {title}
        <i className="ml-[20px] tex-text-white"><IconComponent size={10} name="chev-down" /></i>
      </button>
      <div 
        data-opened={opened}
        className="absolute top-[130%] transition-all duration-500 origin-top-right right-0 bg-black/20 py-[20px] rounded-[10px] backdrop-blur w-[220px] border border-violet-500 data-[opened='false']:scale-0 data-[opened='false']:opacity-0 data-[opened='true']:scale-100 data-[opened='true']:opacity-100"
      >
        {children}
      </div>  
    </div>
  );
}
