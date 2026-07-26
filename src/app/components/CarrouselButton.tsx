"use client"
import {ArrowLeftIcon, ArrowRightIcon} from "@phosphor-icons/react";

type Props = {
  next: () => void;
  prev: () => void;
}

export default function({next,prev}: Props) {
  return(
    <>
      <a onClick={prev}
         className="absolute left-0 top-1/2 hover:cursor-pointer z-40 -translate-y-1/2 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition-colors duration-300">
        <ArrowLeftIcon size={20}/>
      </a>

      <a onClick={next}
         className="absolute right-0 top-1/2 hover:cursor-pointer z-40  -translate-y-1/2 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition-colors duration-300">
        <ArrowRightIcon size={20}/>
      </a>
    </>
  )
}
