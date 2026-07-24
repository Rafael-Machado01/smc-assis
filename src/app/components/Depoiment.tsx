"use client"
import {ChatsTeardropIcon} from "@phosphor-icons/react";
import DepoimentCard from '@/app/components/DepoimentCard'
import {tailwindStyles} from "@/app/constants/styles/tailwind"

export default function Depoiment() {
  return (
    <section className="mt-16 text-center">
      <span className={tailwindStyles.spanSection}>
      <ChatsTeardropIcon size={18} />
        Depoimentos
      </span>
      <h2 className={tailwindStyles.titleSection}>
        O que dizem nossos alunos
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
      <DepoimentCard/>
      </div>
</section>
  )
}
