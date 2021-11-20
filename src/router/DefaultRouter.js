import React from "react";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import HomePage from "../views/HomePage";
import UsersPage from "../views/UsersPage";
import ItemsPage from "../views/ItemsPage";


function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <HomePage/> }/>
                <Route path="items" element={ <ItemsPage/> }/>
                <Route path="users" element={ <UsersPage/> }/>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;
