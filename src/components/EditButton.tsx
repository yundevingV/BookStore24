import React from "react";

import { css, styled } from "styled-components";
import { StyledButtonLink } from "../styles/link";

interface accessProps{
    loginId : string | undefined,
    title : string | undefined
}

export default function EditButton({loginId , title} : accessProps){

    return(
        <Container>
            <Form>

                <Button bgColor={'#f34747'}>
                    삭제
                </Button>

                <StyledButtonLink to={`./edit/?${loginId}&${title}`}>

                <Button  marginLeft="10px" bgColor={'#4d4df5'}>
                    수정
                </Button>
                </StyledButtonLink>
            </Form>
        </Container>
    )
}

const Container = styled.div`

display: flex;

justify-content: flex-end; 

margin: 30px 0px;
`

const Form = styled.form`
    display: flex;
    align-items: center;
    
`;

interface ButtonProps{
    bgColor : string;
    marginLeft?: string; // Optional marginLeft prop
}

const Button = styled.button<ButtonProps>`

    width: 40px;
    height: 25px;
    
    ${props =>
    props.marginLeft &&
    css`
        margin-left: ${props.marginLeft};
    `}
    border-radius: 5px;
    
    background-color: ${props => props.bgColor}; 
    
    cursor: pointer;

    border : 0px;

    font-family: tway, sans-serif, Arial;

    transition: background-color 0.3s ease-in-out;
`
