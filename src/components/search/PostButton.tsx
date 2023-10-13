import React from "react";
import styled from "styled-components";

type TextProps = {
    text : string | undefined;

}


export default function SearchButton({text} : TextProps){
    return(
        <>
            <Button>
                {text}
            </Button>
        </>
    )
}


const Button = styled.button`

width: 100px;
height : 41px;

margin-left : 37px;


background-color: #ffffff;

border : 1px solid #033bfa;
border-radius : 8px;
color : #033bfa;

font-family: tway, sans-serif, Arial;

&:hover {


    cursor : pointer;
    }
`
