"use client"
import Benefits from "@/app/components/Benefits";
import Teachers from "@/app/components/Teachers";
import {useParams} from "next/navigation";

export default function CoursePage() {
  const params = useParams()
  const id = Number(params.id)
  return(
    <main className="px-12 mt-20">
      <Benefits id={id}/>
      <Teachers id={id}/>
    </main>
  )
}
