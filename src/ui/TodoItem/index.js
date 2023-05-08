import React from "react";
import "./TodoItem.css";

import { FaCheck, FaHotjar } from "react-icons/fa";
import {AiOutlineEdit} from "react-icons/ai";


function TodoItem(props) {
  return (
    
    <li className="TodoItem">
      <span
        className={`Icon Icon__check ${
          props.completed && "Icon__check-active"
        }`}
        onClick={props.onComplete}
      >
        <FaCheck />
      </span>
      <p
        className={`TodoItem__p ${props.completed && "TodoItem__p-completed"}`}
      >
        {props.text}
      </p>
      <span className="Icon Icon__edit-active">
        <AiOutlineEdit />
      </span>
      {/* si la tarea esta completa,  habilitamos el boton para eliminar */}
      {
        props.completed ?
      <span className="Icon Icon__delete" onClick={props.onDelete}>
        <FaHotjar />
      </span>:<span className="Icon__delete-inactive"/>
      }
    </li>
  );
}

export { TodoItem };
