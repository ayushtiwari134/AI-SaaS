import { chatSession } from "../../../configs/aimodel";
import { NextResponse } from "next/server";

export async function POST(req){
   try{
    
    const {prompt} = await req.json();
    const res = await chatSession.sendMessage(prompt);
    console.log(res);
    return NextResponse.json(res, {status: 200});

   }catch(e){
         return NextResponse.json({error: e.message}, {status: 500})
   } 
}