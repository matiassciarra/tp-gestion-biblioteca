import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { createGenero } from '../../service/generos';

const ModalG = ({ show, handleClose, onSave }) => {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = async () => {
        console.log("Nuevo Género:", inputValue);
        try {
            const nuevoGenero = await createGenero({ nombre: inputValue });
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
