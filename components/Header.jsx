import Link from "next/link"
const Header = ()=>{
    let links = [
        {
            'path': '/',
            'label': 'Home'
        },
        {
            'path': '/docs',
            'label': 'Docs'
        },
        {
            'path': '/todos',
            'label': 'Todos'
        },
    ]


    return (
        <>
            <header>
                <div className="w-10/12 py-5 flex items-center justify-between mx-auto">
                    {
                        links.map((link,index)=>{
                            return <Link key={index} href={link.path}>{link.label}</Link>
                        })
                    }
                </div>
                <hr />
            </header>
        </>
    )
}

export default Header