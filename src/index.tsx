import { GlobalStyle } from './styles/global';

import * as React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDom.render(
    <BrowserRouter>
    <GlobalStyle />
        <App />
    </BrowserRouter>, 
    document.querySelector('#root'))
;