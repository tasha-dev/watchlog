// Codes by mahdi tasha
// Forcing next.js to render this component as client side component
"use client";

// Importing part
import { JSX, useState } from "react";
import {
  DialogTitle,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
  DialogFooter,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Import, Loader2 } from "lucide-react";
import Upload from "./upload";
import { ListItemData } from "@/type/component";
import { DialogClose } from "@radix-ui/react-dialog";
import { sleep } from "@/lib/util";
import { toast } from "sonner";

// Creating and exporting ImportDialog component as default
export default function ImportDialog(): JSX.Element {
  // Defining hooks
  const [isLoading, setLoading] = useState<boolean>(false);
  const [open, setOpened] = useState<boolean>(false);
  const [fileContent, setFileContent] = useState<string>("");
  const result: ListItemData[] = fileContent
    .trim()
    .split("\n")
    .map((line) => {
      const withoutStars = line.replace(/[\s⭐]+$/g, "").trim();
      const firstUnderscoreIndex = withoutStars.indexOf("_");
      const numberPart = withoutStars.slice(0, firstUnderscoreIndex);
      const title = withoutStars.slice(firstUnderscoreIndex + 1);
      const index = parseInt(numberPart, 10);
      const stars = (line.match(/⭐/g) || []).length;

      return {
        index,
        id: index,
        title: title.trim(),
        stars,
        createdAt: new Date().toISOString(),
      };
    });

  // Returning JSX
  return (
    <Dialog open={open} onOpenChange={setOpened}>
      <DialogTrigger asChild>
        <Button variant={"outline"} size={"icon-lg"}>
          <Import />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Import</DialogTitle>
          <DialogDescription>
            Import your .txt file for instant edit and all fatures of the
            watchlog
          </DialogDescription>
        </DialogHeader>
        <div className="max-h-[500px]">
          <Upload
            onValueChange={(newFile) => {
              if (newFile) {
                setFileContent("");
                const reader = new FileReader();

                reader.onload = (e) => {
                  const text = e.target?.result;

                  if (typeof text === "string") {
                    setFileContent(text);
                  }
                };

                reader.readAsText(newFile);
              }
            }}
          />
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant={"outline"} disabled={isLoading}>
              Close
            </Button>
          </DialogClose>
          <Button
            disabled={isLoading || fileContent === undefined}
            onClick={async () => {
              setLoading(true);
              await sleep(5000);

              setLoading(false);
              setOpened(false);
              toast.success("The contents are uploaded!");
            }}
          >
            {isLoading ? (
              <Loader2 className="animate-spin relative" />
            ) : (
              "Submit"
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
