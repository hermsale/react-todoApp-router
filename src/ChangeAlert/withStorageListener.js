import React from 'react';

// este es nustro HOC - le pasamos el componente como parametro ChangeAlert, renombrado Wrapped
function withStorageListener(WrappedComponent){
    return function WrappedComponentWithStorageListener(props){

        // crearemos un estado 
        const [] = React.useState(false);


        return <WrappedComponent/>
    }
}

export {withStorageListener}