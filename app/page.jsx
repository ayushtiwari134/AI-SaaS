"use client";

import { UserButton } from "@clerk/nextjs";
import { useState } from "react";

export default function Home() {
  
  const [count,setCount] = useState(0);
  return ( 
    <div className="text-4xl flex justify-between px-12 items-center">
      <h1>Helllooo</h1>
      <UserButton/>
    </div>
  );
}
