import React, { useEffect } from "react";
import Test from '../../assets/imgs/testbookcover.jpg'
import { StyledLink } from "../../styles/link";
import timeForToday from '../../util/timeForToday';

import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import { faStar } from "@fortawesome/free-solid-svg-icons";

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
}

interface DataTypeList {
    items: DataType[] | undefined;
  }

function ItemList({items} : DataTypeList){
    return( 
        <>
            
            {items?.map((item )=>(

            <StyledLink to={`/bookreview/detail/?${item.loginId}&${item.title}`}>

            <Frame>

            <Top>
                <Title>
                    
                    {truncate(`${item.title.trim()}`,25)}
                </Title>
                <Rating>
                <FontAwesomeIcon icon={faStar} className="star-icon"/>

                    {item.score}
                </Rating>
            </Top>

            <Middle>    
                <LContainer>
                    <Img src={item.coverImg} alt='x' />
                </LContainer>

                <RContainer>
                <Name>
                    제목 : {truncate(`${item.bookTitle}`,18)}
                </Name>



                <ItemPublisher>
                    저자 : {truncate(item.author.replace('^', ','),18)} 
                    
                </ItemPublisher>

                <ItemPublisher>
                    출판사 : {truncate(item.publisher,18)}

                </ItemPublisher>
                <Writter>
                    작성자 : {truncate(item.nickname,18)}
                </Writter>
                <Date>
                    {timeForToday(item.createdDate)}
                    <Views>
                
                    <FontAwesomeIcon icon={faEye} />
                    </Views>

                    {item?.view?.toLocaleString('ko-KR')}
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
            <ItemLists items={items}/>
        </Positioner>
    )
}

const Positioner = styled.div`


`;
const ItemLists = styled(ItemList)`

`

const Frame = styled.div`

display : inline-block;

width: 40vw;
height: 300px;

font-size : 16px;

/* border를 빼줘야 함! */
margin : 20px calc(2.5vw - 1px);

border : 1px solid #e2e2e2;
border-radius : 5px;

//1080px 이하면
@media (max-width : 1280px){
    width: 60vw;
    margin : 3vh calc(15vw - 1px);

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

const Rating = styled.div`
    
    color : #000000;
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
margin : 0px 10px;
color : #000000;

`