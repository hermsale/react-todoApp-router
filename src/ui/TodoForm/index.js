import React from 'react';
import "./TodoForm.css";

function TodoForm({
    addTodo, 
    setOpenModal,
    newTodoValue, 
    setNewTodoValue,  
}){


    // aqui guardaremos los cambios que haya en el textArea que es lo que enviaremos a la funcion que guardará el Todo
    

    const onChange = (event) => {
        setNewTodoValue(event.target.value);        
    }

    const onCancel = () => {
        setOpenModal(false);
        // volvemos a poner el placeholder del formulario
        setNewTodoValue('');
    }

    const onSubmit = (event) => {
        event.preventDefault();
        // evitamos que se agreguen textos vacios a la lista
        if(newTodoValue.length > 0) {
        addTodo(newTodoValue);
        setOpenModal(false);
        // volvemos a poner el placeholder del formulario
        setNewTodoValue('');
        }
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Agrega tu nuevo Todo's</label>
            <textarea
                placeholder='Agregar un Todo'
                value={newTodoValue}
                onChange={onChange}
            />
            <div className='TodoForm-buttonContainer'>
                <button
                    type="button"
                    className='TodoForm-button TodoForm-button--cancel'
                    onClick={onCancel}
                >
                    Cancelar
                </button>
                <button
                    onClick={onSubmit}
                    type="submit"
                    // si no hay nada escrito, que ,muestre el add_error
                    className={`TodoForm-button TodoForm-button--add ${(!newTodoValue.length > 0) && "TodoForm-button--add__error"} `}
                >
                    Añadir
                </button>
            </div>
        </form>
    )
}

export {TodoForm};