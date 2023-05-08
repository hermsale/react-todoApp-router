import React from "react";

import "./TodoSearch.css";


// le indicamos que va a recibir los argumentos por params - desestructuracion del props
function TodoSearch ({searchValue, setSearchValue, loading}){

    // tomamos por parametro el objeto event de los cambios del input 
    // cada vez que hagamos un cambio en el input, va a llamar a la funcion setSearchValue para actualizar su estado
    const onSearchValueChange = (event) =>{
       console.log(event.target.value);
    //    por medio de la funcion, setteamos un valor nuevo al estado searchValue
       setSearchValue(event.target.value);
    }

    return (
        <input 
            className="TodoSearch"
            placeholder='Escribe aquí una tarea'
            // indicamos que el valor sera igual al del estado - por convención de React hay que realizar este paso
            value={searchValue}
            // cada cambio que haya en el input, se transladará a la funcion
            onChange={onSearchValueChange}
            disabled={loading}
        />
    )
}
export { TodoSearch };
