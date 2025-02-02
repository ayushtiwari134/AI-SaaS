'use client'

import React from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

const SelectTopic = ({onHandleInputChange}) => {

  const options= ['Custom','Random', 'Scary', 'Sad', 'Happy', 'Motivational', 'Health']
  const [selected, setSelected] = React.useState('')
  return (
    <div className='font-bold flex flex-col gap-5 text-teal-600'>
      <p className='text-2xl text-teal-600 font-bold'>Content</p>
      <p>Select the topic of your video</p>
      <Select onValueChange={(value) => {
        setSelected(value);
        value!='Custom'&&onHandleInputChange('topic',value);
      }}>
        <SelectTrigger className="w-full mt-2 p-6 text-lg">
          <SelectValue placeholder="Select Type" />
        </SelectTrigger>
        <SelectContent>     
          {options.map((option,index)=>{
            return <SelectItem className='tex-teal-600' key= {index} value={option}>{option}</SelectItem>
          })}
        </SelectContent>
      </Select>
      <div>
        {selected=='Custom'&&<Textarea onChange={(e)=>onHandleInputChange('topic',e.target.value)} placeholder='Write the prompt on which you want to generate a video'/>}
      </div>
    </div>
  )
}

export default SelectTopic
