import React from 'react';

// este es nustro HOC - recibimos el componente como parametro ChangeAlert, renombrado Wrapped
function withStorageListener(WrappedComponent) {
    // gracias al props heredamos las propiedades del ChangeAlert, y podemos usar el sincronize 
    return function WrappedComponentwithStorageListener(props) {

        // crearemos un react hook para saber si hubo cambios en la aplicacion, en otra pestaña del navegador
        const [storageChange, setStorageChange] = React.useState(false);

        window.addEventListener('storage', (event) => {
            if(event.key === "TODOS_V1") {
                console.log('hubo un evento');
                setStorageChange(true);
            }
        });

        // cuando se activa el boton de sincronizacion 
        const toggleShow = () => {
            // activamos el sincronize del useLocalStorage, que avisa que hay un cambio en su estado
            props.sincronize();
            // el show lo pasamos a false para que no muestre el mensaje
            setStorageChange(false);
        }

        // esta es la propiedad que exportaremos para mostrar en el App, si hubo cambios en la App
        return (
            <WrappedComponent
            // haremos que solamente se muestre el WrappedComponent, si storageChange es verdadero
                show={storageChange}
                toggleShow={toggleShow}
            />
        )
    }
}

export { withStorageListener }