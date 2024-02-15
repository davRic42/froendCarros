import React from "react";
import axios from "axios";
import Swal from "sweetalert2";
import ButtonDel from "./btndel";
import ButtonUp from "./btnupd";
import { useEffect, useState } from "react";

export function CardCars({ datos }) {
       
    const userData = datos;
    const carsFilterd= userData.filter(userData=>userData.carMatricula !==0);
    if (datos) {
        const carsFiltered = datos.filter(car => car.carMatricula !== "0");

        return (
            <>
                {carsFiltered.map((car) => (
                    <div class="card text-white bg-success mb-3" key={car.idcar}>
                        <div class="card-header d-flex"><p>ID:</p>{car.idcar}</div>
                        <div class="card-body">
                            <h4 class="card-title d-flex"><p>Marca:</p>{car.carMarca}</h4>
                            <p class="card-text d-flex"><p>Matricula:</p>{car.carMatricula}</p>
                            <p class="card-text d-flex"><p>Modelo:</p>{car.carModelo}</p>
                            <p class="card-text d-flex"><p>Color:</p>{car.carColor}</p>
                            <div className="d-flex p-10">
                                <ButtonDel idcar={car.idcar} />
                                <ButtonUp idcar={car.idcar} 
                                    carColor={car.carColor} 
                                    carModelo={car.carModelo} 
                                    carMatricula={car.carMatricula} 
                                    carMarca={car.carMarca}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </>
        );
    } else {
        return null; // Otra opción es mostrar un mensaje de carga o de que no hay datos
    }
}

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