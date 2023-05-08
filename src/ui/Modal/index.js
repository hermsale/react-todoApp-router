import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

// const modal = ReactDOM.createRoot(document.getElementById('modal'));
// modal.createPortal(
//     <Portal />
//  )

// creamos el componente Modal 
function Modal(props){
    return ReactDOM.createPortal(
        <div className='ModalBackground'>
            {props.children}
        </div>,
        document.getElementById("modal")
    
    );
}


export {Modal};