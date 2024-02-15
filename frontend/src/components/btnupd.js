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
                <label className="col-sm-2 col-form-label" htmlFor='inputMatricula'>Matricula:</label>
                <input id="inputMatricula" class="swal2-input" type="text" placeholder="Nueva matricula" value="${carMatricula}">
                <label className="col-sm-2 col-form-label" htmlFor='inputModelo'>Modelo:</label>
                <input id="inputModelo" class="swal2-input" type="text" placeholder="Nuevo modelo" value="${carModelo}">
                <label className="col-sm-2 col-form-label" htmlFor='inputMarca'>Marca:</label>
                <input id="inputMarca" class="swal2-input" type="text" placeholder="Nuevo Marca" value="${carMarca}">
                <label className="col-sm-2 col-form-label" htmlFor='inputColor'>Color:</label>
                <input id="inputColor" class="swal2-input" type="text" placeholder="Nuevo Color" value="${carColor}">
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
                Swal.fire({
                    title: "cambios realzado con exito",
                    confirmButtonText: "ok",
                  }).then((result) => {
                    /* Read more about isConfirmed, isDenied below */
                    if (result.isConfirmed) {
                        window.location.reload();
                    }
                  });
            } catch (error) {
                console.error(error);
                console.log(error);
                Swal.fire('¡Error!', 'Ha ocurrido un error al actualizar el carro.', 'error');
            }
        }

        // No es recomendable recargar la página manualmente
        
    };

    return (
        <button
            type="button"
            className="btn btn-info"
            onClick={handleUpdate}
        >
            Update
        </button>
    );
}
