import ItemsCarousel from 'react-items-carousel';
import React, { useState } from 'react';

import { styled } from 'styled-components';

import Slide1 from '../assets/imgs/Slide1.jpg';

import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function MainRanking() {
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 0;

    return (
        <>
            <Container>

                <ItemCarouselContainer>
                    <Title>
                        조회수 랭킹 순위 !
                    </Title>

                    <ItemsCarousel
                        requestToChangeActive={setActiveItemIndex}
                        activeItemIndex={activeItemIndex}
                        numberOfCards={3} //보여줄 아이템 갯수
                        gutter={20} //간격
                        leftChevron={<ButtonDiv><Button>{'<'}</Button></ButtonDiv>}
                        rightChevron={<ButtonDiv><Button>{'>'}</Button></ButtonDiv>}
                        outsideChevron={true}
                        chevronWidth={chevronWidth}
                        infiniteLoop={true}
                        disableSwipe={true}
                    >

                        <Cover>
                            <LContainer>
                                <Img src={Slide1} alt='x' />
                            </LContainer>

                            <RContainer>
                                <BookTitle>이것은 코딩테스트</BookTitle>
                                <Publisher>한빛 / 나동빈</Publisher>

                                <View>
                                    <FontAwesomeIcon icon={faEye} />
                                    5,112</View>
                            </RContainer>   
                        </Cover>
                        <Cover>
                            <LContainer>
                                <Img src={Slide1} alt='x' />
                            </LContainer>

                            <RContainer>
                                <BookTitle>이것은 코딩테스트</BookTitle>
                                <Publisher>한빛 / 나동빈</Publisher>

                                <View>
                                    <FontAwesomeIcon icon={faEye} />
                                    5,112</View>
                            </RContainer>   
                        </Cover>
                        <Cover>
                            <LContainer>
                                <Img src={Slide1} alt='x' />
                            </LContainer>

                            <RContainer>
                                <BookTitle>이것은 코딩테스트</BookTitle>
                                <Publisher>한빛 / 나동빈</Publisher>

                                <View>
                                    <FontAwesomeIcon icon={faEye} />
                                    5,112</View>
                            </RContainer>   
                        </Cover>


                    </ItemsCarousel>

                </ItemCarouselContainer>
            </Container>
        </>
    )
}

const Container = styled.div`

display : flex;
flex-direction : column;
`

const Title = styled.div`
    font-size : 20px;
    text-align : left;

    /* 상 오 하 왼 */
    
    margin-bottom : 10px;

    color : #212221;

    font-family: tway, sans-serif, Arial;
    font-weight : 500;
`
const ItemCarouselContainer = styled.div`

padding : 10px 1vw;

width : 1000px;
height : 220px;

margin : 0 auto;

@media (max-width : 600px){
    width : 600px;
}

`

const Cover = styled.div`

width : 300px;
height : 250px;

padding : 10px;

text-align : center;
display : flex;

/* background : #040800; */
background : #252222;
border-radius : 12px;

@media (max-width : 600px){
    width : 200px;

}
`
const LContainer = styled.div`
display : flex;
flex-direction : column;
justify-content : center;
`

const Img = styled.img`
width : 200px;
height : 200px;
margin : 0 auto;

`

const RContainer = styled.div`
display : flex;
flex-direction : column;
justify-content  : space-around;

font-family: tway, sans-serif, Arial;

@media (max-width : 600px){
    display : none;
}
padding-left : 10px;
color : #ffffff;
`

const BookTitle = styled.span`
font-weight : 600;
text-align : left;
`
const Publisher = styled.span`
`
const View = styled.span`
`
const ButtonDiv = styled.div`


background : #ffffff;

border-radius : 20px;
`
const Button = styled.button`

width : 40px;
height : 40px;

background : transparent;
border : 0px;

font-size : 25px;
font-weight : 1000;

`