import React from 'react';
import './TodoCounter.css';

function TodoCounter ({completedTodos,totalTodos}) {

    // Uso de useContext
    // const {
    //     completedTodos:completed,
    //     totalTodos:total,
    // } = React.useContext(TodoContext)

    return(
        // Opcion de uso de la etiqueta Consumer

                <h2 className='TodoCounter'> Haz completado {completedTodos} de {totalTodos} TODO's</h2>
            )
}

// exportacion por encapsulamiento 
export {TodoCounter};