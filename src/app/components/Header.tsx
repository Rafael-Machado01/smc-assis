'use client'

import Image from 'next/image'
import {ListIcon, MoonIcon, SunIcon, XIcon} from "@phosphor-icons/react";
import {useTheme} from "next-themes";
import {useEffect,useState} from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {headerMenuLinks} from '@/app/constants/header-menu-links'
import {tailwindStyles} from "@/app/constants/styles/tailwind"

export default function Header() {

  const {setTheme,resolvedTheme} = useTheme()
  const [menu,setMenu] = useState(false)
  const [mounted,setMounted] = useState(false);

  const pathname = usePathname()


    useEffect(() => {
      setMounted(true)
    },[])

    if(!mounted) return null;

    function changeTheme() {
      setTheme(resolvedTheme === "light" ? "dark" : "light")
    }

    function toggleMenu() {
    setMenu(prev => !prev)
    }

  return(
    <header className="fixed bg-slate-50 dark:bg-slate-950 top-0 left-0 right-0 z-50 shadow-lg backdrop-blur-sm">
    <nav className="container mx-auto px-4">
      <div className="flex items-center justify-between">

        <Image src="/logo.png" alt="Logo da Secretaria de Cultura de Assis" width={300} height={130} className="w-45 md:w-82" />

        <div className="flex items-center gap-4">

          <button className={tailwindStyles.hoverHeaderLinks} onClick={changeTheme}>
             {resolvedTheme === "dark" ? <SunIcon size={26}/> : <MoonIcon size={26}/> }
          </button>

          <button  className={tailwindStyles.hoverHeaderLinks} onClick={toggleMenu}>
            {menu ? <XIcon size={26}/> : <ListIcon size={26}/>}
          </button>
        </div>
      </div>
    </nav>

      {menu ?
        (<nav className="absolute top-full bg-slate-50 dark:bg-slate-900 left-0 right-0 backdrop-blur-sm
      shadow-lg m-5 rounded-lg py-6 transition-all duration-300 ease-in-out">
          <ul className="container mx-auto px-4 flex flex-col gap-4">
            {headerMenuLinks.map((link) => (
              <Link key={link.href}
                    href={link.href}
                    className={`${pathname === link.href ? "text-blue-500" : ""} ${tailwindStyles.linksHeaderMenu}  ${tailwindStyles.hoverHeaderLinks}`}
                    onClick={toggleMenu}>
                {link.label}
              </Link>
            ))}
          </ul>
        </nav>)
        : (<></>)
      }

    </header>
  )
}
