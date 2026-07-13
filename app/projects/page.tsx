
import Link from 'next/link'
import React from 'react'
const Project = () => {
  return (
    <div className="flex justify-content gap-80">
        <h1 className="text-2xl font-semibold">Projects</h1>
        <Link href="/projects/CreateProject">
       <button  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 ml-96">
        Create Project
      </button>
      </Link>
      <table>
      <tr>
        <th> </th>
        
     </tr>
     <tr>
        
     </tr>
      </table>
    </div>
  )
}

export default Project