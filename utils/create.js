'use server'

import { revalidatePath } from 'next/cache'
import db from './db'

export const updateTodo = async (id)=>{
    await db.todo.update(
        {
            where: {id} ,
            data: {
                done: true
            }
        }
    )

    revalidatePath('/todos')
}



// create a todo
export const newTodo= async (formData)=>{
    let todo = await db.todo.create({
        data:{
            content: formData.get('content')
        }
    })

    revalidatePath('/todos')
}