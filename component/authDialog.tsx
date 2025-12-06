// Codes by mahdi tasha
// Forcing next.js to render this component as client side component
"use client";

// Importing part
import { JSX } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/component/ui/tabs";
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
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { signInWithEmail, signUpWithEmail } from "@/lib/firebase/auth";

// Defining form scheama
const loginFormSchema = z.object({
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

const signUpFormSchema = z.object({
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
  passwordRepeat: z
    .string({
      message: "Please fill this field",
    })
    .min(8)
    .max(12),
});

// Defining form type
type loginFormType = z.infer<typeof loginFormSchema>;
type signupFormType = z.infer<typeof signUpFormSchema>;

// Creating and exporting AuthDialog component as default
export default function AuthDialog({
  onOpenChange,
  open,
}: DialogProps): JSX.Element {
  // Defining hooks
  const router = useRouter();
  const loginForm = useForm<loginFormType>({
    resolver: zodResolver(loginFormSchema),
  });

  const signupForm = useForm<signupFormType>({
    resolver: zodResolver(signUpFormSchema),
  });

  // Handling submitEvents
  const loginSubmitHandler: SubmitHandler<loginFormType> = async (data) => {
    await signInWithEmail(data.email, data.password)
      .then(() => {
        toast.success("Welcom to watchlog");
        router.push("/dashboard");
        onOpenChange?.(false);
      })
      .catch(() => {
        loginForm.setError("root", {
          message:
            "There was an error while logging in. please try again later.",
        });
      });
  };

  const signUpSubmitHandler: SubmitHandler<signupFormType> = async (data) => {
    if (data.password !== data.passwordRepeat) {
      signupForm.setError("passwordRepeat", {
        message: "The password and its repeat are not same in value",
      });
    } else {
      await signUpWithEmail(data.email, data.password)
        .then(() => {
          toast.success("You are now part of watchlog. Enjoy :)");
          router.push("/dashboard");
          onOpenChange?.(false);
        })
        .catch(() => {
          signupForm.setError("root", {
            message:
              "There was an error while logging in. please try again later.",
          });
        });
    }
  };

  // Returning JSX
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <Tabs defaultValue="login">
          <TabsList className="mb-3">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <DialogHeader className="mb-5">
              <DialogTitle>Sign in to WatchLog</DialogTitle>
              <DialogDescription>
                Your watchlist is synced to the cloud, so you can access it
                anytime, on any device.
              </DialogDescription>
            </DialogHeader>
            <Form {...loginForm}>
              <form
                onSubmit={loginForm.handleSubmit(loginSubmitHandler)}
                className="space-y-8"
              >
                <FormField
                  control={loginForm.control}
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
                  control={loginForm.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password :</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="At least 8 character and at most 12 characters"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormMessage>
                  {loginForm.formState.errors.root?.message}
                </FormMessage>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button
                      type="button"
                      variant={"outline"}
                      disabled={loginForm.formState.isSubmitting}
                    >
                      Close
                    </Button>
                  </DialogClose>
                  <Button
                    disabled={loginForm.formState.isSubmitting}
                    type="submit"
                  >
                    {loginForm.formState.isSubmitting ? (
                      <Loader2 className="animate-spin relative" />
                    ) : (
                      "Submit"
                    )}
                  </Button>
                </DialogFooter>
              </form>
            </Form>
          </TabsContent>
          <TabsContent value="signup">
            <DialogHeader className="mb-5">
              <DialogTitle>Sign Up in WatchLog</DialogTitle>
              <DialogDescription>
                Your watchlist is synced to the cloud, so you can access it
                anytime, on any device.
              </DialogDescription>
            </DialogHeader>
            <Form {...signupForm}>
              <form
                onSubmit={signupForm.handleSubmit(signUpSubmitHandler)}
                className="space-y-8"
              >
                <FormField
                  control={signupForm.control}
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
                  control={signupForm.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password :</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="At least 8 character and at most 12 characters"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={signupForm.control}
                  name="passwordRepeat"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password Repeat :</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="At least 8 character and at most 12 characters"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormMessage>
                  {signupForm.formState.errors.root?.message}
                </FormMessage>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button
                      type="button"
                      variant={"outline"}
                      disabled={signupForm.formState.isSubmitting}
                    >
                      Close
                    </Button>
                  </DialogClose>
                  <Button
                    disabled={signupForm.formState.isSubmitting}
                    type="submit"
                  >
                    {signupForm.formState.isSubmitting ? (
                      <Loader2 className="animate-spin relative" />
                    ) : (
                      "Submit"
                    )}
                  </Button>
                </DialogFooter>
              </form>
            </Form>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
