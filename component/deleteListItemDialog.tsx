// Codes by mahdi tasha
// Forcing next.js to render this component as client side component
"use client";

// Importing part
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
  Dialog,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Loader2, Trash } from "lucide-react";
import { sleep } from "@/lib/util";
import { toast } from "sonner";
import { JSX, useState } from "react";
import { DeleteListItemDialogProps } from "@/type/component";

// Creating and exporting DeleteListItemDialog component as default
export default function DeleteListItemDialog({
  id,
}: DeleteListItemDialogProps): JSX.Element {
  // Defining hooks
  const [open, setOpened] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  // Returning JSX
  return (
    <Dialog onOpenChange={setOpened} open={open}>
      <DialogTrigger asChild>
        <Button size={"icon-lg"} variant={"destructive"}>
          <Trash />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Confirm Deletion</DialogTitle>
          <DialogDescription>
            This item will be permanently removed. Do you want to continue?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button disabled={loading} variant={"ghost"}>
              Close
            </Button>
          </DialogClose>
          <Button
            variant={"destructive"}
            disabled={loading}
            onClick={async () => {
              setLoading(true);
              await sleep(5000);

              setLoading(false);
              setOpened(false);
              toast.success(`The ${id} item is deleted successfully`);
            }}
          >
            {loading ? <Loader2 className="animate-spin" /> : "Yes, Im sure"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
