'use client'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'
const SideBar = () => {
  const currentpath = usePathname();
  const links = [
    {
        label: "Projects",
        href: "/projects"
    },
    {
        label: "Tasks",
        href: "/Tasks"
    },
    {
        label: "Teams",
        href: "/Teams"
    },
    {
        label: "Issues",
        href: "/issues"
    },
    {
        label: "Users",
        href: "/users"
    },
    {
        label: "Timeline",
        href: "/Timeline"
    },
    {
        label: "Search",
        href: "/Search"
    },
    {
        label: "Settings",
        href: "/Settings"
    }
  ]

  return (
    <div className='min-h-screen w-60 bg-gray-100 p-5 rounded-lg shadow-md'>
      <ul className='flex flex-col items-start space-y-6 text-lg font-bold text-gray-700 ml-auto mr-10'>
        {links.map((link) => (
          <li key={link.href}>
            <Link 
              className={`${link.href === currentpath 
                ? 'text-orange-500' 
                : 'hover:text-red-500'
              } transition-colors hover:bg-slate-300 p-3`} 
              href={link.href}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SideBar
