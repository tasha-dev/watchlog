// Codes by mahdi tasha
// Importing part
import ContainerComponent from "@/chunk/containerComponent";
import ParagraphComponent from "@/chunk/paragraphComponent";
import TitleComponent from "@/chunk/titleComponent";
import { ReactNode } from "react";
import Image from "next/image";
import mainImage from '@/public/img/page/home/secondSection/img-family.jpg';

// Creating and exporting second section of home page if user is logged in , as default
export default function SecondSectionComponent():ReactNode {
  // Returning JSX
  return (
    <section>
      <ContainerComponent size="large" className="grid lg:grid-cols-2 grid-cols-1 gap-[20px]">
        <div>  
          <TitleComponent tier={1}>Tailor Your Watchlist, Your Way</TitleComponent>
          <ParagraphComponent noMargin>WatchLog features a modern user interface designed for personalization. Tailor your watchlist with ease, adjusting settings to match your unique preferences. Whether you prefer a light or dark mode experience, WatchLog adapts to your style, providing an enjoyable and customizable viewing history.</ParagraphComponent>
        </div>
        <Image className="aspect-square lg:h-auto h-[150px] object-cover rounded-[20px]" width={1024} height={1024} alt="Image of a boy watching tv" src={mainImage.src}  />
      </ContainerComponent>
    </section>
  );
}

