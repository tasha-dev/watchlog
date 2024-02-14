// Codes by mahdi tasha
// Importing part
import { ReactNode } from "react";
import Link from "next/link";

// Defining type of props
interface propsType {
  link: string;
  children: ReactNode;
  className?: string;
}

// creating and exporting the links in dropdown component as default
export default function DropDownLinkComponent({link, children, className}:propsType):ReactNode {
  // Returning JSX
  return (
   <li>
     <Link 
        href={link}
        className={`px-[10px] py-[5px] bg-transparent text-white w-full block truncate transition-all duration-500 hover:bg-black/30 text-[14px] font-normal ${(className) ? className : ''}`}
      >
        {children}
      </Link>
   </li>
  );
}
