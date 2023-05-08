import React from 'react';
import './TodoCounter.css';

function TodoCounter ({completedTodos,totalTodos, loading}) {

    // Uso de useContext
    // const {
    //     completedTodos:completed,
    //     totalTodos:total,
    // } = React.useContext(TodoContext)

    return(
        // Opcion de uso de la etiqueta Consumer

                <h2 className={`TodoCounter ${loading && 'TodoCounter__h2--loading'}` }
                > Haz completado {completedTodos} de {totalTodos} TODO's</h2>
            )
}

// exportacion por encapsulamiento 
export {TodoCounter};