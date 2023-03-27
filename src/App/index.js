import React from 'react';
import "./App.css";

import { useTodos } from './useTodos';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoForm } from "../TodoForm";
import { Modal } from '../Modal';
import { TodoLoading } from "../TodoLoading";
import { TodoError } from "../TodoError";
import { EmptyTodos } from "../EmptyTodos";
import { TodoHeader } from "../TodoHeader";
import { ChangeAlert } from '../ChangeAlert';

function App() {

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
        openModal,
        newTodoValue,
    } = state;

    // actualizadores de estados 
    const {
        setSearchValue,
        toggleCompleteTodo,
        deleteTodo,
        addTodo,
        setOpenModal,
        setNewTodoValue,
        sincronizeTodos,
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
                // loading={loading}        
            />

          </TodoHeader>
           
            <TodoList
            
            // render props 
            onLoading={() => <TodoLoading/>}
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
                onComplete={() => toggleCompleteTodo(item.text)}
                onDelete={() => deleteTodo(item.text)}
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
                {
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
                }

                {/* verificamos que haya finalizado el loading y que no haya errores para que aparezca el boton */}
                {
                    (!error && !loading) && 
                    <CreateTodoButton 
                      setOpenModal={setOpenModal}
                    />
                }

                {/* este componente se encarga de verificar si hay actualizaciones en el LocalStorage */}
                <ChangeAlert
                    sincronizeTodos={sincronizeTodos}
                />
                
        </React.Fragment>   
  );
}

export default App;