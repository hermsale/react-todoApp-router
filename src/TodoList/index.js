import React from   'react';
import './TodoList.css'

function TodoList(props){
    return (
        <section className='TodoList__container'>
            {props.error && props.onError()}
            {props.loading && props.onLoading()}
            
            
            {(!props.loading && !props.totalTodos) && props.onEmptyTodos()}

            {/* si HAY totalTodos, es falso. Y  si no se encuentran searchedTodos, es verdadero, pasa a negativo  */}
            {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptySearchResults(props.searchText)}
                    
        
            <ul>
                {props.searchedTodos?.map(props.render)}
                {/* {props.searchedTodos.map(todo => props.render(todo))} */}
                {/* {props.children} */}
            </ul>
            { (!props.loading && props.completedTodos) ? <p className="TodoCompleted">Tienes Todo's para eliminar</p> : <p></p>}  
            
        </section>
    );
}

export {TodoList};