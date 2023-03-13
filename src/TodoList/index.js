import React from   'react';
import './TodoList.css'

function TodoList(props){
    // generamos esta variable por si nos mandan un render prop o una render function 
    const renderFunct = props.render || props.children;
    return (
        <section className='TodoList__container'>
            {props.error && props.onError()}
            {props.loading && props.onLoading()}
            
            
            {(!props.loading && !props.totalTodos) && props.onEmptyTodos()}

            {/* si HAY totalTodos, es falso. Y  si no se encuentran searchedTodos, es verdadero, pasa a negativo  */}
            {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptySearchResults(props.searchText)}
                    
            <ul>
                {props.searchedTodos.map(renderFunct)}
            </ul>
            { (!props.loading && props.completedTodos) ? <p className="TodoCompleted">Tienes Todo's para eliminar</p> : <p></p>}  
            
        </section>
    );
}

export {TodoList};