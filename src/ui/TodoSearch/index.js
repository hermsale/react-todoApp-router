import React, { useEffect } from "react";

import "./TodoSearch.css";


// le indicamos que va a recibir los argumentos por params - desestructuracion del props
function TodoSearch ({searchValue, setSearchValue, loading, params, setParams}){

    // tomamos por parametro el objeto event de los cambios del input 
    // cada vez que hagamos un cambio en el input, va a llamar a la funcion setSearchValue para actualizar su estado
    const onSearchValueChange = (event) =>{
       console.log(event.target.value);
    //    por medio de la funcion, seteamos un valor nuevo al estado searchValue
       setSearchValue(event.target.value);

       let params = {
        search: event.target.value,
       };
       setParams(params);
    }

    // utilizamos este useEffect, para que corrobore constantemente si hay algun cambio en el setSearchValue o params
       useEffect(() => {
        const search = params.get("search") ?? "";
        setSearchValue(search);
       },[params,setSearchValue]);
       
    

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
