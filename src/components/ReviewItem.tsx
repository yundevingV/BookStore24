import React from "react";
import Test from '../assets/imgs/testbookcover.jpg'
import { StyledLink } from "../styles/link";


import styled from "styled-components";


function ItemList(){
    
    return(
        <>
            
            <StyledLink to='/bookcommunitydetail/1'>
            <Frame>

            <Top>
                <Title>
                    제목
                </Title>
                <Rating>
                    4.8
                </Rating>
            </Top>
            <Middle>    
                <Img src={Test} alt='x' />

                <Name>
                    이름
                </Name>

                <Price>
                    가격
                </Price>

                <ItemPublisher>
                    저자 / 출판사
                </ItemPublisher>

                    <Writter>
                        XX 님
                    </Writter>
                    <Date>
                        22.05.25
                    </Date>
                    <Views>
                        567
                    </Views>

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
const Title = styled.span`
  margin-left : 20px;

  flex: 1;

  font-weight : bold;

`

const Rating = styled.span`
  flex: 1;
  text-align: right;
  margin-right : 30px;


`

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  margin-top : 20px;
`

const Middle = styled.div`
position : relative;

margin : 7px;

height: 250px;

`

const Img = styled.img`

width: 40%;
height: 90%;

`

const Name = styled.span`
position : absolute;

top : 0px;
margin-left : 30px;

`

const Price = styled.span`
position : absolute;
top : 30px;
margin-left : 30px;

`

const ItemPublisher = styled.span`
position : absolute;
top : 50px;
margin-left : 30px;


`


const Writter = styled.span`
position : absolute;
margin-left : 30px;


bottom : 60px;

`

const Date = styled.span`
position : absolute;
margin-left : 30px;

bottom : 10px;

`

const Views = styled.span`
position : absolute;
margin-left : 100px;

bottom : 10px;


`