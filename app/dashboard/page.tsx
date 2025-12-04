// Codes by mahdi tasha
// Forcing next.js to render this component as client side component
"use client";

// Importing part
import AddListItemDialog from "@/component/addListItemDialog";
import FilterDropdown from "@/component/filterDropdown";
import Header from "@/component/header";
import ListItem from "@/component/listItem";
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
        <div className="flex items-center justify-between gap-3 mb-10">
          <span className="font-semibold text-2xl text-left flex-1 truncate block">
            List
          </span>
          <div className="flex items-center justify-end gap-3">
            <AddListItemDialog />
            <FilterDropdown filter={filter} setFilter={setFilter} />
          </div>
        </div>
        <div className="space-y-5">
          <ListItem
            className="w-full"
            data={{
              createdAt: new Date().toISOString(),
              id: 1,
              index: 1,
              stars: 5,
              title: "The Shawshang Redemption",
            }}
          />
        </div>
      </div>
    </>
  );
}
