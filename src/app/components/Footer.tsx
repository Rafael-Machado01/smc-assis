'use client'
import Image from "next/image";
import Link from "next/link";
import {socialLinks} from "@/app/constants/footer-social-links"
import {headerMenuLinks} from "@/app/constants/header-menu-links"
import {contacts} from "@/app/constants/footer-contacts"
import {tailwindStyles} from "@/app/constants/styles/tailwind"
export default function Footer() {
  return (

    <footer className="bg-slate-50  shadow-lg dark:bg-slate-900 p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 ">
      <div className="flex items-start gap-6">
        <div className="flex flex-col items-center md:items-start">
          <Image src="/logo.png" alt="Logo da Secretaria de Cultura" width={150} height={65}
                 className="rounded-lg bg-white mb-3 shadow-lg"/>
          <div className="flex items-center ml-3 gap-4">
            {socialLinks.map((link) => {
              const Icon = link.icon
              return (
                <Link key={link.href} target="_blank" href={link.href} className={`transition-colors duration-300 ${link.color}`}>
                  <Icon size={24} />
                </Link>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col justify-center text-center md:text-left">
          <h3 className="text-xl font-semibold mb-3">AssisTáArt</h3>
          <p className="leading-relaxed text-sm max-w-md">Projeto da Secretaria de Cultura de Assis</p>
        </div>
      </div>
      <div className="text-center">
        <h3 className="text-lg font-semibold mb-4 border-b border-white/30 inline-block pb-1">Explorar</h3>
        <ul className="space-y-2 text-sm">
          {headerMenuLinks.map((link) => (
            <Link key={link.href}
                  href={link.href}
                  className={`block ${tailwindStyles.hoverFooterLinks}`}
            >
              {link.label}
            </Link>
          ))}
        </ul>
      </div>
      <div className="text-center md:text-left">
        <h3 className="text-lg font-semibold mb-4 border-b border-white/30 inline-block pb-1">Contato</h3>
        <nav className="space-y-2 text-sm">
          {contacts.map((contact)=> {
            const CIcon = contact.icon
            return(
              <span key={contact.label} className={`flex gap-2 ${tailwindStyles.hoverFooterLinks}`}>
                <CIcon size={20}/> {contact.label}
              </span>
            )
          })}
        </nav>
      </div>
    </footer>
  );
}
