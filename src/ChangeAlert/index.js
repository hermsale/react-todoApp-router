import React from 'react';
import { withStorageListener } from './withStorageListener';
import "./ChangeAlert.css"

// inyectamos las dos propiedades del high order component
function ChangeAlert({ show, toggleShow }) {
    // si show es true 
    if (show) {
        return (
            <div className="ChangeAlert__bg">
                <div className="ChangeAlert__container">
                    <p>Parece que cambiaste tus TODO's en otra pestaña o ventana del navegador.</p>
                    <p>¿Quieres sincronizar tus TODO's?</p>
                    <button
                        className="ChangeAlert__button"
                        onClick={() => toggleShow()}
                    >
                        Si!
                    </button>
                </div>
            </div>
        )
    }
    else {
        // tenemos que pasarle un valor de retorno null (o cualquier valor) porque React lo precisa. 
        return null;
    }
}

// el with Es nuestro HOC 
const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

// exportamos al App el HOC con el resultado envuelto
export { ChangeAlertWithStorageListener };
