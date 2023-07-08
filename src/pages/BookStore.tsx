import React,{useEffect} from "react";
import useInput from "../hooks/useInput";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Item from "../components/StoreItem";

import { styled } from "styled-components";
import { useLocation } from 'react-router-dom';

export default function BookStore() {

    // 현재 주소
    const location = useLocation();

    return(
        <Wrapper>
            <Header />
            
            <Container >

            <Title>
                <PTitle>북 스토어</PTitle> 
                <PContent>개인간 자유로운 거래로 인생 책을 찾아보세요!</PContent>
            </Title>

            <Navbar text='책 판매하기' url={location.pathname}/>

                <Item />    
                
            </Container>
        </Wrapper>
    )
}
const Wrapper = styled.div`

`
const Container = styled.div`
width : 80vw;

font-family: arial;
font-size: 24px;

margin: 0 auto;
padding : 10px;

border : 2px solid #e2e2e2;

font-family: tway, sans-serif, Arial;

position : relative;
top:5vh;


//810px 이하면
@media (max-width : 810px){
    width: 567px;
}

`

const Title = styled.div`
width : 100%;

display: flex;
flex-direction : column;

text-align : center;

`
const PTitle = styled.p`
font-weight : 1000;
font-size : 30px;

`

const PContent = styled.p`
font-weight : 200;
font-size : 18px;
`