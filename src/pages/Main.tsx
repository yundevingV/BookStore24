import React,{useState} from "react";
import Header from "../components/common/Header";
import Carousel from "../components/home/Carousel"


import { styled } from "styled-components";
import RankingPreview from "../components/ranking/RankingPreview";

export default function Main(){

    return(
        <Wrapper>

            <Header />
            <Carousel />

            <RankingPreview /> 
        </Wrapper>  
    )
}

const Wrapper = styled.div`
    height  : fit-content;

    margin-bottom : 500px;
`