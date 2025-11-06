// Codes by mahdi tasha
// Importing part
import Header from "@/component/header";
import { JSX } from "react";

// Creating and exporting Home page as default
export default function HomePage(): JSX.Element {
  // Returning JSX
  return (
    <>
      <Header className="h-[70px]" />
      <section className=" min-h-[calc(100dvh-70px)] w-dvw lg:flex items-center justify-center text-foreground relative z-0">
        <div className="bg-rose-500 absolute left-1/2 top-1/2 size-44 -translate-x-3/4 -translate-y-3/4 blur-3xl -z-10" />
        <div className="bg-violet-500 absolute left-1/2 top-1/2 size-44 -translate-x-1/4 -translate-y-1/4 blur-3xl -z-10" />
        <main className="max-w-4xl  p-5 z-10 mx-auto">
          <h1 className="font-bold lg:text-4xl text-2xl lg:text-center block mb-5 text-foreground">
            Track What You Watch <br /> Anywhere, Anytime
          </h1>
          <p className="font-medium lg:text-lg text-base lg:text-center text-foreground/50">
            Store every movie and series you’ve watched in a secure cloud-synced
            watchlist. Rate titles, import your old lists, and access your
            history from any device .
          </p>
        </main>
      </section>
    </>
  );
}
