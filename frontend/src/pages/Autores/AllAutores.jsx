import { useLoaderData, Link } from "react-router-dom";
export const AllAutores = () => {
    const res = useLoaderData();

    return (
        <article>
            {res.map(({ id_autor, nombre, apellido, biografia }) => (
                <div key={id_autor}>
                    <h1>Autor</h1>
                    <h2>
                        {nombre} {apellido}
                    </h2>
                    <h3>{biografia}</h3>
                    <Link to={`${id_autor}`}>Ver mas</Link>
                </div>
            ))}
        </article>
    );
};
