"use client"
import {missionDataStats} from "@/app/constants/mission-data-stats";
import {BookBookmarkIcon} from "@phosphor-icons/react";
import {tailwindStyles} from "@/app/constants/styles/tailwind"

export default function Mission() {
  return (
    <section className="text-center py-16 px-6 transition-colors duration-300" id="explorer">
      <div className="max-w-3xl mx-auto">
      <span className={tailwindStyles.spanSection}>
       <BookBookmarkIcon size={18}/>
        Nossa Missão
      </span>

        <h2 className={tailwindStyles.titleSection}>
          Escolas de Artes Semearte e Assis Tá Arte
        </h2>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          Promovemos a inclusão cultural atendendo pessoas de todas as idades, especialmente
          dos bairros mais distantes. Com transporte oferecido pela Secretaria Municipal de
          Cultura, nossos cursos de Ballet, Capoeira e Circo incentivam a socialização, a
          vivência em grupo e o desenvolvimento de valores como arte, caráter e cidadania.
        </p>
      </div>
      <div className="flex  p-2 mt-6 flex-wrap justify-center gap-10 text-gray-800 dark:text-gray-100">
        {missionDataStats.map((mission) => {
         const MIcon = mission.icon
          return(
            <div key={mission.stat} className="flex flex-col items-center">
              <MIcon className="text-blue-600 dark:text-blue-400 mb-2 " size={48}/>
                <h2 className="text-2xl font-bold">{mission.stat}</h2>
                <p className="text-sm">{mission.label}</p>
            </div>
          )
        })}
      </div>
    </section>
      )
      }
