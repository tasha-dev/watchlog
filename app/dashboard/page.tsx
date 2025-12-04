// Codes by mahdi tasha
// Forcing next.js to render this component as client side component
"use client";

// Importing part
import AddListItemDialog from "@/component/addListItemDialog";
import FilterDropdown from "@/component/filterDropdown";
import Header from "@/component/header";
import ImportDialog from "@/component/importDialog";
import ListItem from "@/component/listItem";
import { Filters, ListItemData } from "@/type/component";
import { JSX, useState } from "react";

// Defining gake data to render
const data: ListItemData[] = [];

// Creating and exporting Home page as default
export default function HomePage(): JSX.Element {
  // Defining hooks
  const [filter, setFilter] = useState<Filters>("all");

  // Defining variables
  let dataToRender;

  switch (filter) {
    case "all":
      dataToRender = data;
      break;

    case "most-stars":
      dataToRender = [...data].sort((a, b) => b.stars - a.stars);
      break;

    case "least-stars":
      dataToRender = [...data].sort((a, b) => a.stars - b.stars);
      break;

    case "createdAt":
      dataToRender = [...data].sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
      );
      break;

    case "alphabetic":
      dataToRender = [...data].sort((a, b) => a.title.localeCompare(b.title));
      break;

    default:
      dataToRender = data;
  }

  // Returning JSX
  return (
    <>
      <Header className="py-4" inDashboard />
      <div className="max-w-4xl p-5 mx-auto">
        <div className="flex items-center justify-between gap-3 mb-10">
          <span className="font-semibold lg:text-2xl text-lg text-left flex-1 truncate block">
            List
          </span>
          <div className="flex items-center justify-end gap-3">
            <AddListItemDialog />
            <FilterDropdown filter={filter} setFilter={setFilter} />
            <ImportDialog />
          </div>
        </div>
        <div className="space-y-5">
          {dataToRender.map((item, index) => (
            <ListItem
              key={index}
              className="w-full"
              data={{
                createdAt: item.createdAt,
                id: item.id,
                index: index + 1,
                stars: item.stars,
                title: item.title,
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
}
