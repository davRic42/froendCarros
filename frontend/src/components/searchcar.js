import React, { useState } from "react"; // Importa React y useState
import axios from "axios";

export function CardResult({ datos }) {
    const carData = datos.data;
    console.log(carData);
    //console.log(carData.idcar);
    if (carData) {
        return (
            <>
                <p><p>ID:</p>{carData.idcar}<br />
                    <p>Modelo:</p>{carData.carModelo}<br />
                    <p>Matricula:</p>{carData.carMatricula}<br/>
                    <p>Marca:</p>{carData.carMarca}<br/>
                    <p>Color:</p>{carData.carColor}<br/>
                </p>
            </>
        );
    }
    return null;
}

function Search() {
    const [idcar, setIdCar] = useState('');
    const [data, setData] = useState(null);

    const onChangeId = (event) => {
        setIdCar(event.target.value);
    }

    const handleConsult = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.get(`consultCar/${idcar}`);
            setData(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="card text-white bg-primary mb-3 container-fluid mt-5 w-50 p-3">
            <div className="card-header text-dark">Búsqueda</div>
            <form className="form-group p-3" onSubmit={handleConsult}>
                <label>Ingrese el id para hacer la búsqueda</label>
                <input
                    onChange={onChangeId}
                    value={idcar}
                    type="number"
                    className="form-control p-3"
                    placeholder="ID del carro" />
                <button className="btn btn-primary m-3">Buscar</button>
            </form>
            {data && <CardResult datos={data} />}
        </div>
    );
}

export default Search; // Exporta Search como componente por defecto
