import React from "react";
import Test from '../assets/imgs/testbookcover.jpg'
import { StyledLink } from "../styles/link";

import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useSelector } from "react-redux";
import { RootState } from "../reducer/index";

import styled from "styled-components";


function ItemList(){
    
    const searchWordData = useSelector(
        (state: RootState) => state.searchWordReducer.searchWordData
    );

    return(
        <>
            
            <StyledLink to='/bookcommunitydetail/1'>
            <Frame>

            <Top>
                <Title>
                    후기 글 제목
                </Title>
                <Rating>
                    4.8
                </Rating>
            </Top>

            <Middle>    
                <LContainer>
                <Img src={Test} alt='x' />
                </LContainer>

                <RContainer>
                <Name>
                    이름
                </Name>

                <Views>
                <FontAwesomeIcon icon={faEye} />
                567
                </Views>

                <ItemPublisher>
                    저자 / 출판사
                </ItemPublisher>

                <Writter>
                    XX 님
                </Writter>
                <Date>
                    22.05.25
                </Date>

                </RContainer>

            </Middle>
            </Frame>
            </StyledLink>
        </>
    )
}   

export default function StoreItem(){

    return(
        <Positioner>            
            <ItemList />
        </Positioner>
    )
}

const Positioner = styled.div`
    display: inline-block;

    width : 100%;

    height: fit-content;
    z-index:99;
    
    padding : 0px;
    padding-bottom : 5rem;
    border: 0px;

`;

const Frame = styled.div`
display: inline-block;

width: 34%;
height: 300px;

font-size : 16px;

margin : 3% 8%;

border : 1px solid #e2e2e2;
border-radius : 5px;

position : relative;

//1080px 이하면
@media (max-width : 1080px){
    width: 70%;
    margin : 3% 15%;

}

&:hover{
    background : #e2e2e2;

}

`

const Top = styled.div`
    display: flex;
    justify-content: space-between;
    
    margin  : 20px 0;
    
    padding : 0 20px;

`

const Title = styled.div`
    font-weight : bold;

`

const Rating = styled.div`
    
    color : #f10000;
`



const Middle = styled.div`
display : flex;
justify-content : space-around;

padding : 0 20px;

`
const LContainer = styled.div`

display : flex;
flex-direction : column;
justify-content : center;

margin : 0px;
padding : 0px;

background : black;


`

const Img = styled.img`
width : 150px;
height : 220px;

margin : 0 auto;

`
const RContainer = styled.div`
display : flex;
flex-direction : column;
justify-content : space-around;


`

const Name = styled.span`


`



const ItemPublisher = styled.span`



`


const Writter = styled.span`




`

const Date = styled.span`



`

const Views = styled.span`

color : #000000;

`