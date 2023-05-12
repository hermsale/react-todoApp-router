import React from 'react';
import "./TodoForm.css";
import { useNavigate } from 'react-router-dom';

function TodoForm(
    props
){

    
    //  guarda el cambio de valor del textarea
    const [newTodoValue, setNewTodoValue] = React.useState('');
    const navigate = useNavigate();

    // aqui guardaremos los cambios que haya en el textArea que es lo que enviaremos a la funcion que guardará el Todo
    

    const onChange = (event) => {
        setNewTodoValue(event.target.value);        
    }

    const onCancel = () => {
        // setOpenModal(false);
        // // volvemos a poner el placeholder del formulario
        // setNewTodoValue('');
        navigate('/');
    }

    const onSubmit = (event) => {
        event.preventDefault();
        // evitamos que se agreguen textos vacios a la lista
        if(newTodoValue.length > 0) {
        // addTodo(newTodoValue);
        
        props.submitEvent(newTodoValue);
        navigate('/');
        // volvemos a poner el placeholder del formulario
        setNewTodoValue('');
        }
    }

    return (
        <form onSubmit={onSubmit}>
            <label>{props.label}</label>
            <textarea
                placeholder={props.placeholder}
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
                    {props.submitText}
                </button>
            </div>
        </form>
    )
}

export {TodoForm};