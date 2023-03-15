import React from 'react';
import withStorageListener from './withStorageListener';
 
// inyectamos las dos propiedades del high order component
function ChangeAlert({show, toggleShow}){
    if(show){
    return (
        <p>Hubo cambios?</p>
    );
    }
}

// el with Es nuestro HOC 
const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

// exportamos al App el HOC con el resultado envuelto
export {ChangeAlertWithStorageListener};