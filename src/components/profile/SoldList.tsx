import React, { useEffect } from "react";
import Test from '../../assets/imgs/testbookcover.jpg'

import { styled } from "styled-components";
import axios from "axios";

export default function SoldList(){
    const token = sessionStorage.getItem('token');
    
    useEffect(() => {        
        axios
            .get(`https://bookstore24.shop/member/profile/sell/off/list`, {
                params: {
                    page : 0,
                    size : 10,
                },
                
                headers : {
                    'Authorization' : token
                }
                
            })
            .then((response) => {
                console.log(response)

            })
            .catch((error) => {
                console.log('에러:', error.response);
            });
    }, []);
    return(
        <>
        <Wrapper>
        <SoldListContainer>

                    <Space />
                    <ItemContainer>
                        <ItemImg src={Test}alt='x'/>

                        <Box>
                            <ItemRating>
                                4.6
                            </ItemRating>
                        
                    
                        <ItemName>
                            이것이 코딩테스트다.

                        </ItemName>
                        <ItemPublisher>
                            한빛 / 나동빈

                            <ItemPrice>
                            10,000
                            </ItemPrice>

                        </ItemPublisher>
                        
                        
                    </Box>
                    </ItemContainer>
                    <ItemContainer>
                        <ItemImg src={Test}alt='x'/>

                        <Box>
                            <ItemRating>
                                4.6
                            </ItemRating>
                        
                    
                        <ItemName>
                            이것이 코딩테스트다.

                        </ItemName>
                        <ItemPublisher>
                            한빛 / 나동빈

                            <ItemPrice>
                            10,000
                            </ItemPrice>

                        </ItemPublisher>
                        
                        
                    </Box>
                    </ItemContainer>
                    
                    <ItemContainer>
                        <ItemImg src={Test}alt='x'/>

                        <Box>
                            <ItemRating>
                                4.6
                            </ItemRating>
                        
                    
                        <ItemName>
                            이것이 코딩테스트다.

                        </ItemName>
                        <ItemPublisher>
                            한빛 / 나동빈

                            <ItemPrice>
                            10,000
                            </ItemPrice>

                        </ItemPublisher>
                    </Box>

                    </ItemContainer>

                </SoldListContainer>
                </Wrapper>
                </>
    )
}
const Wrapper = styled.div`

`
const Space = styled.div`
height : 15px;
margin : 0px;
padding : 0px;

`
const SoldListContainer = styled.div`
margin:0px;

border : 0px;

width : 100%;
height : 300px;


background-color : #e2e2e2;


`

const ItemContainer = styled.div`

/* 상 우 하 좌 */
margin : 0 15px 15px;
height : 80px;

background-color : white;
&:hover {
    background-color : #aaaeac;
    cursor : pointer;
    }
`

const ItemImg = styled.img`

height :75px;

padding: 0px 10px 10px 0px;
margin :0px;
vertical-align: top;

`

const Box = styled.div`
display : inline-block;

margin-top : -13px;


`
const ItemRating = styled.p`
font-size : 15px;
color : red;

`

const ItemName = styled.p`

font-size : 15px;
font-weight : 1000;
`

const ItemPublisher = styled.p`
font-size : 14px;
margin-left : 10px;

`

const ItemPrice = styled.span`
font-size : 15px;
margin-left : 20px;
`

