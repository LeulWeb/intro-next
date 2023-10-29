import { newTodo } from "../utils/create"

const NewTodo = ()=>{
    return (
        <div>
            <form action={newTodo}>
                <input type="text" name="content" />
                <button type="submit">Create Todo</button>
            </form>
        </div>
    )
}

export default NewTodo