// Codes by mahdi tasha
// Imporing part
import { ReactNode } from "react";

// Creating and exporting Type of props for components
export interface RootLayoutProps {
  children: ReactNode;
}

export interface HeaderProps {
  inDashboard?: boolean;
  className?: string;
}

export interface DialogProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export type Filters =
  | "all"
  | "most-stars"
  | "least-stars"
  | "createdAt"
  | "alphabetic";

export interface FilterDropdownProps {
  filter: Filters;
  setFilter: (value: Filters) => void;
}

export interface ListItemProps {
  className?: string;
  data: {
    index: number;
    title: string;
    stars: number;
    createdAt: string;
    id: number;
  };
}

export interface DeleteListItemDialogProps {
  id: number;
}

export interface EditListItemDialogProps {
  id: number;
  name: string;
  stars: number;
}
