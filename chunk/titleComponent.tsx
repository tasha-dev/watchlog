// Codes by mahdi tasha
// Importing part
import { ReactNode } from "react";

// Defining type of prop
interface propsType {
  tier: 0 | 1 | 2 | 3;
  children: ReactNode;
  noMargin?: boolean;
  className?: string;
}

// Creating and exporting the title component as default
export default function TitleComponent({tier, children, noMargin = false, className}:propsType):ReactNode {
  // Conditional rendering
  if (tier === 0) {
    return (
      <h1 
        data-has-margin={(noMargin === false)}
        className={`lg:text-[42px] text-[32px] font-bold lg:data-[has-margin='true']:mb-[20px] data-[has-margin='true']:mb-[10px] text-lightText dark:text-darkText ${(className) ? className : ''}`}
      >
        {children}
      </h1>
    );
  } else if (tier === 1) {
    return (
      <h1 
        data-has-margin={(noMargin === false)}
        className={`lg:text-[18px] text-[14px] font-bold lg:data-[has-margin='true']:mb-[15px] data-[has-margin='true']:mb-[10px] text-lightText dark:text-darkText ${(className) ? className : ''}`}
      >
        {children}
      </h1>
    );
  } else if (tier === 2) {
    return (
      <h3 
        data-has-margin={(noMargin === false)}
        className={`lg:text-[14px] text-[12px] font-normal lg:data-[has-margin='true']:mb-[10px] data-[has-margin='true']:mb-[5px] text-lightText dark:text-darkText ${(className) ? className : ''}`}
      >
        {children}
      </h3>
    );
  } else if (tier === 3) {
    return (
      <h6
        data-has-margin={(noMargin === false)}
        className="lg:text-[12px] text-[10px] font-light lg:data-[has-margin='true']:mb-[5px] data-[has-margin='true']:mb-[2px] text-lightText dark:text-darkText"
      >
        {children}
      </h6>
    );
  }
}
