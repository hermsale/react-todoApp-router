import React from "react";
import { useLocalStorage } from "./useLocalStorage";


// creamos este custom hook para reemplazar al todoContext
function useTodos(){

     // react Hooks personalizado //////////////////////////////////////////////////////////////////////////////

  // traeremos las variables que conectan con el return del LocalStorage, de nuestro custom hook - le pasamos por parametro la key del LocalStorage
  const {
    item:todos
   ,saveItem:saveTodos
   ,loading
   ,error
   ,sincronizeItem:sincronizeTodos
 } = useLocalStorage('TODOS_V2',[]);


//  Se encarga de guardar los estados de los nuevos Todo's utilizado en el TodoForm 
  const [newTodoValue, setNewTodoValue] = React.useState('');

// se guarda el estado y una funcion para actualizarlo, esto es propio del objeto React.useState
   const [searchValue, setSearchValue] = React.useState('');  

// este useState nos permitira abrir o cerrar el modal de ingreso de Todo's
  //  const [openModal, setOpenModal] = React.useState(false);

   //////////////////////////////////////////////////////////////////////////////////
   // guardara la cantidad de todo's completos - si todo.completed es true
   const completedTodos = todos.filter( todo => !!todo.completed).length;
   const totalTodos = todos.length;

  //  console.log(completedTodos);
 // creamos un array vacio que almacenara las coincidencias de la busqueda
   let searchedTodos = [];

   // si no hay nada escrito en searchValue, mostramos todos los todos
   if(!searchValue.length >=1) {
     searchedTodos = todos;
   }else{
     // guardamos en searchTodos el filtro donde la condicion de aparicion es que este incluido algo de todoText en searchText
     searchedTodos = todos.filter(todo =>{
       // pasamos a minuscula el texto del array
       const todoText = todo.text.toLowerCase();
       // pasamos a minuscula la busqueda
       const searchText = searchValue.toLowerCase();
       // si algo de todoText esta en searchText, lo retornamos
       return todoText.includes(searchText);
      })
   }

 

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

  // Agregar Todo's 

  const addTodo = (text) => {
    const id = newTodoId(todos);
    const newItem = [...todos];
    
    // tenemos que enviarle el objeto con las propiedades de un Todo
    newItem.push({
      text:text,
      completed:false,
      id,
    });
    saveTodos(newItem);
  }


   // completetar Todo's - esta funcion nos permite marcar como completo o sin completar un TODO 

   // recibimos el index para compararlo y ver cual cumple la condicion, para pasarlo a completo/incompleto
   const toggleCompleteTodo = (id) => {
     // guardamos el indice de la coincidencia, entre el index que nos llega y el del array
     const todoIndex = todos.findIndex(todo => todo.id === id);
    //  console.log(todoIndex);
     // clonamos en un nuevo array los todos
     const newItem = [...todos];
     // le cambiamos la propiedad complete 
     newItem[todoIndex].completed = !newItem[todoIndex].completed;

     // cambiabamos el estado de todos 
     // setItem(newItem); 

     // llamamos a la funcion encargada de actualizar el estado de los TODO's y guardarlo en el LocalStorage
     saveTodos(newItem);
     
   }

   ///////////////////////////////////////////////////////////////////////////////////////////////////////////

   // eliminar Todo's - esta función elimina de manera permanente un TODO, ya sea tildado como completo o no

   // recibimos el index para compararlo y ver cual cumple la condicion, para pasarlo a completo/incompleto
   const deleteTodo = (id) => {
     // guardamos el indice de la coincidencia, entre el index que nos llega y el del array
     const todoIndex = todos.findIndex(todo => todo.id === id);
     console.log(todoIndex);
     // // clonamos en un nuevo array los todos
     const newItem = [...todos];
     // eliminamos el elemento 
     newItem.splice(todoIndex,1);

     // cambiabamos el estado de todos 
     // setItem(newItem); 
     
     // llamamos a la funcion encargada de actualizar el estado de los TODO's y guardarlo en el LocalStorage
     saveTodos(newItem);
     
   }

   ////////////////////////////////////////////////////////////////////////////////////////////////////////////

  //  estados
   const state = {
          error,
          loading,
          totalTodos,
          completedTodos,
          searchValue,
          searchedTodos,
          // openModal, 
          newTodoValue,
   }

  //  actualizadores de estados 
   const stateUpdaters = {
    toggleCompleteTodo,
          deleteTodo,
          addTodo,
          // setOpenModal,
          setSearchValue,
          setNewTodoValue,    
          sincronizeTodos,  
   }

    return(
        {
          state,
          stateUpdaters
        }
    );
}

// esta funcion es la generadora ID's automatico 
function newTodoId(todoList){
  if(!todoList.length){
    return 1;
  }
  const idList = todoList.map( todo => todo.id);
  // usamos el spreed operator debido a que la funcion Math no soporta los arrays, entonces de esta forma podemos convertir los elementos del array en distintos parametros
  const idMax = Math.max(...idList);
  return idMax+1; // devolvemos el ultimo +1

  // Metodo para generar ID's por el horario del sistema en MS
  // return Date.now();
}

export {useTodos};