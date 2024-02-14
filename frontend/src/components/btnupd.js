import React from 'react';
import Swal from "sweetalert2";
import axios from "axios";

export default function ButtonUp({ idcar, carModelo, carMarca, carColor, carMatricula }) {
    const handleUpdate = async () => {
        console.log(idcar);

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
                const responseUp = await axios.put(`/updateCar/${idcar}`, formData);
                console.log(responseUp.data);
                // Opcional: Podrías mostrar un mensaje de éxito aquí usando Swal.fire()
                Swal.fire('¡Actualización exitosa!', 'El carro se ha actualizado correctamente.');
            } catch (error) {
                console.error(error);
                // Opcional: Podrías mostrar un mensaje de error aquí usando Swal.fire()
                Swal.fire('¡Error!', 'Ha ocurrido un error al actualizar el carro.', 'error');
            }
        }

        // No es recomendable recargar la página manualmente
        // window.location.reload();
    };

    return (
        <button
            type="button"
            className="btn btn-success"
            onClick={handleUpdate}
        >
            Update
        </button>
    );
}
