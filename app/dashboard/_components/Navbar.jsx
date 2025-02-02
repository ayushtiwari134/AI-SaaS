"use client";

import { UserButton, UserProfile } from '@clerk/nextjs'
import React from 'react'
import { Button } from "@/components/components/ui/button";
import Link from 'next/link';
import { useUser } from '@clerk/nextjs';

const Navbar = () => {

    const { user } = useUser();
  return (
    <div>
        <nav className="bg-teal-600 p-4 h-[65px]">
            <div className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-white text-2xl font-bold">Logo</Link>
            <ul className="flex gap-4 items-center justify-center text-white">
                <Button><Link href="/dashboard">Dashboard</Link></Button>
                <div className='text-white flex items-center gap-4 justify-center'>
                <UserButton/>
                <p>{user?.fullName}</p>
                </div>
            </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
