import React from 'react';

// este es nustro HOC - recibimos el componente como parametro ChangeAlert, renombrado Wrapped
function withStorageListener(WrappedComponent){
    return function WrappedComponentWithStorageListener(props){

        // crearemos un react hook para saber si hubo cambios en la aplicacion
        const [storageChange, setStorageChange] = React.useState(false);

        // esta es la propiedad que exportaremos para mostrar en el App, si hubo cambios en la App
        return (
            <WrappedComponent 
             show={storageChange}
             toggleShow={setStorageChange}
        />
        )
    }
}

export {withStorageListener}