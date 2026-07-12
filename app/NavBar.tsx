import React from 'react'
import Link from 'next/link'
import { FcLibrary } from "react-icons/fc";

const NavBar = () => {
  return (
   <nav className='space-x-8 m-0 flex  border-4  border-green-900  border-9 border-r-8 p-3 rounded-full'>   
     <Link className='h-30 p-3' href="/"><FcLibrary /></Link>
     <ul className='flex space-x-8'>
        <li><Link className='text-black hover:text-red-500 pt-10' href="/">Dashboard</Link></li>
        <li><Link className='text-black hover:text-red-500 pt-10' href="/issues">issues</Link></li>
     </ul>
    </nav>
  )
}
export default NavBar
