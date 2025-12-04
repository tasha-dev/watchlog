// Codes by mahdi tasha
// Forcing next.js to render this component as client side component
"use client";

// Importing part
import { cn } from "@/lib/util";
import { ListItemProps } from "@/type/component";
import { JSX } from "react";

// Creating and exporting ListItem component as defualt
export default function ListItem({
  data,
  className,
}: ListItemProps): JSX.Element {
  // Returning JSX
  return (
    <div className={cn("", className)}>
      <span>HI</span>
    </div>
  );
}
