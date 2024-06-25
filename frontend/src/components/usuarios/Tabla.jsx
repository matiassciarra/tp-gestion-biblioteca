import React, { useState, useEffect } from 'react';
import { getAllUsuarios } from '../../service/usuarios';
import { getPaises } from '../../service/paises'


const TablaUsuarios = () => {
    const [usuarios, setUsuarios] = useState([]);
    const [paisesMap, setPaisesMap] = useState({});

    useEffect(() => {

        const fetchUsuarios = async () => {
            try {
                const data = await getAllUsuarios();
                setUsuarios(data);
            } catch (error) {
                console.error('Error al obtener los usuarios:', error);
            }
        };

        const fetchPaises = async () => {
            try {
                const dataPaises = await getPaises();
                // Crear un mapa de paises indexado por id_pais
                const paisesIndexados = {};
                dataPaises.forEach(pais => {
                    paisesIndexados[pais.id_pais] = pais.nombre;
                });
                setPaisesMap(paisesIndexados);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        
        fetchUsuarios();
        fetchPaises();
    }, []);
    console.log(paisesMap)
    return (
        <div className="table-responsive rounded p-4">
            <h2 className='my-4 text-center'>Lista de Usuarios</h2>
            <table className="table table-striped table-bordered">
                <thead className='thead-dark'>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Correo</th>
                        <th>Estado del Usuario</th>
                        <th>País</th>
                        <th>Tipo de Usuario</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map(usuario => (
                        <tr key={usuario.id_usuario}>
                            <td>{usuario.nombre}</td>
                            <td>{usuario.apellido}</td>
                            <td>{usuario.username}</td>
                            <td>{usuario.correo}</td>
                            <td>{paisesMap[usuario.id_pais]}</td>
                            <td>{usuario.id_tipo_usuario}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TablaUsuarios;
