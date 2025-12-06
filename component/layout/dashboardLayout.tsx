// Codes by mahdi tasha
// Importing part
import useAuth from "@/hook/useAuth";
import { DashboardLayoutProps } from "@/type/component";
import { Loader2 } from "lucide-react";
import { JSX } from "react";
import Header from "../header";
import { cn } from "@/lib/util";
import { useRouter } from "next/navigation";

// Creating and exporting DashboardLayout component as default
export default function DashboardLayout({
  children,
  className,
}: DashboardLayoutProps): JSX.Element {
  // Defining hooks
  const auth = useAuth();
  const navigation = useRouter();

  // Conditional rendering
  if (auth.loading) {
    return (
      <div className="h-dvh w-dvw flex items-center justify-center">
        <Loader2 className="text-foreground size-5 animate-spin" />
      </div>
    );
  } else if (auth.isAuthenticated) {
    return (
      <>
        <Header className="py-4" inDashboard />
        <div className={cn("max-w-4xl p-5 mx-auto", className)}>{children}</div>
      </>
    );
  } else {
    // Returning user to home page
    navigation.push("/");

    // Returning JSX
    return (
      <div className="h-dvh w-dvw flex items-center justify-center p-5">
        <p className="text-2xl font-bold text-center text-foreground">
          Returning To Home Page
        </p>
      </div>
    );
  }
}
