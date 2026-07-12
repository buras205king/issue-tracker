'use client'
import React from 'react'
import Link from 'next/link'
import{usePathname} from 'next/navigation'
import { FcLibrary } from "react-icons/fc";
import { text } from 'stream/iter';

const NavBar = () => {
    const currentpath = usePathname();
    const links=[
        {
            label: "Dashboard",
            href: "/"
        },
        {
            label: "Issues",
            href: "/issues"
        }
    ]
  return (
   <nav className='space-x-8 m-0 flex  border-4  border-green-900  border-9 border-r-8 p-3 rounded-full'>   
     <Link className='h-30 p-3' href="/"><FcLibrary /></Link>
     <ul className='flex space-x-8'>
        {links.map((link) => (
            <li key={link.href}>
                <Link className={`${link.href===currentpath? 'text-orange-500' : 'hover:text-red-500'} pt-10 transition-colors`} href={link.href}>
                    {link.label}
                </Link>
            </li>
        ))}
     </ul>
    </nav>
  )
}
export default NavBar
