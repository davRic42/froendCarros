import React from 'react';
import Swal from "sweetalert2";
import axios from "axios";

export default function ButtonUp({ carId, carModelo, carMarca, carColor, carMatricula }) {
    const handleUpdate = async () => {
        console.log(carId);

        const { value: formValues } = await Swal.fire({
            title: 'Actualizar usuario',
            showCancelButton: true,
            cancelButtonColor: "#d33",
            html: `
                    <input id="inputMatricula" class="swal2-input" type="text" placeholder="Nuevo nombre" value="${carMatricula}">
                    <input id="inputModelo" class="swal2-input" type="text" placeholder="Nuevo nombre" value="${carModelo}">
                    <input id="inputMarca" class="swal2-input" type="text" placeholder="Nuevo nombre" value="${carMarca}">
                    <input id="inputColor" class="swal2-input" type="text" placeholder="Nuevo nombre" value="${carColor}">
                `,
            focusConfirm: false,
            preConfirm: () => {
                return [
                    document.getElementById('inputMatricula').value,
                    document.getElementById('inputModelo').value,
                    document.getElementById('inputMarca').value,
                    document.getElementById('inputColor').value
                ];
            }
        });

        if (formValues) {
            const [newMatricula, newModelo, newMarca, newColor] = formValues;
            const formData = {
                carMatricula: newMatricula,
                carModelo: newModelo,
                carMarca: newMarca,
                carColor: newColor,
            };

            try {
                console.log(formData);
                const responseUp = await axios.put(`/updateUser/${carId}`, formData);
                console.log(responseUp.data);
            } catch (error) {
                console.log(error);
            }
        }

        window.location.reload();

    };

    return (
        <button
            type="button"
            className="btn btn-outline-success"
            onClick={handleUpdate}
        >
            Update
        </button>
    );
}
