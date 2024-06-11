import { useLoaderData } from "react-router-dom"

export const AllGeneros=()=>{
    const res = useLoaderData()
    console.log(res);
    return (
        <div className="container-fluid text-bg-secondary p-3">
            {
                res.map(({id_genero, nombre})=>(
                    <article className="card card-body" key={id_genero}>
                        <p className="card-title">{nombre}</p>
                    </article>
                ))
            }
        </div>
    )
}