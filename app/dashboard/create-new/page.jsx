'use client'
import { Button } from '../../components/ui/button'
import React from 'react'
import SelectTopic from './_components/SelectTopic'
import Style from './_components/Style'
import Duration from './_components/Duration'
import axios from 'axios'
import CustomLoader from './_components/CustomLoader'


const page = () => {
    const [videoScript, setVideoScript] = React.useState({});

    const [loading, setLoading] = React.useState(false)

    //AI PART
    const GetVideoScript = async(formData)=>{

        const prompt = `Write a script to generate ${formData.duration} video on topic : ${formData.topic} along with AI Image prompt in ${formData.style} format for each scene and give me the result in JSON format with ImagePrompt and ContentText as field`
        setLoading(true);
        const res = await axios.post('/api/get-video-script',{prompt:prompt}).then(resp=>{
            console.log(resp.data.response.candidates[0].content.parts[0].text);
            setVideoScript(resp.data.response.candidates[0].content.parts[0].text);
        });
        setLoading(false);
    }

    const [formData, setFormData] = React.useState(
        {
            topic: '',
            style: '',
            duration: ''
        }
    );
    const onHandleInputChange = (fieldName,fieldValue)=>{
        setFormData(
            {
                topic: fieldName=='topic'?fieldValue:formData.topic,
                style: fieldName=='style'?fieldValue:formData.style,
                duration: fieldName=='duration'?fieldValue:formData.duration
            }
        );
    }
  return (
    <div className='py-4 px-8 h-full w-full flex flex-col gap-6 justify-center items-center'>
        <div className='text-4xl font-bold mb-4 text-center text-teal-600'>
            Create New Video
        </div>
      <div className='shadow-md w-[90%] shadow-teal-600'>
        <div className='p-10 w-full '>
            <SelectTopic onHandleInputChange={onHandleInputChange}/>
        </div>
      </div>
      <div className='shadow-md w-[90%] shadow-teal-600'>
        <div className='p-10 w-full '>
            <Style onHandleInputChange={onHandleInputChange} />
        </div>
      </div>
      <div className='shadow-md w-[90%] shadow-teal-600'>
        <div className='p-10 w-full '>
            <Duration onHandleInputChange={onHandleInputChange}/>
        </div>
      </div>
      <div className='w-[90%]'>
        <Button className=' py-6  text-xl w-full' onClick={()=>GetVideoScript(formData)}>Create Short</Button>
      </div>
      <CustomLoader loading={loading}/>
    </div>
  )
}

export default page





