import React from 'react';

function useStorageListener(sincronizeTodos) {

    // crearemos un react hook para saber si hubo cambios en la aplicacion, en otra pestaña del navegador
    const [storageChange, setStorageChange] = React.useState(false);

    window.addEventListener('storage', (event) => {
        if (event.key === "TODOS_V2") {
            console.log('hubo un evento');
            setStorageChange(true);
        }
    });

    // cuando se activa el boton de sincronizacion 
    const toggleShow = () => {
        // activamos el sincronize del useLocalStorage, que avisa que hay un cambio en su estado
        sincronizeTodos();
        // el show lo pasamos a false para que no muestre el mensaje
        setStorageChange(false);
    }

    // exportamos en forma de objeto las propiedades
    return {
        show: storageChange,
        toggleShow,
    }


}


export { useStorageListener }