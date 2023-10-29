import TodoCard from "./TodoCard"


const TodoList = ({todoList})=>{
    return (
        <>
            <div>
                {todoList.map(todo=>{
                    return <TodoCard  todo={todo} key={todo.id}  />
                })}
            </div>
        </>
    )
}

export default TodoList