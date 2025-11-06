// Codes by mahdi tasha
// Imporing part
import { type Metadata } from "next";
import { Montserrat } from "next/font/google";
import { RootLayoutProps } from "@/type/component";
import { JSX } from "react";
import { cn } from "@/lib/util";
import "@/style/globals.css";
import { ThemeProvider } from "next-themes";

// Defining metadata
export const metadata: Metadata = {
  title: {
    default: "WatchLog – Track Movies & Series Anywhere",
    template: `%s | WatchLog`,
  },
  description:
    "WatchLog lets you log and rate your watched movies and series anywhere using Firebase and OTP login. Import lists, save ratings, and never lose track.",
  keywords: [
    "watchlog",
    "movie tracker",
    "series tracker",
    "firebase otp",
    "watchlist",
    "nextjs app",
    "rating app",
  ],
  authors: [{ name: "Mahdi Tasha" }],
  openGraph: {
    title: "WatchLog",
    description:
      "A simple cloud-synced watchlist app. Log movies, rate them, and import lists.",
    url: "https://watchlog.vercel.app/",
    siteName: "WatchLog",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "WatchLog",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  themeColor: "#0a0a0a",
};

// Defining fonts
const MontserratFont = Montserrat({
  display: "block",
  style: ["normal"],
  subsets: ["latin"],
  weight: ["300", "500", "600", "700", "900"],
});

// Creating and exporting RootLayout component as default
export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  // Returning JSX
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-dvh overflow-x-hidden overflow-y-auto bg-background text-foreground",
          MontserratFont.className,
        )}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
