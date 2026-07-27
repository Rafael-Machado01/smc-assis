"use client"
import {coursesData} from "@/app/constants/courses-data";
import {tailwindStyles} from "@/app/constants/styles/tailwind";
import {ChalkboardTeacherIcon} from "@phosphor-icons/react";
import Image from 'next/image';

export default function Teachers({id}: {id: number})  {
  const newArray = coursesData.filter(course => course.id === id)
  return (
    <>
    {newArray.map((data) => {
      return(
        <section key={data.id} className="text-center mt-16">
        <span className={`${tailwindStyles.spanSection} ${data.textColor}`}>
          <ChalkboardTeacherIcon size={18}/>
          Professores
        </span>
          <h2 className={`${tailwindStyles.titleSection}`}>Conheça os Professores</h2>
          <div className="flex items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-11">
              {data.teachers.map((teacher) => (
                <div key={teacher.name} className="flex flex-col my-2">
                  <Image src={teacher.photo} width={200} height={200} className="w-[200px] h-[200px] object-cover rounded-full hover:scale-110 transition-transform duration-300" alt={`Foto do Professor ${teacher.name}`}/>
                  <h4 className={`text-2xl my-2 ${data.textColor} font-medium`}>{teacher.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </section>
    )
    })}
    </>
    )
    }
