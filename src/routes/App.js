import React from 'react';
import "./App.css";
import { HashRouter, Route, Routes } from 'react-router-dom';

import { HomePage } from './Home/HomePage'
import { NewTodoPage } from './New/NewTodoPage';
import { EditTodoPage } from './Edit/EditTodoPage';

function App() {

  return (
    <HashRouter>
        <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/new' element={<NewTodoPage/>} />
            <Route path='/edit/:id' element={<EditTodoPage/>} />
            <Route path='*' element={<p>Not Found</p>} />
        </Routes>
    </HashRouter>      
  );
}

export {App};