import { SignUp } from '@clerk/nextjs'
import Image from 'next/image'

export default function Page() {
  return (
    <div className="flex items-center justify-center h-screen bg-login">
      
      <SignUp />

    </div>
  )
}