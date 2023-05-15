import React from 'react';
import './CreateTodoButton.css' ;




function CreateTodoButton(props) {

    // esta funcion la utilizabamos con los modales 
    // const onClickButton = () => {
    //     // hacemos del boton para crear un Todo, un boton Toggle - prevState es un parametro para acceder al estado anterior del componente 
    //         props.setOpenModal(prevState => !prevState);
    //     };
        

    // enviamos los parametros para la funcion 
    return (
        <button className='CreateTodoButton'  onClick = {props.onNavigateNew}>+</button>
        )
    };

export {CreateTodoButton};