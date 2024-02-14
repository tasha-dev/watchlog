// Codes by mahdi tasha
// Importing part
import { ReactNode } from "react";
import Link from "next/link";

// Defining type of props 
interface propsType {
  children: ReactNode;
  link?: string;
  className?: string;
}

// Creating and exporting button component as default
export default function ButtonComponent({children, className, link = ''}:propsType):ReactNode {
  // Conditional rendering
  if (link === '') {
    return (
      <button className={`px-[20px] py-[10px] rounded-[10px] font-normal text-[12px] text-white bg-violet-500 transition-all duration-500 hover:bg-violet-700 ${(className) ? className : ''}`}>
        {children}
      </button>
    );
  } else {  
    return (
      <Link href={link} className={`px-[20px] py-[10px] rounded-[10px] font-normal text-[12px] text-white bg-violet-500 transition-all duration-500 hover:bg-violet-700 ${(className) ? className : ''}`}>
        {children}
      </Link>
    );
  }
}
