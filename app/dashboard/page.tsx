// Codes by mahdi tasha
// Forcing next.js to render this component as client side component
"use client";

// Importing part
import AddListItemDialog from "@/component/addListItemDialog";
import FilterDropdown from "@/component/filterDropdown";
import Header from "@/component/header";
import { JSX, useState } from "react";

// Creating and exporting Home page as default
export default function HomePage(): JSX.Element {
  // Defining hooks
  const [filter, setFilter] = useState<string>("most-stars");

  // Returning JSX
  return (
    <>
      <Header className="py-4" />
      <div className="max-w-4xl p-5 mx-auto">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center justify-end gap-3">
            <FilterDropdown filter={filter} setFilter={setFilter} />
            <AddListItemDialog />
          </div>
          <span className="font-semibold text-base text-right flex-1 truncate block">
            Your List
          </span>
        </div>
      </div>
    </>
  );
}
