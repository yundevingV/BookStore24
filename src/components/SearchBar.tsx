import React from "react";

import { styled } from "styled-components";


export default function SearchBar(){
    return(
        <>
            <Input 
                placeholder='검색' />

        </>
    )
}

const Input = styled.input`
    width : 175px;
    height : 37px;
    padding-left : 15px;

    border : 0.5px solid #000000;
    border-right : 0px; 

    &:focus {
    border-color: darken(#000000, 10%); /* Darken the border color */
    box-shadow: inset 0 0 5px darken(#000000, 10%); /* Add an inward box shadow */
    border-right : 0px; 
  }

`

