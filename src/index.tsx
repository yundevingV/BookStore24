import { GlobalStyle } from './styles/global';

import * as React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducer";
import { CookiesProvider } from 'react-cookie';

let store = createStore(rootReducer);
ReactDom.render(

    <BrowserRouter basename={process.env.PUBLIC_URL}
    >
    
    <GlobalStyle />
    <Provider store={store}>
        <CookiesProvider>
        <App />
        </CookiesProvider>
    </Provider>
    </BrowserRouter>, 
    document.querySelector('#root'))
;