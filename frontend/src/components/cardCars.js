import React from "react";
import axios from "axios";
import Swal from "sweetalert2";
import ButtonDel from "./btndel";
import ButtonUp from "./btnupd";
import { useEffect, useState } from "react";

export function CardCars({ datos }) {
       
    const userData = datos;

    if (userData) {
        return (
            <>
                {datos.map((cars) => (
                    <div class="card text-white bg-success mb-3" >
                        <div class="card-header">{cars.idcar}</div>
                        <div class="card-body">
                            <h4 class="card-title">{cars.carMarca}</h4>
                            <p class="card-text">{cars.carMatricula}</p>
                            <p class="card-text">{cars.carModelo}</p>
                            <p class="card-text">{cars.carColor}</p>
                            <div className="d-flex p-3">
                                <ButtonDel carId={cars.idcar} />
                                <ButtonUp carId={cars.idcar} 
                                carColor={cars.carColor} 
                                carModelo={cars.carModelo} 
                                carMatricula={cars.carMatricula} 
                                carMarca={cars.carMarca}/>
                            </div>
                        </div>
                    </div>
                ))}

            </>

        );
}}

export default function Carsget() {
    const [dataCar, setDataCar] = useState([]);
    const [shouldUpdate, setShouldUpdate] = useState(false);
    const fetchData = async () => {
        try {
            const response = await axios.get("/car");
            setDataCar(response.data[0]);
            const data=response.data[0];
        } catch (error) {
            console.error("Error al obtener los datos:", error);
        }
    };

    useEffect(() => {

        fetchData();
        setShouldUpdate(false);

    }, [shouldUpdate]);

    return (
        <div className="m-5">
            {dataCar && <CardCars datos={dataCar} />}
        </div>
    );
}