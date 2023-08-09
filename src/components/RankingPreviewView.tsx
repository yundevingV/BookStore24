import React from "react"
import styled from "styled-components"

import ex from '../assets/imgs/Slide1.jpg';

import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import '../styles/fontAwesome.css'

export default function RankingPreviewView(){
    return(
        <>
            <Container>
                <Title>
                    조회수 랭킹 
                </Title>

                <ItemContainer>
                    <Ranking>
                            1. 

                        </Ranking>
                    <LContainer>
                        <Img src={ex} alt='x' />

                    </LContainer>

                    <RContainer>


                        <BookTitle>
                            코딩테스트
                        </BookTitle>

                        <BookAuthor>
                            나동빈 / 한빛
                        </BookAuthor>
                        <View>
                            <FontAwesomeIcon icon={faEye} className="eye-icon"/>
                            5,112
                        </View>
                    </RContainer>
                </ItemContainer>

                <ItemContainer>
                    <Ranking>
                            2. 

                        </Ranking>
                    <LContainer>
                        <Img src={ex} alt='x' />

                    </LContainer>

                    <RContainer>


                        <BookTitle>
                            코딩테스트
                        </BookTitle>

                        <BookAuthor>
                            나동빈 / 한빛
                        </BookAuthor>
                        <View>
                            <FontAwesomeIcon icon={faEye} className="eye-icon"/>
                            5,112
                        </View>
                    </RContainer>
                </ItemContainer>

                <ItemContainer>
                    <Ranking>
                            3. 

                        </Ranking>
                    <LContainer>
                        <Img src={ex} alt='x' />

                    </LContainer>

                    <RContainer>


                        <BookTitle>
                            코딩테스트
                        </BookTitle>

                        <BookAuthor>
                            나동빈 / 한빛
                        </BookAuthor>
                        <View>
                            <FontAwesomeIcon icon={faEye} className="eye-icon"/>
                            5,112
                        </View>
                    </RContainer>
                </ItemContainer>

                
            </Container>
        </>
    )

}

const Container = styled.div`
    width : 350px;
    height : 620px;

    background : #312f2f;
    
    margin : 0px 20px;

`

const Title = styled.p`
    padding : 0px 40px;

    color : #ffffff;
`

const ItemContainer = styled.div`
    display: flex;
    justify-content : flex-start;
    
`

const LContainer = styled.div`

    display : flex;
    justify-content : center;
`

const Ranking = styled.p`
color : #ffffff;
font-size : 25px;
font-weight : 1000;

padding : 10px 5px;
`
const Img = styled.img`
width : 70px;
height : 70px;
padding : 20px;
`

const RContainer = styled.div`
    display : flex;
    flex-direction : column;
    justify-content: space-between; /* or other values like flex-start, flex-end, center, etc. */
    margin : 0px;
    padding : 10px 0px;

    height : 90px;
`


const BookTitle = styled.span`
color : #ffffff;
`
const View = styled.span`
color : #ffffff;

`

const BookAuthor = styled.span`
color : #ffffff;

`