// Codes by mahdi tasha
// Forcing next.js to render this component as client side component
"use client";

// Importing part
import Image from "next/image";
import Link from "next/link";
import { JSX, useState } from "react";
import LogoImage from "@/image/logo.png";
import { HeaderProps } from "@/type/component";
import { Button } from "./ui/button";
import { cn } from "@/lib/util";
import { Code, LogIn, LogOut, SunMoon } from "lucide-react";
import { useTheme } from "next-themes";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import AuthDialog from "./authDialog";
import useAuth from "@/hook/useAuth";
import { Skeleton } from "./ui/skeleton";
import { signOutUser } from "@/lib/firebase/auth";
import { toast } from "sonner";

// Creating and exporting Header component as default
export default function Header({
  className,
  inDashboard = false,
}: HeaderProps): JSX.Element {
  // Defining hooks
  const { setTheme } = useTheme();
  const [authDialogOpened, setAuthDialogOpened] = useState<boolean>(false);
  const { isAuthenticated, loading } = useAuth();

  // Handling Auth and log out button onClick Event
  const AuthLogOutHandler = async () => {
    if (isAuthenticated) {
      await signOutUser();
      toast.success("You logged out :)");
    } else {
      setAuthDialogOpened(true);
    }
  };

  // Returning JSX
  return (
    <header
      className={cn(
        "flex items-center justify-between gap-4 max-w-4xl px-5 mx-auto",
        className,
      )}
    >
      {!isAuthenticated && (
        <AuthDialog
          open={authDialogOpened}
          onOpenChange={setAuthDialogOpened}
        />
      )}
      <Link href="/">
        <Image
          alt="WatchLog logo"
          width={100}
          height={100}
          src={LogoImage.src}
          className="size-10 block w-fit dark:invert"
        />
      </Link>
      <div className="flex items-center justify-between gap-3">
        <div className="lg:flex hidden items-center justify-between gap-3">
          <Button
            size={inDashboard ? "icon-lg" : "lg"}
            variant={"outline"}
            asChild
          >
            <Link href="https://tasha.vercel.app">
              <Code />
              {!inDashboard && "Mahdi Tasha"}
            </Link>
          </Button>
          {loading ? (
            <Skeleton className="h-10 rounded-md w-15" />
          ) : (
            <Button
              size={inDashboard ? "icon-lg" : "lg"}
              variant={"outline"}
              onClick={AuthLogOutHandler}
            >
              {isAuthenticated ? (
                <>
                  <LogOut />
                  {!inDashboard && "Log Out"}
                </>
              ) : (
                <>
                  <LogIn />
                  {!inDashboard && "Auth"}
                </>
              )}
            </Button>
          )}
        </div>
        <div className="lg:hidden flex items-center justify-between gap-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button size="icon-lg" variant={"outline"} asChild>
                <Link href="https://tasha.vercel.app">
                  <Code />
                </Link>
              </Button>
            </TooltipTrigger>
            <TooltipContent>Mahdi Tasha</TooltipContent>
          </Tooltip>
          {loading ? (
            <Skeleton className="size-10 rounded-md" />
          ) : (
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  size={"icon-lg"}
                  variant={"outline"}
                  onClick={AuthLogOutHandler}
                >
                  {isAuthenticated ? <LogOut /> : <LogIn />}
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                {isAuthenticated ? "Log Out" : "Auth"}
              </TooltipContent>
            </Tooltip>
          )}
        </div>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant={"outline"}
              size={"icon-lg"}
              onClick={() => {
                setTheme((prev) => (prev === "light" ? "dark" : "light"));
              }}
            >
              <SunMoon />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Toggle Theme</TooltipContent>
        </Tooltip>
      </div>
    </header>
  );
}
