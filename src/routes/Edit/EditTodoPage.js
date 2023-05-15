import React from "react";
import { TodoForm } from "../../ui/TodoForm";
import { useTodos } from "../useTodos";
import { useLocation, useParams } from "react-router-dom";

function EditTodoPage(){

    // importamos el useLocation para atrapar los parametros state que le pasemos por el navigate del HomePage
    const location = useLocation();
    // console.log(location.state.item.text);


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

    if(location.state?.item){
        defaultText = location.state.item.text;
    }else 
    if(loading) {
        placeholderText='cargando...';
        defaultText = ''
    }else{
        defaultText = todo.text;
        placeholderText= '';
    }

    return(
        <TodoForm
        label="Edita tu Recordatorio"
        submitText="Modificar"
        
        placeholder={placeholderText}
        textAreaText={defaultText}
        submitEvent = { (text) => editTodo(id, text)}
        />
    )
}

export { EditTodoPage };