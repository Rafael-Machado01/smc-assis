"use client"
import {coursesData} from "@/app/constants/courses-data";
import {tailwindStyles} from "@/app/constants/styles/tailwind";

export default function Benefits({id} : {id: number}) {
    const newArray = coursesData.filter(course => course.id === id);
  return (
  <div className="mt-[200px]">
    {newArray.map((data) => {
      const SpanIcon = data.spanIcon

      return(
        <section key={data.id} className="text-center">
          <span className={`${tailwindStyles.spanSection} ${data.textColor}`}><SpanIcon size={18}/>
            Inspire-se
          </span>
          <h2 className={tailwindStyles.titleSection}>Por que fazer {data.name}</h2>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-center text-center">
              {data.benefits.map((benefit) => {
                const BenefitsIcon = benefit.icon
                return(
                  <div  key={benefit.title} className={`flex flex-col bg-gray-50 shadow-2xl w-[250px] sm:w-[280px] md:w-[400px] flex-shrink-0 dark:bg-gray-900 rounded-lg p-4 ${data.hoverColor} transition-all duration-500`}>
                    <h2 className="flex items-center justify-center"><BenefitsIcon size={30} className={`${data.textColor}  my-2`}/></h2>
                    <h3 className={`${data.textColor} my-2`}>{benefit.title}</h3>
                    <p className="my-2">{benefit.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )
    })}
  </div>
  )
}
