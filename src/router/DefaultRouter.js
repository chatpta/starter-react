import React, { Suspense } from "react";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import { pathAndURL } from "../config";
import Loading from "../sections/loading/Loading";
import TermsOfUseView from "../views/TermsOfUseView";

// Lazy load pages
const HomePageView = React.lazy( () => import('../views/HomePageView') );
const UserLoginView = React.lazy( () => import('../views/UserLoginView') )
const UserCreateAccountView = React.lazy( () => import('../views/UserCreateAccountView') )
const UserRecoverPasswordView = React.lazy( ( () => import('../views/UserRecoverPasswordView') ) );
const UserChangePasswordView = React.lazy( () => import("../views/UserChangePasswordView") );
const UsersPageView = React.lazy( () => import('../views/UsersPageView') );
const ItemsPageView = React.lazy( () => import('../views/ItemsPageView') );
const NotFoundPageView = React.lazy( () => import('../views/NotFoundPageView') );

function AppRouter() {
    return (
        <BrowserRouter>
            <Suspense fallback={ <Loading/> }>
                <Routes>
                    <Route exact path={ pathAndURL.getRootPath() } element={ <HomePageView/> }/>
                    <Route path={ pathAndURL.usersLoginPath() } element={ <UserLoginView/> }/>
                    <Route path={ pathAndURL.usersRegisterPath() } element={ <UserCreateAccountView/> }/>
                    <Route path={ pathAndURL.usersPasswordRecoverPath() } element={ <UserRecoverPasswordView/> }/>
                    <Route path={ pathAndURL.usersChangePasswordPath() } element={ <UserChangePasswordView/> }/>
                    <Route path={ "/terms-of-use" } element={ <TermsOfUseView/> }/>
                    <Route path="users" element={ <UsersPageView/> }/>
                    <Route path="items" element={ <ItemsPageView/> }/>
                    <Route path="*" element={ <NotFoundPageView/> }/>
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}

export default AppRouter;
