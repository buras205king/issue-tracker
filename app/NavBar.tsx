'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FcLibrary } from "react-icons/fc";

const NavBar = () => {
    const currentpath = usePathname();

    const links = [
        {
            label: "Dashboard",
            href: "/"
        },
        {
            label: "Issues",
            href: "/issues"
        },
        {
            label: "Users",
            href: "/users"
        }
    ]

    return (
        <nav className='flex items-center w-full p-3 rounded-full'>
            
            <Link className='p-3' href="/">
                <FcLibrary className="text-4xl" />
            </Link>

            <ul className='flex items-center space-x-10 text-lg font-bold text-gray-700 ml-auto mr-10'>
                {links.map((link) => (
                    <li key={link.href}>
                        <Link 
                            className={`${link.href === currentpath 
                                ? 'text-orange-500' 
                                : 'hover:text-red-500'
                            } transition-colors`} 
                            href={link.href}
                        >
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>

        </nav>
    )
}

export default NavBar