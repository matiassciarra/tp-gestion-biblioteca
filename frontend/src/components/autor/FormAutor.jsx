//css
import '../../assets/autores/FormAutor.css'
//react-hook-form
import Form from 'react-bootstrap/Form';
import { useForm, Controller } from 'react-hook-form'
import { getPaises } from '../../service/paises';
import { useEffect, useState } from 'react';

export const FormAutor = ({action = null, accionModificar}) => {
    const [paises, setPaises] = useState([]);
    useEffect(() => {
        const fetchPaises = async () => {
            const paisesData = await getPaises();
            setPaises(paisesData);
        };
        fetchPaises();
    }, []);

    const { 
        handleSubmit,
        formState: { errors },
        control,
        watch,
    } = useForm();

    const onSubmit = (data) => {
        action(data,accionModificar)
    };

    const validateDate = (value) => {
        const today = new Date();
        const inputDate = new Date(value);
        const minDate = new Date(today.getFullYear() - 5, today.getMonth(), today.getDate());
        return inputDate <= minDate || 'La fecha de nacimiento debe ser al menos 5 años menor que la fecha actual';
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="nombre">Nombre de Autor:</label>
                <Controller
                    name='nombre'
                    control={control}
                    render={({ field }) => (
                        <Form.Control {...field} type="text" placeholder="Nombre" isInvalid={errors.nombre} />
                    )}
                    rules={{
                        required: 'Este campo es obligatorio',
                        minLength: {
                            value: 5,
                            message: 'El nombre debe tener al menos 5 caracteres'
                        },
                        maxLength: {
                            value: 18,
                            message: 'El nombre no puede tener más de 18 caracteres'
                        }
                    }}
                />
                {errors.nombre && <span className="invalid-feedback">{errors.nombre.message}</span>}

                <label htmlFor="apellido">Apellido:</label>
                <Controller
                    name='apellido'
                    control={control}
                    rules={{
                        required: 'Este campo es obligatorio'
                    }}
                    render={({ field }) => (
                        <Form.Control {...field} type="text" placeholder="Apellido" isInvalid={errors.apellido} />
                    )}
                />
                {errors.apellido && <span className="invalid-feedback">{errors.apellido.message}</span>}

                <label htmlFor="biografia">Biografía:</label>
                <Controller
                    name='biografia'
                    control={control}
                    render={({ field }) => (
                        <Form.Control {...field} type="text" placeholder="biografia" isInvalid={errors.biografia} />
                    )}
                />
                {errors.biografia && <span className="invalid-feedback">{errors.biografia.message}</span>}

                <label htmlFor="fecha_nacimiento">Fecha de Nacimiento:</label>
                <Controller
                    name='fecha_nacimiento'
                    control={control}
                    rules={{
                        required: 'Debe insertar una fecha de nacimiento',
                        validate: validateDate 
                    }}
                    render={({ field }) => (
                        <Form.Control 
                            {...field} 
                            type="date" 
                            isInvalid={errors.fecha_nacimiento}
                        />
                    )}
                />
                {errors.fecha_nacimiento && <div className="invalid-feedback">{errors.fecha_nacimiento.message}</div>}

                <label htmlFor="pais">País:</label>
                <Controller
                    name='id_pais'
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <Form.Select 
                            value={field.value || ''}
                            {...field}
                            onChange={(e) => field.onChange(parseInt(e.target.value, 10))}
                        >
                            <option value="">Seleccione un país</option>
                            {paises.map(({ id_pais, nombre }) => (
                                <option key={id_pais} value={id_pais}>{nombre}</option>
                            ))}
                        </Form.Select>
                    )}
                    rules={{
                        required: 'Es requerido un país',
                        validate:()=> watch('id_pais') || 'seleccion un pais' 
                    }}
                />
                {errors.id_pais && <div className="invalid-feedback">{errors.id_pais.message}</div>}

                <label htmlFor="url">URL:</label>
                <Controller
                    name='URL'
                    control={control}
                    render={({ field }) => (
                        <Form.Control {...field} type="text" placeholder="URL" isInvalid={errors.biografia} />
                    )}
                />

                <button className='btn btn-primary primary' type="submit">Enviar</button>
                <br />
                <pre>{JSON.stringify(watch(), null, 2)}</pre>
            </form>
        </>
    );
};
