import React, { useEffect } from "react";
import Test from '../../assets/imgs/testbookcover.jpg'
import { StyledLink } from "../../styles/link";
import timeForToday from '../../hooks/timeForToday';

import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useSelector } from "react-redux";
import { RootState } from "../../reducer/index";

import styled from "styled-components";



interface DataType{
    author:string
    bookTitle:string
    coverImg:string
    createdDate:string
    id:number
    nickname:string
    publisher:string
    score:number
    title:string
    view:number
}

interface DataTypeList {
    items: DataType[] | undefined;
  }

function ItemList({items} : DataTypeList){
    
    const searchWordData = useSelector(
        (state: RootState) => state.searchWordReducer.searchWordData
    );

    return(
        <>
            
            {items?.map((item )=>(
            <StyledLink to='/bookreview/detail'>
            <Frame>

            <Top>
                <Title>
                    {item.title}
                </Title>
                <Rating>
                    {item.score}
                </Rating>
            </Top>

            <Middle>    
                <LContainer>
                    <Img src={item.coverImg} alt='x' />
                </LContainer>

                <RContainer>
                <Name>
                    {item.bookTitle}
                </Name>

                <Views>
                <FontAwesomeIcon icon={faEye} />
                    {item.view}
                </Views>

                <ItemPublisher>
                    {item.author} / {item.publisher}
                </ItemPublisher>

                <Writter>
                    {item.nickname}
                </Writter>
                <Date>
                    {timeForToday(item.createdDate)}
                </Date>

                </RContainer>

            </Middle>
            </Frame>
            </StyledLink>
            ))}
        </>
    )
}   

export default function StoreItem({items} : DataTypeList){

    return(
        <Positioner>            
            <ItemList items={items}/>
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