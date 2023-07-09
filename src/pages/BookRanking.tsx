import React from "react";
import Header from "../components/Header";
import RankingContent from "../components/RankingContent";
import RankingTitle from "../components/RankingTitle";
import { Space } from "../styles/Space";

import { styled } from "styled-components";


export default function BookRanking(){
    return(
        <Wrapper>

            <Header />
            
            <Container>

                <Space width={0} height={50} />

                <RankingTitle text={'조회수 랭킹'} />
                
                <Space width={0} height={30} />

                <RankingContent type={'view'} />
                
                <Space width={0} height={50} />

                <RankingTitle text={'평점 랭킹'} />

                <Space width={0} height={30} />

                <RankingContent type={'rate'} />

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