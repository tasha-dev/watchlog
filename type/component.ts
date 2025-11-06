// Codes by mahdi tasha
// Imporing part
import { ReactNode } from "react";

// Creating and exporting Type of props for components
export interface RootLayoutProps {
  children: ReactNode;
}

export interface HeaderProps {
  className?: string;
}

export interface DialogProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export interface FilterDropdownProps {
  filter: string;
  setFilter: (value: string) => void;
}
