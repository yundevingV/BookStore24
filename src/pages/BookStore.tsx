import React,{useState} from "react";
import useInput from "../hooks/useInput";
import Header from "../components/Header";

import SearchOption from "../components/SearchOption";
import SearchBar from "../components/SearchBar";
import SearchButton from "../components/SearchButton";
import PostButton from "../components/PostButton";

import { styled } from "styled-components";


export default function BookStore() {
    
    return(
        <Wrapper>
            <Header />
            <Container>
                <Form>

                    <SearchOption />

                    <SearchBar />
                    <SearchButton />

                    <PostButton text={'책 판매하기'} />

                </Form>
                
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

display: flex;
justify-content: flex-end; 

//810px 이하면
@media (max-width : 810px){
    width: 567px;
}

@media (max-width: 1400px) {
  }


`

const Form = styled.form`
  display: flex;
  align-items: center;
  
`;