// Codes by mahdi tasha
// Importing part
import { JSX } from "react";
import { Dialog, DialogContent } from "./ui/dialog";
import { DialogProps } from "@/type/component";

// Creating and exporting AuthDialog component as default
export default function AuthDialg({
  onOpenChange,
  open,
}: DialogProps): JSX.Element {
  // Returning JSX
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <h1>HELLO WORLD</h1>
      </DialogContent>
    </Dialog>
  );
}
