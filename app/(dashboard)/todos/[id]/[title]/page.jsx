 const TodoTitle = ({params})=>{
    return (
        <>
            <h1>Title of todo {params.title} from {params.id}</h1>
        </>
    )
}


export default TodoTitle
