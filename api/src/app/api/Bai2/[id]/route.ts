import { NextRequest, NextResponse } from 'next/server'
import React from 'react'
import fs from 'fs'
export async function GET(request:NextRequest,{params}:{params:{id:string}}) {
    let id = params.id
    const users = await JSON.parse(fs.readFileSync("./users.json", "utf-8"))
    let user= users.find((user:any)=>user.id==id)

    if(!user) {
        return NextResponse.json({message: "User not found"}, {status: 404})
    }
    return NextResponse.json(user)

}
