import React from "react";

function TodoHeader(props){
    return(
        <header>
            {props.children}
        </header>
    )
    
}

export {TodoHeader}