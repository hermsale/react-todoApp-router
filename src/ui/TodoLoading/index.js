import React from "react";
import "./TodoLoading.css"

function TodoLoading(){

    return (
        <div className="TodoLoading_container">
            <div className="TodoLoading_item">
                <p className="TodoLoading__text">Cargando Recordatorio...</p>
            </div>
            <div className="TodoLoading_item">
                <p className="TodoLoading__text">Cargando Recordatorio...</p>
            </div>
            <div className="TodoLoading_item">
                <p className="TodoLoading__text">Cargando Recordatorio...</p>
            </div>
        </div>
    )
}

export {TodoLoading}; 