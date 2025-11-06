// Codes by mahdi tasha
// Importing part
import { JSX } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "./ui/dialog";
import { DialogProps } from "@/type/component";

// Creating and exporting AuthDialog component as default
export default function AuthDialog({
  onOpenChange,
  open,
}: DialogProps): JSX.Element {
  // Returning JSX
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogTitle>AUTH</DialogTitle>
        <DialogDescription>AUTH</DialogDescription>
      </DialogContent>
    </Dialog>
  );
}
