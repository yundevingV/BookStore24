import React from "react";
import styled from "styled-components";

type TextProps = {
    text : string;

}


export default function SearchButton({text} : TextProps){
    return(
        <>
            <Button>
                글 작성하기
            </Button>
        </>
    )
}


const Button = styled.button`

width: 100px;
height : 41px;

margin-left : 37px;


background-color: #ffffff;
border : 0.6px solid #033bfa;
color : #033bfa;

font-family: tway, sans-serif, Arial;

&:hover {

    background-color: #e2e2e2;

    cursor : pointer;
    }
`
