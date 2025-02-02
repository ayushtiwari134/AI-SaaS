'use client'

import Image from 'next/image'
import React from 'react'

const Style = ({onHandleInputChange}) => {
  const [selected, setSelected] = React.useState(0)

  const options = [
    // {
    //   'name': "Realistic",
    //   'img': "realistic.jpg"
    // },
    {
      'name': "Cartoon",
      'img': "/cartoon.jpeg"
    },
    {
      'name': "Comic",
      'img': "/comic.jpg"
    },
    {
      'name': "WaterColor",
      'img': "/watercolor.jpg"
    },
    {
      'name': "GTA",
      'img':"/gta.jpg"
    }
  ]
  return (
    <div className='flex flex-col gap-4'>
      <p className='text-2xl text-teal-600 font-bold'>Style</p>
      <p>Select your video style</p>
      <div className='flex gap-4 flex-wrap justify-center items-center'>
        {options.map((option, index) => {
          return (
            <div key={index} className={`rounded-lg hover:scale-105 transition-all hover:shadow-teal-600 pb-4 flex flex-col gap-2 items-center hover:cursor-pointer hover text-teal-600 font-bold ${option.name==selected?'border-2 border-teal-600':'border-2'}`}onClick={()=>{
              setSelected(option.name)
              onHandleInputChange('style',option.name)
              }}>
              <div className={`h-[200px] w-[200px] relative overflow-x-auto`}>
                <Image 
                  src={option.img}
                  alt="Full width stretched image"
                  fill
                  className="object-cover rounded-t-lg"
                  priority
                />
              </div>
              <p>{option.name}</p>
            </div>

          )
        })}

      </div>
    </div>
  )
}

export default Style
