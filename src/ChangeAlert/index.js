import React from 'react';
import withStorageListener from './withStorageListener';

function ChangeAlert(){
    return (
        <p>Hubo cambios?</p>
    );
}

// el with Es nuestro HOC 
const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

// exportamos al App 
export {ChangeAlertWithStorageListener};