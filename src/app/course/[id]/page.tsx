import CursePage from '@/app/components/CursePage'
import {coursesData} from "@/app/constants/courses-data";
import {Metadata} from "next";
import {useParams} from "next/navigation";


const params = useParams()
const id = Number(params.id)

const nameCourse = coursesData.find(course => course.id === id)
export const metadata: Metadata = {
  title: "Home - AssisTáArte",
  description: "Projeto da Secretaria de Cultura de Assis"
}


export default function Page() {
  return(
    <CursePage/>
  )
}
