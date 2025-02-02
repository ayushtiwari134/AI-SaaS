'use client'


import React from 'react'
import { Button } from '../components/ui/button'
import Link from 'next/link';
const page = () => {
  const [videos, setVideos] = React.useState([])

  const CreateNew = () => {
    return(
      <div className='gap-4 flex flex-col items-center justify-center'>
        <div className='border-2 w-1/2 py-24 rounded-lg border-teal-600 border-dashed p-4 gap-6 flex flex-col items-center justify-center'>
        <p className='text-3xl'>You have no videos yet</p>
        <Link href={'/dashboard/create-new'}>
              <Button>Create New</Button>
        </Link>
        </div>
      </div>
    )
  }


  return (
    <div className='flex flex-col pt-4 gap-6 h-full w-full'>
      <div className='flex md:flex-row flex-col gap-6 items-center justify-between px-16 py-4 h-full w-full'>
        <div className='sm:text-5xl text-3xl text-teal-600 font-bold'>
          Dashboard
        </div>
        <div>
            <Link href={'/dashboard/create-new'}>
              <Button>Create New</Button>
            </Link>
        </div>
      </div>
      <div className=''>
        {
          videos.length==0?<CreateNew/>:null
        }
      </div>
    </div>
  )
}

export default page
