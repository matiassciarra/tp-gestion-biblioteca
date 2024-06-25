import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { updateUsuario } from '../../service/usuarios';
import { getPaises } from '../../service/paises';
import { useNavigate } from 'react-router-dom';

export const ModificarUsuario = ({ object }) => {
    const [paises, setPaises] = useState([])
    const { id_usuario, nombre, apellido, Pai, url } = object;
    const { 
        handleSubmit,
        register, 
    } = useForm();
    const navigate = useNavigate();

    const onSubmit = handleSubmit(async (data) => {
        try {
            await updateUsuario(data, id_usuario)
            navigate(-1);
        } catch (error) {
            console.error('Error al modificar el usuario')
        }

    });

    useEffect(() => {
        const fetchPaises = async () => {
            const paises = await getPaises();
            setPaises(paises);

        };
        fetchPaises();
    }, []);

    return (
        <>
            <form onSubmit={onSubmit}>
                <div className='form-group mb-3'>
                    <label htmlFor='inp-nombre' className='fw-bold text-dark'>
                        Nombre
                    </label>
                    <input
                    type='text'
                    className='form-control'
                    placeholder={nombre}
                    {...register('nombre', {
                        required: {
                            value: false,
                    },
                    maxLength: {
                        value:20,
                        message: 'El nombre puede contener como máximo 20 caracteres',
                    },
                    minLength: {
                        value: 3,
                        message: 'El nombre debe contener como mínimo 3 caracteres',
                    },
                    })}/>
                </div>
                <div className='form-group mb-3'>
                    <label htmlFor='inp-apellido' className='fw-bold text-dark'>
                        Apellido
                    </label>
                    <input
                    type='text'
                    className='form-control'
                    placeholder={apellido}
                    {...register('apellido', {
                        required: {
                            value: false,
                    },
                    maxLength: {
                        value:20,
                        message: 'El apellido puede contener como máximo 20 caracteres',
                    },
                    minLength: {
                        value: 3,
                        message: 'El apellido debe contener como mínimo 3 caracteres',
                    },
                    })}/>
                </div>
                <div className='form-group mb-3'>
                    <label htmlFor='inp-pais' className='fw-bold text-dark'>
                        País
                    </label>
                    <select
                        name='paisSelect'
                        className='form-control'
                        placeholder={Pai.nombre}
                        {...register("id_pais", {
                            required: {
                                value: false,
                        },
                        })}
                    >
                        <option value=''>{Pai.nombre}</option>
                            {paises.map((e) => (
                                <option key={e.id_pais} value={e.id_pais}>
                                    {e.nombre}
                                </option>
                            ))}
                    </select>
                </div>
                <div className='form-group mb-3'>
                    <label htmlFor='inp-url' className='fw-bold text-dark'>
                        URL
                    </label>
                    <input
                    type='text'
                    className='form-control'
                    placeholder={url}
                    {...register('url', {
                        required: {
                            value: false,
                    },
                    pattern: {
                        value: /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi,
                        message: "No sigue patron de url valido",
                    },
                    })}/>
                </div>
                <span className="accion">
                    <button
                        onClick={() => navigate(-1)}
                        className="btn btn-primary text-white fw-bold"
                    >
                            Volver
                    </button>
                </span>
            </form></>
    )
}