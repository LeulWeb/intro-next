// simple export different HTTP verbs we want to allow

import { NextResponse } from "next/server"
import db from '@/utils/db'


export const GET = async (request)=>{
    let data = await db.todo.findMany({})
    return NextResponse.json(
       {data: data}
    )
}   

export const POST = async (request)=>{
    let data = await request.json()
    const todo = await db.todo.create({
        data
    })
    return NextResponse.json({message: todo})
}