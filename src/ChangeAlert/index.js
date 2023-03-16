import React from 'react';
import { withStorageListener } from './withStorageListener';

// inyectamos las dos propiedades del high order component
function ChangeAlert({ show, toggleShow }) {
    // si show es true 
    if (show) {
        return (
            <div>
                <p className='onEmptySearchResults__p'>Hubo actualizaciones en la BD</p>
                <button
                // disparamos el evento que esta en el withStorageListener
                    onClick={() => toggleShow()}
                >Volver a cargar la información</button>
            </div>
        );
    } else {
        // tenemos que pasarle un valor de retorno null (o cualquier valor) porque React lo precisa. 
        return null;
    }
}

// el with Es nuestro HOC 
const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

// exportamos al App el HOC con el resultado envuelto
export { ChangeAlertWithStorageListener };
