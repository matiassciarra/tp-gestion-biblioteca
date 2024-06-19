import { useLoaderData } from "react-router-dom";
import '../../assets/generos/AllGeneros.css';
import { useState } from "react";
import { deleteGenero, getGenero } from "../../service/generos";
import ModalG from '../../components/generos/modal';

export const AllGeneros = () => {
    const initialData = useLoaderData();
    console.log(initialData);
    const [generos, setGeneros] = useState(initialData);
    const [searchTerm, setSearchTerm] = useState("");
    const [showModal, setShowModal] = useState(false);

    const handleSearch = async (e) => {
        e.preventDefault();
        console.log("Buscando género:", searchTerm);
        try {
            const genero = await getGenero(searchTerm);
            setGeneros([genero]); // Mostrar solo el género buscado
        } catch (error) {
            console.error("Error al buscar género:", error);
        }
    };

    const handlerDelete = async (id) => {
        try {
            await deleteGenero(id);
            setGeneros(generos.filter(genero => genero.id_genero !== id));
        } catch (error) {
            console.error("Error al eliminar el género:", error);
        }
    };

    const handleModalClose = () => setShowModal(false);
    const handleModalShow = () => setShowModal(true);

    const handleAddGenero = (nuevoGenero) => {
        setGeneros([...generos, nuevoGenero]);
    };

    return (
        <div className="conteiner-all-generos">
            <div className="add-button-container mt-4">
                <button onClick={handleModalShow} className="btn btn-success fw-bold">Agregar Género</button>
            </div>
            <div className="search-container mt-4">
                <form onSubmit={handleSearch}>
                    <input 
                       type='text'
                       className="form-control"
                       placeholder="Buscar Género"
                       value={searchTerm}
                       onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button type="submit" className="btn btn-primary fw-bold mt-2">Buscar</button>
                </form>
            </div>
            {
                generos.map(({ id_genero, nombre ,url}) => (
                    <article className="card card-body" key={id_genero}>
                        <img src={url}/>
                        <h1 className="card-title text-black">{nombre}</h1>
                        <div>
                            <button type='button' className="btn btn-primary card-link fw-bold">Editar</button>
                            <button type='button' onClick={() => handlerDelete(id_genero)} className="btn btn-danger card-link fw-bold">Eliminar</button>
                        </div>
                    </article>
                ))
            }
            <ModalG show={showModal} handleClose={handleModalClose} onSave={handleAddGenero} />
        </div>
    );
};
