import React from "react";
import { TodoForm } from "../../ui/TodoForm";
import { useTodos } from "../useTodos";


function NewTodoPage(){
    
    const { stateUpdaters } = useTodos();
    const { addTodo } = stateUpdaters;

    return(
        <TodoForm
        label="Agrega tu nuevo Todo's"
        submitText="Añadir"
        placeholder="Escribe tu nuevo Todo"
        textAreaText=""
        submitEvent={(text) => addTodo(text)}
        />
    )
}

export { NewTodoPage };