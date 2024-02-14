// Codes by mahdi tasha
// Importing part
import { ReactNode } from "react";

// Defining type of props
interface propsType {
  children: string;
  noMargin?: boolean;
}

// Creating and exporting paragraph component as default
export default function ParagraphComponent({children, noMargin = false}:propsType):ReactNode {
  // Returning JSX
  return (
    <p
      data-has-margin={(noMargin === false)}
      className="text-[14px] dark:text-lightBorder text-darkBorder leading-[20px] font-normal data-[has-margin='true']:mb-[20px] data-[has-margin='false']:mb-0"
    >
      {children}
    </p>
  );
}
