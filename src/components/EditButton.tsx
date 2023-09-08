import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import { css, styled } from "styled-components";
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

    const navigate = useNavigate();
    
    const [reviewCommentIds,setReviewCommentIds] = useState<string[] | null>([]);

    useEffect(()=>{
        
    if(props.reviewComment){
        const idsArray = props.reviewComment.map(
            comment => (comment.reviewCommentId));
        setReviewCommentIds(idsArray);
    } 
    else{
        setReviewCommentIds(null);
    }

    },[])

    const doDelete = () => {

        const token = sessionStorage.getItem('token')
        
        // Data to be sent in the request body.
        const sellData = {
            sellId : props.id,
            loginId : props.loginId,
            title : props.title
        };

        const reviewData = {
            id : props.id,
            loginId : props.loginId,
            title : props.title,
            reviewCommentIds : reviewCommentIds
        }
        
        // Axios configuration for the POST request.
        const config = {
            headers: {
            Authorization: token,
            },
        };

        if (props.url === 'sell'){
        axios
            .post(`https://bookstore24.shop/${props.url}/post/delete`, sellData, config)
            .then((response) => {
            navigate('/store');
            })
            .catch((error) => {
            console.log('Error:', error.response.data);
            });
        
        }
        else{
        axios
            .post(`https://bookstore24.shop/${props.url}/post/delete`, reviewData, config)
            .then((response) => {
                navigate('/bookreview');
            })
            .catch((error) => {
            console.log('Error:', error.response.data);
            });
        
        }}
    return(
        <Container>
            <Form>

                <Button onClick={doDelete} bgColor={'#f34747'}>
                    삭제
                </Button>

                <StyledButtonLink to={`./edit/?${props.loginId}&${props.title}`}>

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
