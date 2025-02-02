import React from 'react'
import Navbar from './_components/Navbar'
import Sidenav from './_components/Sidenav'

function layout({children}) {
  return (
    <div>
        <div className='hidden md:block h-screen bg-white fixed mt-[65px] w-[10%]'>
        <Sidenav/>
        </div>
      <div>
        <Navbar/>
        <div className='md:ml-64'>
            {children}
        </div>
      </div>
    </div>
  )
}

export default layout
