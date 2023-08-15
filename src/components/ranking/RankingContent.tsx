import React,{useEffect, useState} from "react";
import Test from '../../assets/imgs/testbookcover.jpg'

import { styled } from "styled-components";
import RankingIndex from "./RankingIndex";

type TypeProps = {
    type : string;
}

export default function RankingContent({type} : TypeProps){

    return(
        <>
        <Wrapper>

        <RankingIndex text={type} />

        <Container>
                    <ItemContainer>
                        
                        <Box>

                        <ItemImg src={Test}alt='x'/>

                        <ItemName>
                            이것이 코딩테스트다.

                        </ItemName>
                        
                        <ItemPublisher>
                            한빛 / 나동빈

                        </ItemPublisher>

                        {type === 'view' 
                        ? 
                        <ItemView>
                            10,000회
                        </ItemView>
                        :
                        <ItemRating>
                                4.6 (10)
                        </ItemRating>
                        
                        }
                        
                        </Box>

                        <Box>

                        <ItemImg src={Test}alt='x'/>

                        <ItemName>
                            이것이 코딩테스트다.

                        </ItemName>
                        
                        <ItemPublisher>
                            한빛 / 나동빈

                        </ItemPublisher>

                        {type === 'view' 
                        ? 
                        <ItemView>
                            10,000회
                        </ItemView>
                        :
                        <ItemRating>
                                4.6 (10)
                        </ItemRating>
                        
                        }
                        
                        </Box>
                    </ItemContainer>
                    


                </Container>
                </Wrapper>
                </>
    )
}
const Wrapper = styled.div`

`

const Container = styled.div`
margin:0 auto;

border : 0px;

width : 750px;
height : 300px;

background-color : #e2e2e2;

display : flex;
`

const ItemContainer = styled.div`

margin : 0 5%;

width : 90%;

`

const Box = styled.div`
    display: flex;
	justify-content: space-between;
    
    margin: 5px 0px;

    background-color : white;
    
    &:hover {
    background-color : #aaaeac;
    cursor : pointer;
    }

`

const ItemImg = styled.img`

height :100px;

`



const ItemName = styled.div`

width : 150px;
line-Height : 100px;

font-size : 15px;
font-weight : 1000;
`

const ItemPublisher = styled.div`
font-size : 14px;

width : 100px;
line-Height : 100px;
`


const ItemView = styled.div`
font-size : 15px;
font-weight : 1000;
line-Height : 100px;

`

const ItemRating = styled.div`
font-size : 15px;
font-weight : 1000;
line-Height : 100px;


`

