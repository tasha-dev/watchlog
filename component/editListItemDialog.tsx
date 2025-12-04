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
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Button } from "./ui/button";
import { Loader2, Pencil } from "lucide-react";
import { sleep } from "@/lib/util";
import { Input } from "./ui/input";
import { toast } from "sonner";
import { EditListItemDialogProps } from "@/type/component";
import { JSX, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";

// Defining form scheama
const formSchema = z.object({
  name: z
    .string({
      message: "Please fill this field",
    })
    .min(1)
    .max(256),
  score: z
    .string()
    .refine((value) => Number(value) >= 1, {
      message: "The score should be greater or equal to 1",
    })
    .refine((value) => Number(value) <= 5, {
      message: "The score should be less or equal to 5",
    }),
});

// Defining form type
type formType = z.infer<typeof formSchema>;

// Creating and exporting EditListItemDialog component as default
export default function EditListItemDialog({
  id,
  name,
  stars,
}: EditListItemDialogProps): JSX.Element {
  // Defining hooks
  const [open, setOpened] = useState<boolean>(false);
  const form = useForm<formType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: name,
      score: stars.toString(),
    },
  });

  // Handling submitEvent
  const submitHandler: SubmitHandler<formType> = async (data) => {
    await sleep(3000);
    toast.success(`${name} Item has been changed!`);
    setOpened(false);
  };

  // Returning JSX
  return (
    <Dialog onOpenChange={setOpened} open={open}>
      <DialogTrigger asChild>
        <Button size={"icon-lg"} variant={"outline"}>
          <Pencil />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit</DialogTitle>
          <DialogDescription>
            Make changes to the item details below. Don’t forget to save when
            you are done.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(submitHandler)}
            className="space-y-8"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name :</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="The Grimsby Brothers"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="score"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Score :</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      min={1}
                      max={5}
                      placeholder="At least 1 and at most 5"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <DialogClose asChild>
                <Button
                  disabled={form.formState.isSubmitting}
                  variant={"ghost"}
                >
                  Close
                </Button>
              </DialogClose>
              <Button
                disabled={form.formState.isSubmitting}
                onClick={form.handleSubmit(submitHandler)}
              >
                {form.formState.isSubmitting ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  "Submit"
                )}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
