'use client'

import Image from 'next/image'
import {ListIcon, MoonIcon, SunIcon, XIcon} from "@phosphor-icons/react";
import {useTheme} from "next-themes";
import {useEffect,useState} from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";

export default function Header() {

  const {theme,setTheme,resolvedTheme} = useTheme()
  const [menu,setMenu] = useState(false)

  const pathname = usePathname()
  console.log(pathname);

  let hoverButtonsMenu = "hover:text-blue-700 dark:hover:text-blue-400 transition-colors cursor-pointer duration-300"
  let linksOnMenu = 'text-lg py-2 px-4'


    const [mounted,setMounted] = useState(false);
    useEffect(() => {
      setMounted(true)
    },[])

    if(!mounted) return null;
  return(
    <header className="fixed bg-slate-50 dark:bg-slate-950 top-0 left-0 right-0 z-50 shadow-lg backdrop-blur-sm">
    <nav className="container mx-auto px-4">
      <ul className="flex items-center justify-between">

        <Image src="/logo.png" alt="Logo da Secretaria de Cultura de Assis" width={300} height={130} />

        <div className="flex items-center gap-4">

          <button className={hoverButtonsMenu} onClick={() => {setTheme(resolvedTheme === "light" ? "dark" : "light")}}>
             {resolvedTheme === "dark" ? <SunIcon size={26}/> : <MoonIcon size={26}/> }
          </button>

          <button  className={hoverButtonsMenu} onClick={() => {setMenu(!menu)}}>
            {menu ? <XIcon size={26}/> : <ListIcon size={26}/>}
          </button>
        </div>
      </ul>
    </nav>

      {menu ?
        (<nav className="absolute top-full bg-slate-50 dark:bg-slate-900 left-0 right-0 backdrop-blur-sm
      shadow-lg m-5 rounded-lg py-6 transition-all duration-300 ease-in-out">
          <ul className="container mx-auto px-4 flex flex-col gap-4">
            <Link href="/" className={`${pathname === "/" ? "text-blue-500" : ""} ${linksOnMenu}  ${hoverButtonsMenu}`}>Home</Link>
            <Link href="#curses" className={` ${linksOnMenu} ${hoverButtonsMenu}`}>Cursos</Link>
            <Link href="#footer" className={`${linksOnMenu} ${hoverButtonsMenu}`}>Contato</Link>
          </ul>
        </nav>)
        : (<></>)
      }

    </header>
  )
}
