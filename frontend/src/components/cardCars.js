import React from "react";
import axios from "axios";
import Swal from "sweetalert2";
import ButtonDel from "./btndel";
import ButtonUp from "./btnupd";
import { useEffect, useState } from "react";

export function CardCars({ datos }) {
    if (!datos || !datos.message) {
        return (
            <>
                <p>no hay carros registrados</p>
            </>
        );
    }
    const userData = datos.data;
    console.log(datos.data);
    const filteredData = datos.filter((cars) => cars.carsState === 1);
    if (userData.userState) {
        return (
            <>
                {filteredData.map((cars) => (
                    <div class="card text-white bg-success mb-3" style="max-width: 20rem;">
                        <div class="card-header">{cars.carId}</div>
                        <div class="card-body">
                            <h4 class="card-title"></h4>
                            <p class="card-text"></p>
                            <div className="d-flex p-3">
                                <ButtonDel carId={cars.carId} />
                                <ButtonUp carId={cars.carId} />
                            </div>
                        </div>
                    </div>
                ))}

            </>

        );
    } else {
        return (
            <>
                <p>no hay carros registrados</p>
            </>
        );
    }
}

export default function Carsget() {
    const [dataCar, setDataCar] = useState([]);
    const [shouldUpdate, setShouldUpdate] = useState(false);
    const fetchData = async () => {
        try {
            const response = await axios.get("/user");
            setDataCar(response.dataCar[0]);

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