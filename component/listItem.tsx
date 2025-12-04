// Codes by mahdi tasha
// Forcing next.js to render this component as client side component
"use client";

// Importing part
import { cn } from "@/lib/util";
import { ListItemProps } from "@/type/component";
import { Circle, Star } from "lucide-react";
import { JSX } from "react";
import DeleteListItemDialog from "./deleteListItemDialog";
import EditListItemDialog from "./editListItemDialog";

// Creating and exporting ListItem component as defualt
export default function ListItem({
  data,
  className,
}: ListItemProps): JSX.Element {
  // Returning JSX
  return (
    <div
      className={cn(
        "border rounded-md p-3 flex text-foreground items-center justify-between gap-3",
        className,
      )}
    >
      <div className="flex items-center justify-start gap-3 flex-1">
        <div className="flex items-center justify-start gap-3 shrink-0">
          <Circle className="fill-current text-current size-4 shrink-0" />
          <span className="text-current block text-left truncate text-lg font-semibold">
            {data.index}
          </span>
        </div>
        <span className="text-left truncate block text-base text-current font-semibold">
          {data.title}
        </span>
      </div>
      <div className="flex items-center justify-end gap-3 shrink-0">
        <div className="flex items-center justify-end gap-2">
          <Star className="text-current fill-current size-4" />
          {data.stars}
        </div>
        <EditListItemDialog id={data.id} name={data.title} stars={data.stars} />
        <DeleteListItemDialog id={data.id} />
      </div>
    </div>
  );
}
