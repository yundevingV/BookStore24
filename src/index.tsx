import { GlobalStyle } from './styles/global';

import * as React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducer";

let store = createStore(rootReducer);

ReactDom.render(
    <BrowserRouter>
    
    <GlobalStyle />
    <Provider store={store}>
        <App />
    </Provider>
    </BrowserRouter>, 
    document.querySelector('#root'))
;