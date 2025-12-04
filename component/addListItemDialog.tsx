// Codes by mahdi tasha
// Importing part
import { JSX, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { DialogProps } from "@/type/component";
import z from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { DialogClose, DialogTrigger } from "@radix-ui/react-dialog";
import { sleep } from "@/lib/util";
import { Loader2, Plus } from "lucide-react";
import { toast } from "sonner";

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

// Creating and exporting AddListItemDialog component as default
export default function AddListItemDialog(): JSX.Element {
  // Defining hooks
  const [open, setOpened] = useState<boolean>(false);
  const form = useForm<formType>({
    resolver: zodResolver(formSchema),
  });

  // Handling submitEvent
  const submitHandler: SubmitHandler<formType> = async (data) => {
    await sleep(3000);
    toast.success(`${data.name} Is now added to your watched list`);
    setOpened(false);
  };

  // Returning JSX
  return (
    <Dialog open={open} onOpenChange={setOpened}>
      <DialogTrigger asChild>
        <Button variant={"outline"}>
          <Plus />
          Add New Item
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add new item to you Watchlog!</DialogTitle>
          <DialogDescription>
            Your watchlist is synced to the cloud, so you can access it anytime,
            on any device.
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
                  type="button"
                  variant={"outline"}
                  disabled={form.formState.isSubmitting}
                >
                  Close
                </Button>
              </DialogClose>
              <Button disabled={form.formState.isSubmitting} type="submit">
                {form.formState.isSubmitting ? (
                  <Loader2 className="animate-spin relative" />
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
