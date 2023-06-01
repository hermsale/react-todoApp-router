import React from 'react';
import "../App.css";

import { useTodos } from '../useTodos';
import { TodoCounter } from '../../ui/TodoCounter';
import { TodoSearch } from '../../ui/TodoSearch';
import { TodoList } from '../../ui/TodoList';
import { TodoItem } from '../../ui/TodoItem';
import { CreateTodoButton } from '../../ui/CreateTodoButton';

// import { Modal } from '../../ui/Modal';
import { TodoLoading } from "../../ui/TodoLoading";
import { TodoError } from "../../ui/TodoError";
import { EmptyTodos } from "../../ui/EmptyTodos";
import { TodoHeader } from "../../ui/TodoHeader";
import { ChangeAlert } from '../../ui/ChangeAlert';
import { useNavigate } from 'react-router-dom';

function HomePage() {

    const navigate = useNavigate();

    const {
        state,
        stateUpdaters
    } = useTodos();

    // estados
    const {
        error,
        loading,
        totalTodos,
        completedTodos,
        searchValue,
        searchedTodos,
        // openModal,
        params,
    } = state;

    // actualizadores de estados 
    const {
        setSearchValue,
        toggleCompleteTodo,
        deleteTodo,
        // addTodo,
        // setOpenModal,
        sincronizeTodos,
        setParams
    } = stateUpdaters;

  return (
    
      <React.Fragment>
          
           
          <TodoHeader loading={loading}>
            
            <TodoCounter
                completedTodos={completedTodos}
                totalTodos={totalTodos}
                // loading={loading}
            />

            <TodoSearch
                searchValue={searchValue} 
                setSearchValue={setSearchValue} 
                params={params}
                setParams={setParams}  
                // loading={loading}        
            />

          </TodoHeader>
           
            <TodoList
            
            // render props 
            onLoading={() => <TodoLoading/>}
            
            // {
            //     loading && 
            //     (
            //         <TodoLoading />
            //     )
                
            // }
            onError={() => <TodoError/>}
            onEmptyTodos={() => <EmptyTodos/>}
            onEmptySearchResults = { (searchText) => <p className='onEmptySearchResults__p'>No se encontro resultados para "{searchText}" </p>}

            // estados de carga 
            searchedTodos={searchedTodos}
            error={error}
            loading={loading}
            completedTodos={completedTodos}
            totalTodos={totalTodos}
            searchText={searchValue}

            // render props
            
            render = { item => (
                <TodoItem 
                key={item.text}                                       
                text={item.text}
                completed={item.completed}

                onEdit = {() => navigate('/edit/'+item.id,{
                    state: {
                        item
                    }
                    
                })}
                onComplete={() => toggleCompleteTodo(item.id)}
                onDelete={() => deleteTodo(item.id)}
                />
            )}
            >
            {/* render functions */}
            {/* { item => (
                <TodoItem
                key={item.text}                                       
                text={item.text}
                completed={item.completed}
                onComplete={() => toggleCompleteTodo(item.text)}
                onDelete={() => deleteTodo(item.text)}
                />
            )}   */}
            </TodoList>
            
                            
                {/* solo si se hace click en el boton, aparecera el TodoForm */}
                {/* {
                    !!openModal && (
                        <Modal>
                           <TodoForm
                              addTodo={addTodo}
                              setOpenModal={setOpenModal}
                              newTodoValue={newTodoValue}
                              setNewTodoValue={setNewTodoValue}
                           />
                        </Modal>
                    )
                } */}

                {/* verificamos que haya finalizado el loading y que no haya errores para que aparezca el boton */}
                {
                    (!error && !loading) && 
                    <CreateTodoButton 
                    //   setOpenModal={setOpenModal}
                        // pasamos la propiedad onClick
                        onNavigateNew={() => navigate('new')}
                    />
                }

                {/* este componente se encarga de verificar si hay actualizaciones en el LocalStorage */}
                <ChangeAlert
                    sincronizeTodos={sincronizeTodos}
                />
                
        </React.Fragment>   
  );
}

export { HomePage };