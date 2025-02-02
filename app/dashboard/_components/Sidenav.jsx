'use client'

import { BadgePlus } from 'lucide-react'
import { Zap } from 'lucide-react'
import { CircleUserRound } from 'lucide-react'
import { PanelsTopLeft } from 'lucide-react'
import React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation'

const Sidenav = () => {
  const menuOptions=[
     {
      'id':1,
      'name':'Dashboard',
      'path': '/dashboard',
      'icon': PanelsTopLeft
     },
     {
      'id':2,
      'name':'Create',
      'path': '/dashboard/create-new',
      'icon': BadgePlus
     },
     {
      'id':3,
      'name':'Upgrade',
      'path': '/upgrade',
      'icon': Zap
     },
     {
      'id':4,
      'name':'Account',
      'path': '/account',
      'icon': CircleUserRound
     } 
  ]
  const currentPath = usePathname()

  return (
    <div className='w-64 flex flex-col gap-2 p-4 border-r border-teal-600 h-screen'>
      {
        menuOptions.map((option)=>{
          const Icon = option.icon
          return(
            <Link key={option.id} href={option.path}>
            <div key={option.id} className={option.path==currentPath?`flex rounded-lg items-center p-4 bg-teal-600 text-white cursor-pointer`: `flex rounded-lg items-center p-4 cursor-pointer hover:bg-teal-600 hover:text-white`}>
              <Icon className='w-6 h-6'/>
              <p className='ml-2'>{option.name}</p>
            </div>
            </Link>
          )
        })
      }
    </div>
  )
}

export default Sidenav
