// Codes by mahdi tasha
// Importing part
import { ReactNode } from "react";

// Defining type of props
interface propsType {
  children: ReactNode;
  size: 'large' | 'small';
  className?: string;
}

// Creating and exporting the container component as default
export default function ContainerComponent({children, size, className}:propsType):ReactNode {
  // Returning JSX
  return (
    <div
      className={
        (size === 'large') 
          ? `max-w-[1000px] mx-auto p-[20px] ${(className) ? className : ''}`
          : `max-w-[750px] mx-auto p-[20px] ${(className) ? className : ''}`
      }
    >
      {children}
    </div>
  );
}
