// Codes by mahdi tasha
// Importing part
import ContainerComponent from "@/chunk/containerComponent";
import ParagraphComponent from "@/chunk/paragraphComponent";
import TitleComponent from "@/chunk/titleComponent";
import { ReactNode } from "react";
import Image from "next/image";
import mainImage from '@/public/img/page/home/firstSection/img-boy-tv.jpg';

// Creating and exporting first section of home page if user is not logged in , as default
export default function FirstSectionComponent():ReactNode {
  // Returning JSX
  return (
    <section>
      <ContainerComponent size="large">
        <TitleComponent tier={1}>Effortless Entertainment Management</TitleComponent>
        <ParagraphComponent>Explore the future of entertainment tracking with WatchLog - the ultimate app for seamlessly managing your watched movies and TV series. Our sleek design and intuitive interface make it easy to keep tabs on your viewing history, ensuring you never miss a favorite moment.</ParagraphComponent>
        <Image className="w-full lg:h-[300px] h-[150px] object-cover rounded-[20px]" width={1024} height={1024} alt="Image of a boy watching tv" src={mainImage.src}  />
      </ContainerComponent>
    </section>
  );
}
