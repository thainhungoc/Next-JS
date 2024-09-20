import { NextResponse } from 'next/server'
import React from 'react'
import fs from 'fs'

export async function GET() {
    const data= await JSON.parse(fs.readFileSync("./users.json","utf-8"))
  return NextResponse.json(data);
   
  
}
