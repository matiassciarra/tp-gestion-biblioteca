import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { createGenero } from '../../service/generos';

const ModalG = ({ show, handleClose, onSave }) => {
    const [inputValue, setInputValue] = useState("");
    const [inputURLValue, setInputURLValue] = useState(null)
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };
    const handleInputURLChange = (e) => {
      setInputURLValue(e.target.value);
  };

    const handleSubmit = async () => {
        console.log("Nuevo Género:", inputValue);
        try {
            const nuevoGenero = await createGenero({ nombre: inputValue , url: inputURLValue});
            onSave(nuevoGenero);
            handleClose();
        } catch (error) {
            console.error("Error al crear el género:", error);
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
                <Modal.Title>Agregar Nuevo Género</Modal.Title>
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
