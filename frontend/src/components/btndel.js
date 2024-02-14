import Swal from "sweetalert2";
import axios from "axios";

export default function ButtonDel({idcar}){
    const handleDelete = ()=>{
        console.log(idcar);
        Swal.fire({
            title: 'Eliminar usuario',
            text: '¿Estás seguro de que deseas eliminar este usuario?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, eliminarlo'
        }).then((result) => {
            if (result.isConfirmed) {
                deleteUser()
                //onDelete(userId);
                // Aquí puedes realizar la acción de eliminación del usuario
               
            }
        });
    };

    const deleteUser=async()=>{
        try{
            const response=await axios.patch(`/deleteCar/${idcar}`);
            
            console.log(response);
        } catch(e){
            console.log(`error en la peticion '${e}'`);
        }
        window.location.reload();
    };

    return(
        <button 
        type="button"
         class="btn btn-danger"
         onClick={handleDelete}
         >Delete</button>
    );
}