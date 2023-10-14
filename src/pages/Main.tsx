import React,{useState} from "react";
import Header from "../components/common/Header";
import Carousel from "../components/home/Carousel"


import { styled } from "styled-components";
import RankingPreview from "../components/ranking/RankingPreview";
import ReviewVeiwPreview from "../components/ranking/ReviewVeiwPreview";
import StoreVeiwPreview from "../components/ranking/StoreVeiwPreview";
import BookStore from "../components/home/BookStore";

export default function Main(){

    return(
        <Wrapper>

            <Header />
            <Carousel />
            <BookStore />

            <PreviewContainer>
                <RankingPreview /> 

                <ReviewVeiwPreview />
                <StoreVeiwPreview />
            </PreviewContainer>
        </Wrapper>  
    )
}

const Wrapper = styled.div`
    height  : fit-content;

    margin-bottom : 500px;
`

const PreviewContainer = styled.div`
display : flex;
justify-content : center;

@media screen and (max-width: 1270px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

`