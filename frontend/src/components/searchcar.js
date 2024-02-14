import React from "react";
import { useState } from "react";
import axios from "axios";

export function cardResult({datos}) {
    const carData = datos.data;
    console.log(carData[0]);
    if (carData) {
        return (
            <>
                <p><p>ID:</p>{carData.idcar}<br />
                    <p>Modelo:</p>{carData.carModelo}<br />
                    <p>Matricula:</p>{carData.carMatricula}<br/>
                    <p>Marca:</p>{carData.carMarca}<br/>
                    <p>Color:</p>{carData.carcColor}<br/>
                </p>

            </>

        );
   
}}

export default function Search() {
    const [idcar, setIdCar] = useState('');
    const [Data, setData] = useState([]);

    const onChangeId = (event) => {
        setIdCar(event.target.value);
    }

    const handleConsult = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.get(`consultCar/${idcar}`);
            setData(response.data);
            console.log(Data);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="card text-white bg-prymary mb-3 container-fluid mt-5 w-50 p-3" >

            <div class="card-header text-dark">busqueda</div>
            <form class="form-group p-3" onSubmit={handleConsult}>
                <label> ingrese el id para hacer la busqueda</label>
                <input
                    onChange={onChangeId}
                    value={idcar}
                    type="number"
                    class="form-control p-3"
                    placeholder="id del carro" />
                <button class="btn btn-primary m-3">buscar</button>
            </form>
            {Data && <cardResult datos={Data} />}
        </div>
    );
}