import React, { useEffect } from "react";
import Test from '../../assets/imgs/testbookcover.jpg'
import { StyledLink } from "../../styles/link";
import timeForToday from '../../util/timeForToday';

import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useSelector } from "react-redux";
import { RootState } from "../../reducer/index";

import styled from "styled-components";
import truncate from "../../util/truncate";



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
    loginId : string
    price : number
    status : string
}

interface DataTypeList {
    items: DataType[] | undefined;
  }

function ItemList({items} : DataTypeList){

    return(
        <>
            
            {items?.map((item )=>(

            <StyledLink to={`/bookstore/detail/?${item.loginId}&${item.title}`}>
            <Frame>

            <Top>
                <Title>
                    {item.title}
                </Title>
                <Status>
                    {item.status === 'on' ? '판매중' : '판매완료'}
                </Status>
            </Top>

            <Middle>    
                <LContainer>
                <Img src={item.coverImg} alt='x' />
                </LContainer>

                <RContainer>
                <Name>
                    {truncate(`${item.bookTitle}`,15)}
                </Name>

                <Price>
                    {item?.price?.toLocaleString('ko-KR')} 
                </Price>

                <ItemPublisher>
                    {item.author.replace('^', ',')} 
                    
                </ItemPublisher>

                <ItemPublisher>
                    {item.publisher}

                </ItemPublisher>

                <Writter>
                    {item.nickname}
                </Writter>

                <Date>
                    {timeForToday(item.createdDate)}
                    <Views>
                    <FontAwesomeIcon icon={faEye} />
                        {item?.view?.toLocaleString('ko-KR')}
                    </Views>
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


`;

const Frame = styled.div`
display : inline-block;

width: 30vw;
height: 300px;

font-size : 16px;

margin: 3vh calc(5vw - 1px);

border : 1px solid #e2e2e2;
border-radius : 5px;

//1080px 이하면
@media (max-width : 1080px){
    width: 70vw;
    margin : 3vh 5vw;

}
//1080px 이하면
@media (max-width : 810px){
    width: 500px;
    margin : 3vh 30px;

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

const Status = styled.div`
    
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

const Price = styled.span`

color : #000000;

`
const Views = styled.span`
margin : 0px 10px;
color : #000000;

`