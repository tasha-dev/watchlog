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

// Defining filters
const filters = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Most Stars",
    value: "most-stars",
  },
  {
    label: "Least Stars",
    value: "least-stars",
  },
  {
    label: "Date Added",
    value: "createdAt",
  },
  {
    label: "Alphabetic",
    value: "alphabetic",
  },
];

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
      <DropdownMenuContent align="end" sideOffset={10}>
        <DropdownMenuRadioGroup value={filter} onValueChange={setFilter}>
          {filters.map((item, index) => (
            <DropdownMenuRadioItem
              value={item.value}
              key={index}
              className="cursor-pointer"
            >
              {item.label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
