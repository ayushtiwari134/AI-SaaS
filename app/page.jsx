"use client";


import { UserButton } from "@clerk/nextjs";

export default function Home() {
  
  return ( 
    <div className="text-4xl flex justify-between px-12 items-center">
      <h1>Helllooo</h1>
      <UserButton/>
    </div>
  );
}
