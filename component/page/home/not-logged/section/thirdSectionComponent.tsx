// Codes by mahdi tasha
// Importing part
import ContainerComponent from "@/chunk/containerComponent";
import ParagraphComponent from "@/chunk/paragraphComponent";
import TitleComponent from "@/chunk/titleComponent";
import { ReactNode } from "react";
import Image from "next/image";
import mainImage from '@/public/img/page/home/thirdSection/img-girl-cinema.jpg';

// Creating and exporting third section of home page if user is not logged in , as default
export default function ThirdSectionComponent():ReactNode {
  // Returning JSX
  return (
    <section>
      <ContainerComponent size="large" className="grid lg:grid-cols-2 grid-cols-1 gap-[20px]">
        <Image className="aspect-square lg:h-auto h-[150px] object-cover rounded-[20px]" width={1024} height={1024} alt="Image of a boy watching tv" src={mainImage.src}  />
        <div>  
          <TitleComponent tier={1}>Efficiency Meets Enjoyment</TitleComponent>
          <ParagraphComponent>Immerse yourself in a streamlined entertainment experience with WatchLog. Efficiently manage your watched content, create a comprehensive log, and rediscover the joy of entertainment tracking. Start your personalized journey today, and make every viewing moment memorable.</ParagraphComponent>
          <ParagraphComponent noMargin>Feel free to replace the placeholder image URLs with actual images relevant to your app's design and aesthetic. Additionally, customize the titles and paragraphs based on your app's unique features and value proposition.</ParagraphComponent>
        </div>
      </ContainerComponent>
    </section>
  );
}

