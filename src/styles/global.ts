import tway from '../fonts/tway.ttf';

import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    @font-face {
        font-family: 'tway';
        src: url(${tway}) format('truetype');
    }
    
    body{
        background-color:#f8f7f7;
    }
`