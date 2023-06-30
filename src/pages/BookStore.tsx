import React,{useState} from "react";
import useInput from "../hooks/useInput";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Item from "../components/Item";

import { styled } from "styled-components";


export default function BookStore() {
    
    return(
        <Wrapper>
            <Header />
            
            <Container >
            <Navbar />

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