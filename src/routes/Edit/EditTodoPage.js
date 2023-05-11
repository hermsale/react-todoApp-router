import React from "react";
import { TodoForm } from "../../ui/TodoForm";

function EditTodoPage(){
    return(
        <TodoForm
        label="Edita tu Todo"
        submitText="Modificar"
        textarea="Modifica tu Todo"
        submitEvent={() => console.log('llamar al edit Todo')}
        />
    )
}

export { EditTodoPage };