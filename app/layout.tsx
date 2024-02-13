// Codes by mahdi tasha
// Importing part
import { ReactNode } from 'react';
import { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import '@/app/index.css';

// Defining the font 
const RobotFont = Roboto({
  weight: ['300', '500', '700'],
  subsets: ['latin'],
});

// Defining and exporting metadata of pages
export const metadata:Metadata = {
    title: 'WatchLog: Your Personal Entertainment Diary',
    description: "Discover a new dimension of entertainment management with WatchLog – your ultimate companion for effortlessly tracking and organizing watched movies and serials. Immerse yourself in a sleek and intuitive interface, tailor your log to your preferences, and relive your favorite moments seamlessly. With WatchLog, managing your entertainment history has never been more enjoyable. Start your personalized journey today!",
    keywords: ['Entertainment Tracker', 'Watched Movies', 'TV Series Log', 'Next.js App', 'Movie Organizer', 'Media Tracking', 'Personalized Entertainment', 'Viewing History', 'WatchLog App', 'Modern UI', 'Dark Mode', 'Light Mode', 'User-Friendly', 'Movie Database', 'TV Show Manager', 'Efficient Tracking', 'Watchlist', 'Digital Diary', 'Cinematic Journal', 'Enjoyable Viewing Experience'],
    robots: "index, follow",
    openGraph: { 
        title: 'WatchLog: Your Personal Entertainment Diary',
        description: "Discover a new dimension of entertainment management with WatchLog – your ultimate companion for effortlessly tracking and organizing watched movies and serials. Immerse yourself in a sleek and intuitive interface, tailor your log to your preferences, and relive your favorite moments seamlessly. With WatchLog, managing your entertainment history has never been more enjoyable. Start your personalized journey today!",
        images: './public/img/img-logo.png',
        url: 'https://watchlog.vercel.app/'
    }
}

// Definign type of props
interface propsType {
  children: ReactNode;
}

// Creating and exporting root layout component as default
export default function RootLayout({children}:propsType):ReactNode {
  // Returning JSX
  return (
    <html>
      <body className={`overflow-x-hidden ${RobotFont.className}`}>
        {children}
      </body>
    </html>
  );
}
