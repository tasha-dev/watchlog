// Codes by mahdi tasha
// Importing part
import { ReactNode } from "react";

// Defining and exporting type of props
export interface propsType {
  name: 'chev-down';
  size: number;
}

// Creating and exporting icon component as default
export default function IconComponent({name, size}:propsType):ReactNode {
  // Conditional rendering
  if (name === 'chev-down') {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
      </svg>
    );
  }
}
