import React,{useState} from "react";
import Header from "../components/Header";
import Carousel from "../components/Carousel"
import MainRankingView from "../components/MainRankingView";
import MainRankingRating from "../components/MainRankingRating";

import { styled } from "styled-components";
import { Space } from "../styles/Space";
import RankingPreview from "../components/RankingPreview";



export default function Main(){

    return(
        <Wrapper>

            <Header />
            <Carousel />
            {/* <Space width={0} height={100} />
            <MainRankingView />
            <Space width={0} height={200} />
            <MainRankingRating /> */}

            <RankingPreview /> 
        </Wrapper>  
    )
}

const Wrapper = styled.div`
    height  : fit-content;

    margin-bottom : 500px;
`