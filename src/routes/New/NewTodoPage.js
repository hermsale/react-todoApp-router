import React from "react";
import { TodoForm } from "../../ui/TodoForm";
import { useTodos } from "../useTodos";


function NewTodoPage(){
    
    const {stateUpdaters } = useTodos();
    const { addTodo } = stateUpdaters;

    return(
        <TodoForm
        label="Agrega tu nuevo Todo's"
        submitText="Añadir"
        textarea="Escribe tu nuevo Todo"
        submitEvent={(text) => addTodo(text)}
        />
    )
}

export { NewTodoPage };