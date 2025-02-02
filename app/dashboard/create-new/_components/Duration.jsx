import React from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


const Duration = ({onHandleInputChange}) => {
  const [selected, setSelected] = React.useState('')
  const options = ['30 seconds', '60 seconds']
  return (
    <div className='font-bold flex flex-col gap-5 text-teal-600'>
      <p className='text-2xl text-teal-600 font-bold'>Duration</p>
      <p>Select the duration of your video</p>
      <Select onValueChange={(value) => {
        setSelected(value);
        value!='Custom'&&onHandleInputChange('duration',value);
      }}>
        <SelectTrigger className="w-full mt-2 p-6 text-lg">
          <SelectValue placeholder="Select Duration" />
        </SelectTrigger>
        <SelectContent>     
          {options.map((option,index)=>{
            return <SelectItem className='tex-teal-600' key= {index} value={option}>{option}</SelectItem>
          })}
        </SelectContent>
      </Select>
    </div>
  )
}

export default Duration
