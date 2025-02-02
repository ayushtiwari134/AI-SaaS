import React from 'react'
import Navbar from './_components/Navbar'
import Sidenav from './_components/Sidenav'

function layout({children}) {
  return (
    <div id='namememememememme'>
        <div className='hidden md:block h-screen fixed bg-white mt-[65px] w-64'>
        <Sidenav/>
        </div>
        <div>
          <Navbar/>
          <div className='md:ml-64 h-full'>
              {children}
          </div>
        </div>
    </div>
  )
}

export default layout
