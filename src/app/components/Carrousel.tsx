'use client'
import {GraduationCapIcon} from "@phosphor-icons/react";
import {tailwindStyles} from "@/app/constants/styles/tailwind"
import CarrouselButton from "@/app/components/CarrouselButton"
import CarrouselCard from "@/app/components/CarrouselCard"

export default function Carrousel() {
  return(
    <section className="mt-16 text-center">
       <span className={tailwindStyles.spanSection}>
        <GraduationCapIcon size={18}/>
        Encontre o seu Talento
      </span>
      <h2 className={tailwindStyles.titleSection}>
        Nossos Cursos
      </h2>
      <div className="relative max-w-7xl mx-auto px-6">
        <CarrouselButton/>
        <div className="overflow-hidden max-w-full sm:max-w-4xl md:max-w-6xl mx-auto">
          <div className="flex gap-6 m-4 transition-transform duration-500">
            <CarrouselCard/>
          </div>
        </div>
      </div>
    </section>
  )
}
