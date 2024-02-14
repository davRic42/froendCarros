import React from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useState } from "react";

export default function Forms() {
    axios.defaults.baseURL = "http://localhost:8080";
    const [formData, setFormData] = useState({
        carMarca: '',
        carModelo: '',
        carMatricula: '',
        carColor: '',
        carState: 1
    });
    const handleChange = (event) => {
        setFormData({
            ...formData, [event.target.name]: event.target.value
        });
    }

    //tomar datos del formulario y mandarlos a back
    const handleFormSubmit = async (event) => {
        console.log(formData.carColor);
        event.preventDefault();

        try {
            const response = await axios.post(`/insertCar`, formData);
            const mensaje = response.data.message;
            console.log('Respuesta del servidor:', mensaje);

            Swal.fire({
                title: "registro realizado correctamente",
                text: mensaje,
                icon: "success",
                confirmButtonColor: "#3085d6",
                confirmButtonText: "ok"
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.reload();
                }
            });
        } catch (e) {
            console.log(`error al enviar datos '${e}'`);
        }
    }

    return (
        // comentario de prueba
        <div className="m-4">
            <h2>Ingreso del carro</h2>
            <form onSubmit={handleFormSubmit}>
                <div className="form-group" >
                    <label className="col-sm-2 col-form-label" htmlFor='inpMarca'>Marca:</label>
                    <input
                        required
                        id='inpMarca'
                        value={formData.carMarca}
                        onChange={handleChange}
                        type='text'
                        name='carMarca'
                        className='form-control w-75'
                        placeholder='marca del carro' />
                </div>
                <div className="form-group">
                    <label className="col-sm-2 col-form-label" htmlFor='inpMatricula'>Matricula:</label>
                    <input
                        required
                        id='inpMatricula'
                        value={formData.carMatricula}
                        onChange={handleChange}
                        type='text'
                        name='carMatricula'
                        className='form-control w-75'
                        placeholder='matricula del carro' />
                </div>
                <div className="form-group">
                    <label className="col-sm-2 col-form-label" htmlFor='inpModelo'>Modelo:</label>
                    <input
                        required
                        id='inpModelo'
                        value={formData.carModelo}
                        onChange={handleChange}
                        type='text'
                        name='carModelo'
                        className='form-control w-75'
                        placeholder='modelo del carro' />
                </div>
                <div className="form-group">
                    <label className="col-sm-2 col-form-label" htmlFor='inpColor'>Color:</label>
                    <input
                        required
                        id='inpColor'
                        value={formData.carColor}
                        onChange={handleChange}
                        type='text'
                        name='carColor'
                        className='form-control w-75'
                        placeholder='color del carro' />
                </div>
                <div className='form-group'>
                    <button type="submit" className="btn btn-info">Subir</button>
                </div>
            </form>
        </div>
    );
}