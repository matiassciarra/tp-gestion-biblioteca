import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { createGenero } from '../../service/generos';

const ModalG = ({ show, handleClose, onSave, genero,onUpDate }) => {
    const [inputValue, setInputValue] = useState("");
    const [inputURLValue, setInputURLValue] = useState("");

    useEffect(() => {
        if (genero) {
            setInputValue(genero.nombre);
            setInputURLValue(genero.url);
        } else {
            setInputValue("");
            setInputURLValue("");
        }
    }, [genero]);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };
    const handleInputURLChange = (e) => {
        setInputURLValue(e.target.value);
    };

    const handleSubmit = async () => {
        console.log("Nuevo Género:", inputValue);
        const generoData = { nombre: inputValue, url: inputURLValue };
        try {
          if (genero){
            onUpDate(genero.id_genero,generoData)
          }
          else {onSave(generoData)}
          
          
            
        } catch (error) {
            console.error("Error al crear o actualizar el género:", error);
        }
    };

    return (
        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>{genero ? "Editar Género" : "Agregar Nuevo Género"}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <input
                    type='text'
                    className='form-control'
                    placeholder='Ingrese nombre del género'
                    value={inputValue}
                    onChange={handleInputChange}
                />
                <input
                    type='text'
                    className='form-control'
                    placeholder='Ingrese la URL para la imagen'
                    value={inputURLValue}
                    onChange={handleInputURLChange}
                />
                
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cerrar
                </Button>
                <Button variant="primary" onClick={handleSubmit}>
                    Guardar
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalG;
