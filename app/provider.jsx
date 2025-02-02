'use client'

import { use } from 'react';
import { db } from '../configs/db';
import { Users } from '../configs/schema';
import { useUser } from '@clerk/nextjs'
import React from 'react'
import { useEffect } from 'react';
import { eq } from 'drizzle-orm';

const Provider = ({children}) => {

  const {user} = useUser();
    
  useEffect(()=>{
    user&& isNewUser();
  },[user])

  const isNewUser = async()=>{
    const res = await db.select().from(Users).where(eq(Users.email, user?.primaryEmailAddress?.emailAddress))

    if (!res[0]){
      await db.insert(Users).values({
        name: user?.fullName,
        email: user?.primaryEmailAddress?.emailAddress,
        subscription: false
      })
    }
  }


  return (
    <div>
      {children}
    </div>
  )
}

export default Provider
