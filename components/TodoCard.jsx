'use client'
import { updateTodo } from "@/utils/create"
import { useTransition } from "react"


let TodoCard = ({todo})=>{

    // use transition hook is basically used to depritorize
    let [transition, startTransition] = useTransition()

    return (<div>
        <p  className={`${todo.done && 'line-through' }`} >{todo.content}</p>
        <button onClick={()=>{
            startTransition(()=>updateTodo(todo.id))
        }}>Completed</button>
    </div>)
}

export default TodoCard