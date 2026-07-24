"use client"
import {ArrowLeftIcon, ArrowRightIcon} from "@phosphor-icons/react";

export default function() {
  return(
    <>
      <a
         className="absolute left-0 top-1/2 hover:cursor-pointer z-40 -translate-y-1/2 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition-colors duration-300">
        <ArrowLeftIcon size={20}/>
      </a>

      <a
         className="absolute right-0 top-1/2 hover:cursor-pointer z-40  -translate-y-1/2 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition-colors duration-300">
        <ArrowRightIcon size={20}/>
      </a>
    </>
  )
}
