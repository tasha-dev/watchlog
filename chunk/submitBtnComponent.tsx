// Codes by mahdi tasha
// Importing part
import {ReactNode} from "react";
import LoadingComponent from "./loadingComponent";

// Defining type of props
interface propsType {
    isValidating: boolean;
    className?: string;
}

// Creating and exporting submit btn as default
export default function SubmitBtnComponent({isValidating, className}:propsType):ReactNode {
    // Returning JSX
    return (
        <button 
          disabled={isValidating} 
          className={`px-[20px] py-[10px] flex items-center justify-center text-center rounded-[10px] font-normal text-[12px] text-white bg-violet-500 transition-all duration-500 hover:bg-violet-700 ${(className) ? className : ''}`}
        >
            {
                (isValidating)
                    ? <LoadingComponent /> 
                    : 'Submit'
            }
        </button>
    );
}
