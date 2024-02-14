// Codes by mahdi tasha
// Importing part
import { ReactNode } from "react";
import ContainerComponent from "@/chunk/containerComponent";
import Image from "next/image";
import mainImage from '@/public/img/page/home/firstSection/img-boy-tv.jpg';
import TitleComponent from "@/chunk/titleComponent";

// Creating and exporting logged in home page as default
export default function LoggedInHomePage():ReactNode {
  // Returning JSX
  return (
    <section>
      <Image width={1024} height={1024} alt="Image of a boy watching tv" src={mainImage.src} className="w-full h-[300px] object-cover" />
      <ContainerComponent size="small">
        <TitleComponent noMargin tier={0}>Movies</TitleComponent>
      </ContainerComponent>
    </section>
  );
}
