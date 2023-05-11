import React from "react";
import { TodoForm } from "../../ui/TodoForm";
import { useTodos } from "../useTodos";
import { useParams } from "react-router-dom";

function EditTodoPage(){

    const params = useParams()
    const id = parseInt(params.id);
    console.log('el id es', params.id)

    const {stateUpdaters } = useTodos();
    const { editTodo } = stateUpdaters;

    return(
        <TodoForm
        label="Edita tu Todo"
        submitText="Modificar"
        textarea="Modifica tu Todo"
        submitEvent = { (text) => editTodo(id, text)}
        />
    )
}

export { EditTodoPage };