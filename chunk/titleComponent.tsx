// Codes by mahdi tasha
// Importing part
import { ReactNode } from "react";

// Defining type of prop
interface propsType {
  tier: 1 | 2 | 3;
  theme: 'light' | 'dark';
  children: ReactNode;
}

// Creating and exporting the title component as default
export default function TitleComponent({tier, theme, children}:propsType):ReactNode {
  // Conditional rendering
  if (tier === 1) {
    return (
      <h1 
        data-theme={theme} 
        className="lg:text-[18px] text-[14px] font-bold lg:mb-[15px] mb-[10px] data-[theme='light']:text-lightText data-[theme='dark']:text-darkText"
      >
        {children}
      </h1>
    );
  } else if (tier === 2) {
    return (
      <h3 
        data-theme={theme} 
        className="lg:text-[14px] text-[12px] font-normal lg:mb-[10px] mb-[5px] data-[theme='light']:text-lightText data-[theme='dark']:text-darkText"
      >
        {children}
      </h3>
    );
  } else {
    return (
      <h3 
        data-theme={theme} 
        className="lg:text-[12px] text-[10px] font-light lg:mb-[5px] mb-[2px] data-[theme='light']:text-lightText data-[theme='dark']:text-darkText"
      >
        {children}
      </h3>
    );
  }
}
