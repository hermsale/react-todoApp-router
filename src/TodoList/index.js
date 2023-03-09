import React from   'react';
import './TodoList.css'

function TodoList(props){
    return (
        <section className='TodoList__container'>
            {props.error && props.onError()}
            {props.loading && props.onLoading()}
            {/* {(!props.loading && !props.searchedTodos?.lenght) && props.onEmptyTodos()} */}
            {(!props.loading && !props.searchedTodos?.length) && props.onEmptyTodos()}
          
        
                {/* {props.searchedTodos?.map(props.render)} */}
            <ul>
                {props.searchedTodos.map(todo => props.render(todo))}
                
                {/* {props.children} */}
            </ul>
            { (!props.loading && props.completedTodos) ? <p className="TodoCompleted">Tienes Todo's para eliminar</p> : <p></p>}  
            
        </section>
    );
}

export {TodoList};