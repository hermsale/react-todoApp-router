import React from "react";
import "./TodoError.css";

function TodoError(){
    return(
        <div className="TodoError_container">
            <p className="TodoError_text">Hubo un error...</p>
            <p className="TodoError_text">Estamos trabajando para solucionarlo.</p>
        </div>
        
    )
}

export {TodoError};