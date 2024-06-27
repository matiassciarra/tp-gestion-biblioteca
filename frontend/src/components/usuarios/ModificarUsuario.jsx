import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { updateUsuario } from '../../service/usuarios';
import { getPaises } from '../../service/paises';
import { useNavigate } from 'react-router-dom';

export const ModificarUsuario = ({ object, option }) => {
    const [paises, setPaises] = useState([])
    const { id_usuario, nombre, apellido, Pai, username, password, correo, url } = object;
    const { 
        handleSubmit,
        register,
        formState: { errors }
    } = useForm();
    const navigate = useNavigate();

    const onSubmit = handleSubmit(async (data) => {
        const datosActualizados = {
            nombre: data.nombre || nombre,
            apellido: data.apellido || apellido,
            id_pais: data.id_pais || Pai.id_pais,
            url: data.url || url,
        };

        try {
            await updateUsuario(datosActualizados, id_usuario)
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

    if (option === 1) {
    return (
        <div className='container mt-5'>
            <form onSubmit={onSubmit}>
                <div className='form-group mb-3'>
                    <label htmlFor='inp-nombre' className='fw-bold text-white'>
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
                    <label htmlFor='inp-apellido' className='fw-bold text-white'>
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
                    <label htmlFor='inp-pais' className='fw-bold text-white'>
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
                    <label htmlFor='inp-url' className='fw-bold text-white'>
                        URL de la imagen del Avatar
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
                <div className='d-flex justify-content-center'>
                    <div className='d-flex flex-grow-1 justify-content-center mx-2'>
                    
                        <button
                            className="btn btn-primary btn-lg w-50 fw-bold"
                            onClick={() => navigate(-1)}
                        >
                                Volver
                        </button>
                    </div>
                    <div className='d-flex flex-grow-1 justify-content-center mx-2'>
                        <button
                            type='submit'
                            className='btn btn-warning btn-lg w-50 text-white fw-bold'
                        >
                            Modificar
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )} else if (option === 2) {
        const onSubmit = handleSubmit(async (data) => {
            const datosActualizados = {
                username: data.username || username,
                correo: data.correo || correo,
                password: data.password || password,
            };
    
            try {
                await updateUsuario(datosActualizados, id_usuario)
                navigate(-1);
            } catch (error) {
                console.error('Error al modificar el usuario')
            }
    
        });
    };

    return (
        <div className="container h-auto bg-light p-3 g-2 rounded" style={{ maxWidth: "500px" }}>
            <div className="d-flex text-align-center justify-content-center">
                <h1 className="text-bold">Modificar Usuario</h1>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label>Nombre de Usuario</label>
                    <input
                        type="text"
                        className="form-control"
                        {...register("username", {
                            required: "El nombre de usuario es requerido",
                            minLength: {
                                value: 3,
                                message: "El nombre de usuario debe tener como mínimo 3 caracteres",
                            },
                        })}
                    />
                    {errors.username && (
                        <span className="text-danger d-block">{errors.username.message}</span>
                    )}
                </div>
                <div className="form-group">
                    <label>Correo Electrónico</label>
                    <input
                        type="email"
                        className="form-control"
                        {...register("email", {
                            required: "El correo electrónico es requerido",
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "El formato del correo electrónico no es válido",
                            },
                        })}
                    />
                    {errors.email && (
                        <span className="text-danger d-block">{errors.email.message}</span>
                    )}
                </div>
                <div className="form-group">
                    <label>Contraseña</label>
                    <input
                        type="password"
                        className="form-control"
                        {...register("password", {
                            required: "La contraseña es requerida",
                            minLength: {
                                value: 8,
                                message: "La contraseña debe tener como mínimo 8 caracteres",
                            },
                        })}
                    />
                    {errors.password && (
                        <span className="text-danger d-block">{errors.password.message}</span>
                    )}
                </div>
                <button className="btn btn-primary m-2">Guardar Cambios</button>
            </form>
        </div>
    );
}