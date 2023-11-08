import styled from 'styled-components';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';

import review from '../../assets/imgs/review.png';
import store from '../../assets/imgs/store.png';
import login from '../../assets/imgs/login.png';
import { useNavigate } from 'react-router-dom';

const StyledCarousel = styled.div`
  .Form1 {
    height: 600px;
    background-color: aliceblue;
    display: flex;
    align-items: center;
    .homeContainer {
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 1024px;
      margin: 0 auto;
      @media screen and (max-width: 900px) {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    img {
      width: 550px;
      border-radius: 5px;
      @media screen and (max-width: 900px) {
        display: none;
      }
    }
    .img1Container {
      padding-bottom: 20px;
    }
    .desSt {
      color: #42728f;
      font-weight: 500;
    }
    .title{
      font-family : Cooper;
      font-size : 80px;
      color : #4dac27;
    }
  }
  .Form2 {
    height: 600px;
    background-color: #fbf7f2;
    display: flex;
    align-items: center;
    .shareContainer {
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 1024px;
      margin: 0 auto;
      @media screen and (max-width: 785px) {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    img {
      width: 320px;
      border-radius: 5px;
      @media screen and (max-width: 785px) {
        display: none;
      }
    }
    .ask {
      color: #d57600;
      margin-bottom: 10px;
    }
    .toShareAdd {
      outline: none;
      padding: 6px 10px;
      color: #d57600;
      border: 2px solid #d57600;
      border-radius: 5px;
      &:hover {
        font-weight: 600;
      }
    }
  }
  .Form3 {
    height: 600px;
    background-color: #e7ece9;
    display: flex;
    align-items: center;
    .reqContainer {
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 1024px;
      margin: 0 auto;
      @media screen and (max-width: 785px) {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    img {
      width: 320px;
      border-radius: 5px;
      @media screen and (max-width: 785px) {
        display: none;
      }
    }
    .ask {
      color: #6f957b;
      margin-bottom: 10px;
    }

    button {
      outline: none;
      padding: 6px 10px;
      color: #6f957b;
      border: 2px solid #6f957b;
      border-radius: 5px;
      &:hover {
        font-weight: 600;
      }
    }
  }
  .Form4 {
    height: 600px;
    background-color: #eeeaee;
    display: flex;
    align-items: center;
    .rateContainer {
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 1024px;
      margin: 0 auto;
      @media screen and (max-width: 996px) {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    img {
      width: 600px;
      border-radius: 3px;
      @media screen and (max-width: 996px) {
        display: none;
      }
    }
    .ask {
      color: #a24da2;
      margin-bottom: 10px;
    }
    p {
      line-height: 1.3rem;
    }
    .toRateList {
      outline: none;
      padding: 6px 10px;
      color: #a24da2;
      border: 2px solid #a24da2;
      border-radius: 5px;
      &:hover {
        font-weight: 600;
      }
    }
  }
  .Form5 {
    height: 600px;
    background-color: #f2f2fb;
    display: flex;
    align-items: center;
    .loginContainer {
      display: flex;
      justify-content: center;
      gap: 100px;
      align-items: center;
      width: 1024px;
      margin: 0 auto;
      @media screen and (max-width: 996px) {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    img {
      width: 380px;
      border-radius: 3px;
      @media screen and (max-width: 996px) {
        display: none;
      }
    }
    .ask {
      color: #9066ba;
      margin-bottom: 10px;
      font-weight: 500;
    }
    p {
      line-height: 1.3rem;
    }
  }
`;

const CarouselForm = () => {
  const navigate = useNavigate();
  return (
    <>
      <Carousel
        navButtonsProps={{
          style: {
            padding: '15px',
          },
        }}
        navButtonsWrapperProps={{
          style: {
            padding: '5%',
          },
        }}
       
      >
        <StyledCarousel>
          <Paper variant="outlined" square className="Form1">
            <div className="homeContainer">
              
              <div>
                <p className='title'>BookStore24</p>
                <p>온라인 중고 서적 거래 플랫폼 </p>
                <p className="desSt">
                  책을 가까이 하는 삶을 만드는 BookStore24 입니다
                </p>
              </div>
            </div>
          </Paper>
        </StyledCarousel>

        <StyledCarousel>
          <Paper variant="outlined" square className="Form4">
            <div className="rateContainer">
              <div>
                <h1>
                  같은 생각, <br />
                  다른 생각을 공유해요
                </h1>
                <p>
                  특별히 감명깊게 읽은 책이 있다면 평점을 남기고 <br />
                  다른 사람들은 어떻게 생각하는지 구경할 수 있어요
                </p>
              </div>
              <div>
                <img src={review} alt="rateListImg" />
              </div>
            </div>
          </Paper>
        </StyledCarousel>
        <StyledCarousel>
          <Paper variant="outlined" square className="Form4">
            <div className="rateContainer">
              <div>
                <h1>
                  안전하게 거래해요
                </h1>
                <p>
                  신뢰된 사용자들끼리 중고 도서를
                </p>
                <p>
                  사고 팔 수 있어요 
                </p>
              </div>
              <div>
                <img src={store} alt="rateListImg" />
              </div>
            </div>
          </Paper>
        </StyledCarousel>
        <StyledCarousel>
          <Paper variant="outlined" square className="Form5">
            <div className="loginContainer">
              <div>
                <img src={login} alt="loginModalImg" />
              </div>
              <div>
                <h1>
                  쉽고 간편하게 <br />
                  소셜 로그인으로
                </h1>
                <p>
                  복잡한 회원가입 없이 <br />
                  편리하게 이용할 수 있어요.
                </p>
                <div className="ask">
                  지금 바로 Book Store24를 시작해보세요!
                </div>
              </div>
            </div>
          </Paper>
        </StyledCarousel>
      </Carousel>
    </>
  );
};

export default CarouselForm;