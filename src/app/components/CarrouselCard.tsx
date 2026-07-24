import Image from "next/image";
import Link from "next/link";
import { carrouselData } from "@/app/constants/carrousel-data";

export default function CarrouselCard() {
  return (
    <>
      {carrouselData.map((data) => {
        const CIcon = data.icon;

        return (
          <div key={data.curse} className="bg-gray-50 shadow-lg w-[250px] sm:w-[280px] md:w-[400px] flex-shrink-0  dark:bg-gray-900 rounded-lg flex flex-col">
            <Image src={data.urlImage} alt={data.alt} width={400} height={300} className="rounded-t-lg"/>
            <h2 className={`${data.color} font-medium text-2xl my-4 flex items-center justify-center gap-2`}>
              <CIcon size={32} weight="fill" />
              {data.curse}
            </h2>

            <p className="my-6 p-2 leading-relaxed text-gray-600 dark:text-gray-300">
              {data.description}
            </p>
            <Link href={data.urlButton} className={`${data.colorButton} p-4 m-4 text-white rounded-lg transition-all`}>
              Acessar
            </Link>
          </div>
        );
      })}
    </>
  );
}
