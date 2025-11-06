// Codes by mahdi tasha
// Importing part
import { twMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";

// Creating and exporting utility functions
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
