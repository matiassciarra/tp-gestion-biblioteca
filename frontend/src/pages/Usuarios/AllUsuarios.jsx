// ../../pages/Usuarios/Usuarios.js
import React from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import TablaUsuarios from '../../components/usuarios/Tabla';

export const AllUsuarios = () => {
    return (
        <div>
            <TablaUsuarios />
        </div>
    )
};