// Codes by mahdi tasha
// Forcing next.js to render this component as client side component
"use client";

// Importing part
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuRadioItem,
} from "@/component/ui/dropdown-menu";
import { Button } from "@/component/ui/button";
import { FilterDropdownProps } from "@/type/component";
import { DropdownMenuRadioGroup } from "@radix-ui/react-dropdown-menu";
import { Filter } from "lucide-react";
import { JSX } from "react";

// Creating and exporting FilterDropdown page as default
export default function FilterDropdown({
  filter,
  setFilter,
}: FilterDropdownProps): JSX.Element {
  // Returning JSX
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"outline"}>
          <Filter />
          Filters
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        <DropdownMenuRadioGroup value={filter} onValueChange={setFilter}>
          <DropdownMenuRadioItem value="most-stars">
            Most Stars
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="least-stars">
            Least Stars
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
