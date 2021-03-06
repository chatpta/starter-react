import React from 'react';
import ReactDOM, { unmountComponentAtNode } from 'react-dom';

import UsersPageView from "../../views/UsersPage";


let container = null;
beforeEach( () => {
    // setup a DOM element as a render target
    container = document.createElement( "div" );
    document.body.appendChild( container );
} );

afterEach( () => {
    // cleanup on exiting
    unmountComponentAtNode( container );
    container.remove();
    container = null;
} );

it( 'UserPage renders', () => {
    container = document.createElement( 'div' );

    ReactDOM.render( <UsersPageView/>, container );
} );


