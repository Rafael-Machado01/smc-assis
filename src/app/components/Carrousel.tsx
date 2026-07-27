'use client'
import {GraduationCapIcon} from "@phosphor-icons/react";
import {tailwindStyles} from "@/app/constants/styles/tailwind"
import CarrouselCard from "@/app/components/CarrouselCard"
import CarrouselButton from "@/app/components/CarrouselButton";
import {carrouselData} from "@/app/constants/carrousel-data";
import {useState} from "react";

export default function Carrousel() {
  const [currentIndex,setCurrentIndex] = useState(0);
  function next() {
    setCurrentIndex((prev) =>
      prev === carrouselData.length -1 ? 0 : prev + 1
    )
  }
  function prev() {
    setCurrentIndex((prev) =>
      prev === 0 ? carrouselData.length - 1 : prev - 1
    );
  }

  return(
    <section className="mt-16 text-center" id="courses">
       <span className={tailwindStyles.spanSection}>
        <GraduationCapIcon size={18}/>
        Encontre o seu Talento

      </span>
      <h2 className={tailwindStyles.titleSection}>
        Nossos Cursos
      </h2>
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="overflow-hidden max-w-full sm:max-w-4xl md:max-w-6xl mx-auto">
          <CarrouselButton next={next} prev={prev} />
          <div className="flex gap-6 m-4 transition-transform duration-500"
               style={{
                 transform: `translateX(-${currentIndex * 424}px)`,
               }}>

            <CarrouselCard />
          </div>
        </div>
      </div>
    </section>
  )
}
