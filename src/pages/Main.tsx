import React,{useState} from "react";
import Header from "../components/common/Header";
import Carousel from "../components/home/Carousel"

import { styled } from "styled-components";
import RankingPreview from "../components/ranking/RankingPreview";
import ReviewVeiwPreview from "../components/ranking/ReviewVeiwPreview";
import StoreVeiwPreview from "../components/ranking/StoreVeiwPreview";
import BookStore from "../components/home/BookStore";
import Footer from "../components/common/Footer";

export default function Main(){
    console.log(window.innerWidth)
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
            <Footer />
        </Wrapper>  
    )
}

const Wrapper = styled.div`
    height: auto;
    min-height: 100%;

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