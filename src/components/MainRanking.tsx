import ItemsCarousel from 'react-items-carousel';
import React ,{useState} from 'react';

import { styled } from 'styled-components';

import Slide1 from '../assets/imgs/Slide1.jpg';
import Slide2 from '../assets/imgs/Slide2.jpg';
import Slide3 from '../assets/imgs/Slide3.jpg';
import Slide4 from '../assets/imgs/testbookcover.jpg';
import Slide5 from '../assets/imgs/Naver.jpg';

export default function MainRanking(){
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 0;
    return(
        <>
            <Title>
                조회수 랭킹 순위 !
            </Title>

            <Container>
            <ItemCarouselContainer>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={3} //보여줄 아이템 갯수
        gutter={20} //간격
        leftChevron={<Button>{'<'}</Button>}
        rightChevron={<Button>{'>'}</Button>}
        outsideChevron ={true}
        chevronWidth={chevronWidth}
        infiniteLoop={true}
        disableSwipe={true}
      >
            <ImgCover>
                <Img src={Slide1} alt='x' />
            </ImgCover>
            <ImgCover>
                <Img src={Slide2} alt='x' />
            </ImgCover>

            <ImgCover>
                <Img src={Slide3} alt='x' />
            </ImgCover>
            <ImgCover>
                <Img src={Slide4} alt='x' />
            </ImgCover>
            <ImgCover>
                <Img src={Slide5} alt='x' />
            </ImgCover>
        </ItemsCarousel>
        
        </ItemCarouselContainer>
            </Container>
        </>
    )
}

const Title = styled.div`
    font-size : 20px;
    text-align : left;

    /* 상 오 하 왼 */
    margin : 0px 0px 0px 150px;

    color : #212221;

    font-family: tway, sans-serif, Arial;
    font-weight : 500;
`
const Container = styled.div`


`
const ItemCarouselContainer = styled.div`

padding : 10px 1vw;

`

const ImgCover = styled.div`

text-align : center;

/* 임시 */
background : #e2e2e2;
`
const Img = styled.img`


height : 200px;

`

const Button = styled.button`

background : transparent;
border : 0px;

`