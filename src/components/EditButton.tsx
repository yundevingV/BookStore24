import React, { useEffect, useState } from "react";

import { css, styled } from "styled-components";
import DeleteDetail from "../modal/DeleteDetail";
import { StyledButtonLink } from "../styles/link";

interface ReviewComment {
    id : string;
    reviewCommentId: string;
    content: string;
    createdDate: string;
    nickname: string;
    loginId: string;
    reviewId: string;
    title : string;
}
interface editProps{
    id : string | undefined
    loginId : string | undefined,
    title : string | undefined,
    reviewComment? : ReviewComment[] | undefined,
    
}
interface urlProps {
    url : string,
}

interface CombinedProps extends editProps, urlProps {}

export default function EditButton(props : CombinedProps){
    const [viewCheck,setCheck] = useState<boolean>(false);

    const check = () => {
        setCheck(true);
    } 

    return(
        <Container>

                
            {viewCheck ? <DeleteDetail id={props?.id} loginId={props?.loginId} title={props?.title} reviewComment={props?.reviewComment} url={props?.url}/> : <></>}

            <Button onClick={check} bgColor={'#f34747'}>
                    삭제
            </Button>
                <StyledButtonLink to={`./edit/?${props.loginId}&${props.title}`}>

                <Button  marginLeft="10px" bgColor={'#4d4df5'}>
                    수정
                </Button>
                </StyledButtonLink>
        </Container>
    )
}

const Container = styled.div`

display: flex;

justify-content: flex-end; 

margin: 30px 0px;
`



interface ButtonProps{
    bgColor : string;
    marginLeft?: string; // Optional marginLeft prop
}

const Button = styled.button<ButtonProps>`

    width: 50px;
    height: 25px;
    color : #ffff;
    ${props =>
    props.marginLeft &&
    css`
        margin-left: ${props.marginLeft};
    `}
    border-radius: 8px;
    
    background-color: ${props => props.bgColor}; 
    
    cursor: pointer;

    border : 0px;

    font-family: tway, sans-serif, Arial;

    transition: background-color 0.3s ease-in-out;
`
