import Slide1 from '../../assets/imgs/1.png';
import Slide2 from '../../assets/imgs/2.png';
import Slide3 from '../../assets/imgs/3.png';
import Slide4 from '../../assets/imgs/4.png';

import { styled } from 'styled-components';

import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



export default function Carousel() {

  const settings = {
		dots: true,          // 캐러셀 밑에 ... 을 표시할지
		infinite: true,      // 슬라이드가 끝까지 가면 다시 처음으로 반복
		speed: 3000,         // 속도
		autoplay: true,      // 자동 재생
		autoplaySpeed: 3000, // 자동 재생 속도
		slidesToShow: 1,     // 한 번에 보여줄 슬라이드 개수
		slidesToScroll: 1,   // 한 번에 넘어가는 슬라이드 개수


    // nextArrow: <NextArrow />,
    // backArrow : <BackArrow />

  };
  return (
    <Wrapper>
      <Slider {...settings}>

        <ImgCover>
          <Img src={Slide1} />
        </ImgCover>
        
        <ImgCover>
          <Img src={Slide2} />
        </ImgCover>
        
        <ImgCover>
          <Img src={Slide3} />
        </ImgCover>

        <ImgCover>
          <Img src={Slide4} />
        </ImgCover>
      </Slider>
    </Wrapper>
  );
};

const Wrapper = styled.div`
overflow : hidden;
`
const ImgCover = styled.div`
/* 임시 */


`
const Img = styled.img`

margin: 0 auto;

width : 100vw;

@media screen and (max-width: 1270px) {
    width : 1200px;
  }
height : 500px;

`

