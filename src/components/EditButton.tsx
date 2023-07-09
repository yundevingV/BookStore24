import React from "react";

import { styled } from "styled-components";
import { StyledButtonLink } from "../styles/link";



export default function EditButton(){

    return(
        <Container>
            <Form>

                <DeleteButton>
                    삭제
                </DeleteButton>

                <StyledButtonLink to='./edit'>
                <ModifyButton>
                    수정
                </ModifyButton>
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

const DeleteButton = styled.button`

background : #f34747;
border : 1px solid #ffffff;
border-radius : 4px;

margin : 10px;
`

const ModifyButton = styled.button`

color : #4d4df5;
border : 1px solid #4d4df5;
border-radius : 4px;
`