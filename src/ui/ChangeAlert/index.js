import React from 'react';
import { useStorageListener } from './useStorageListener';
import "./ChangeAlert.css"


function ChangeAlert({sincronizeTodos}) {

    // llamamos las propiedades desde nuestro custom hook 
    const {
        show,
        toggleShow
    } = useStorageListener(sincronizeTodos);

    // si show es true 
    if (show) {
        return (
            <div className="ChangeAlert__bg">
                <div className="ChangeAlert__container">
                    <p>Parece que cambiaste tus Recordatorios en otra pestaña o ventana del navegador.</p>
                    <p>¿Quieres sincronizar tus Recordatorios?</p>
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

export { ChangeAlert };
