import React from   'react';
import './TodoList.css'

function TodoList(props){
    return (
        <section className='TodoList__container'>
            {props.error && props.onError()}
            {props.loading && props.onLoading()}
            {(props.loading && !props.searchedTodos.lenght) && props.onEmptyTodos()}

            {props.searchedTodos.map(props.render)}
            <ul>
                {props.children}
            </ul>
        </section>
    );
}

export {TodoList};