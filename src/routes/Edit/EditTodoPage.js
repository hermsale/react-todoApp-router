import React from "react";
import { TodoForm } from "../../ui/TodoForm";
import { useTodos } from "../useTodos";
import { useParams } from "react-router-dom";

function EditTodoPage(){

    // tomamos el parametro, y lo pasamos a numero 
    const params = useParams()
    const id = parseInt(params.id);
    console.log('el id es', params.id)

    const {stateUpdaters, state } = useTodos();
    
    const { editTodo } = stateUpdaters;
    const { getTodo, loading } = state;

    const todo = getTodo(id);

    let defaultText;
    let placeholderText;

    if(loading) {
        placeholderText='cargando...';
        defaultText = ''
    }else{
        defaultText = todo.text;
        placeholderText= '';
    }

    return(
        <TodoForm
        label="Edita tu Todo"
        submitText="Modificar"
        placeholder={placeholderText}
        textAreaText={defaultText}
        submitEvent = { (text) => editTodo(id, text)}
        />
    )
}

export { EditTodoPage };