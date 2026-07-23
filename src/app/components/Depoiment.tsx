"use client"
import {ChatsTeardropIcon} from "@phosphor-icons/react";
import DepoimentCard from '@/app/components/DepoimentCard'

export default function Depoiment() {
  return (
    <section className="mt-16 text-center">
      <span className="inline-flex items-center gap-2 text-lg font-semibold text-blue-700 dark:text-blue-400">
      <ChatsTeardropIcon size={18} />
        Depoimentos
      </span>
      <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 text-gray-800 dark:text-gray-100">
        O que dizem nossos alunos
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
      <DepoimentCard/>
      </div>
</section>
  )
}
