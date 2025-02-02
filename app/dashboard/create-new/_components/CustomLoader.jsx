import React from 'react'

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import Image from 'next/image'
  


const CustomLoader = ({loading}) => {
  return (
    <div>
      <AlertDialog open={loading}>
        <AlertDialogContent>
        <AlertDialogTitle>
            <Image src={'/loader.gif'} width={100} height={100} alt='loader'/>
            <p>Loading</p>
        </AlertDialogTitle>
        </AlertDialogContent>
        </AlertDialog>
    </div>
  )
}

export default CustomLoader
