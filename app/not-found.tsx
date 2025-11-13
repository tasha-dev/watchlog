// Codes by mahdi tasha
// Importing part
import Header from "@/component/header";
import { Button } from "@/component/ui/button";
import Link from "next/link";
import { JSX } from "react";

// Creating and exporting Not Found page as default
export default function NotFound(): JSX.Element {
  // Returning JSX
  return (
    <>
      <Header className="h-[70px]" />
      <section className=" min-h-[calc(100dvh-70px)] w-dvw lg:flex items-center justify-center text-foreground">
        <main className="max-w-4xl  p-5 z-10 mx-auto">
          <h1 className="font-bold lg:text-4xl text-2xl lg:text-center block mb-5 text-foreground">
            404 – Page Not Found
          </h1>
          <p className="font-medium lg:text-lg text-base lg:text-center text-foreground/50 mb-5">
            Sorry, the page you’re looking for doesn’t exist or has been moved.
            <br />
            Please check the URL or go back to the homepage.
          </p>
          <Button asChild className="mx-auto block w-fit">
            <Link href="/">Go Home</Link>
          </Button>
        </main>
      </section>
    </>
  );
}
