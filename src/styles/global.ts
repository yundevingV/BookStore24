import tway from '../assets/fonts/tway.ttf';

import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    @font-face {
        font-family: 'tway';
        src: url(${tway}) format('truetype');
    }
    
    body{
        background-color:#f8f7f7;
        margin : 0px;
        font-family: 'tway';

    }
`