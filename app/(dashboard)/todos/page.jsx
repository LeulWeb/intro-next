// console.log(process.argv)

import db from '@/utils/db'
import TodoList from '@/components/TodoList'
//fetch data from prisma 

const getTodo = async ()=>{
    let data = await db.todo.findMany({})
    console.log(data)
    return data
}

// export const revalidate = 0;

const Dashboard =async ()=>{

    let todoList = await getTodo()

    return (
        <>
         <h1>Dashboard page</h1>
          <TodoList  todoList={todoList}  />
        </>
    )
}


export default Dashboard