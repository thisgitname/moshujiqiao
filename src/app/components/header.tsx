'use client'
import React from 'react'
import  Link  from 'next/link'
import { usePathname } from 'next/navigation'
const linkData=[
    {name:"Performance",path:"/performance"},
    {name:"Reliability",path:"/reliability"},
    {name:"Scale",path:"/scale"}
]

// const accessLink=['/','/performance','/reliability','/scale']

export default function Header() {
    const pathname=usePathname()
  return (
    <div>
            <div className="absolute w-full z-10">
          <div className="flex justify-between p-8 container mx-auto items-center text-white">
        <Link className="text-3xl font-bold" href="/">Home</Link>
       <div className="text-xl space-x-4">
            {
                linkData.map((link)=>(
                    <Link key={link.name} className={pathname===link.path?"text-purple-500":""} href={link.path}>{link.name}</Link>
                ))
            }

           {/* <Link href="/performance">Performance</Link>
           <Link href="/reliability">Reliability</Link>
           <Link href="/scale">Scale</Link> */}
        </div>
       </div>
        </div>
    </div>
  )
}
