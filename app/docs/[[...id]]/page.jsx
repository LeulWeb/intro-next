const Docs = ({params})=>{
    return(
        <>
            <h1>DOCS page  {params.id != null ? params.id[0] : "Docs without Id" } </h1>
        </>
    )
}


export default Docs