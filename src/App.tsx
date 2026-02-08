import React from 'react';
import {BrowserRouter, Link, Routes, Route} from "react-router-dom";
import UsersPage from "./components/UsersPage";
import TodosPage from "./components/TodosPage";
import UserItemPage from "./components/UserItemPage";
import TodoItemPage from "./components/TodoItemPage";
const App = () => {
  return(
    <div>
        <BrowserRouter>
            <div>
                <div>
                    <Link to="/users">Пользователи</Link>
                    <Link to="/todos">Список дел</Link>
                </div>
                <Routes>
                    <Route path="/users" element={<UsersPage/>}/>
                    <Route path="/todos" element={<TodosPage/>}/>
                    <Route path="/user/:id" element={<UserItemPage/>}/>
                    <Route path="/todo/:id" element={<TodoItemPage/>}/>
                    <Route path="*" element={<div>NotFound</div>}/>
                </Routes>
            </div>
        </BrowserRouter>
    </div>
  );
};

export default App;