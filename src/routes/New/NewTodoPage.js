import React from "react";
import { TodoForm } from "../../ui/TodoForm";
function NewTodoPage(){
    return(
        <TodoForm
        label="Agrega tu nuevo Todo's"
        submitText="Añadir"
        textarea="Escribe tu nuevo Todo"
        submitEvent={() => console.log('llamar al addTodo')}
        />
    )
}

export { NewTodoPage };