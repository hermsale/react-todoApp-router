import React from "react";
import { TodoForm } from "../../ui/TodoForm";
import { useTodos } from "../useTodos";


function NewTodoPage(){
    
    const { stateUpdaters } = useTodos();
    const { addTodo } = stateUpdaters;

    return(
        <TodoForm
        label="Agrega tu nuevo Recordatorio"
        submitText="Añadir"
        placeholder="Escribe aquí"
        textAreaText=""
        submitEvent={(text) => addTodo(text)}
        />
    )
}

export { NewTodoPage };