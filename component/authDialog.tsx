// Codes by mahdi tasha
// Forcing next.js to render this component as client side component
"use client";

// Importing part
import { JSX } from "react";
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
import { DialogClose } from "@radix-ui/react-dialog";
import { sleep } from "@/lib/util";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

// Defining form scheama
const formSchema = z.object({
  email: z
    .string({
      message: "Please fill this field",
    })
    .email(),
  password: z
    .string({
      message: "Please fill this field",
    })
    .min(8)
    .max(12),
});

// Defining form type
type formType = z.infer<typeof formSchema>;

// Creating and exporting AuthDialog component as default
export default function AuthDialog({
  onOpenChange,
  open,
}: DialogProps): JSX.Element {
  // Defining hooks
  const router = useRouter();
  const form = useForm<formType>({
    resolver: zodResolver(formSchema),
  });

  // Handling submitEvent
  const submitHandler: SubmitHandler<formType> = async (data) => {
    await sleep(3000);
    toast.success("Welcom to watchlog");
    router.push("/dashboard");
    onOpenChange?.(false);
  };

  // Returning JSX
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Sign in to WatchLog</DialogTitle>
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
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email :</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="example@gmail.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password :</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="At least 8 character and at most 12 characters"
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
