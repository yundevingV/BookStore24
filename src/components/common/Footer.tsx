import { Link } from 'react-router-dom';
import styled from 'styled-components';

import github from '../../assets/imgs/git.svg';
import { StyledLink } from '../../styles/link';

const StyledFooter = styled.footer`
  height: 280px;
  background-color: #f2f2f2;
  display: flex;
  flex-flow: row wrap;
  bottom: 0;
  justify-content: center;
  margin-top: 5%;

  @media screen and (max-width: 1245px) {
    height: 300px;
    justify-content: flex-start;
  }
`;

const SFooterLogo = styled.div`
  height: 35px;
  display: flex;
  margin: 13px 25px 200px 0;
  align-items: center;

  @media screen and (max-width: 1328px) {
    margin: 0;
  }

  a {
    display: flex;
    align-items: center;
    font-size: 30px;
    font-weight: bold;

    font-family : Cooper;
    color : #4dac27;
    text-decoration : none;
  }
  .logo {
    width: 160px;
    height: 100px;
    fill: #444444;
  }
`;

const SGitContainer = styled.div`
  display: flex;
  color: #444444;

  .githubBox {
    max-width: 130px;
    text-align: center;
    padding: 10px 30px 0 0;
    white-space: nowrap;
    @media screen and (max-width: 822px) {
      padding: 10px 22px 0 0;
    }
    li {
      display: flex;
      align-items: center;
      font-size: 12px;
      padding: 0 15px 15px;
      color: #7a7a7a;

      a {
        display: flex;
        align-items: center;
        text-decoration : none; 
        color : #000;
        font-size  : 15px;
      }
    }
    .github {
      padding-right: 7px;
    }
  }
`;

const SDescription = styled.div`
 display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    color: #7a7a7a;
    font-weight: 600;
    font-size  : 14px;
    margin : 15px 0px;
    @media screen and (max-width: 822px) {
      display: none;
    }
  }

  .copyright {
    color: #7a7a7a;
    font-size: 12px;
    display: flex;
    justify-content: flex-end;

    @media screen and (max-width: 822px) {
      position: relative;
      bottom: -35%;
      right: -16%;
      font-size: 11px;
    }
  }
`;

const Policy = styled(StyledLink)`
font-size : 12px;
color: #7a7a7a;

margin-top : 10px;
`
const Footer = () => {
  return (
    <StyledFooter>
      <SFooterLogo>
        <Link to="/">
            BookStore24
        </Link>
      </SFooterLogo>
      <SGitContainer>
        <ul className="githubBox">
          <h4>BE</h4>
          <li>
            <a href="https://github.com/mgyokim">
              <img src={github} alt="github" className="github" />
              김민교
            </a>
          </li>
        </ul>
        <ul className="githubBox">
          <h4>FE</h4>
          <li>
            <a href="https://github.com/yundevingV">
              <img src={github} alt="github" className="github" />
              이윤성
            </a>
          </li>
          
        </ul>
        <SDescription>
        <p>
        도서 거래 24 프로젝트는 온라인 중고 서적 거래를 위한 플랫폼입니다. <br /><br />
        이 프로젝트는 사용자들이 간단하게 책을 사고 팔 수 있도록 돕기 위해 만들어졌습니다.<br /><br />
        사용자는 이 플랫폼에서 자신이 판매하고자 하는 책을 등록할 수 있으며, 다른 사용자들이 판매하는 책을 검색하여 구매할 수도 있습니다. <br /><br />
        이를 위해 사용자들은 회원 가입을 해야 합니다. 회원 가입 후 자신이 판매하는 책을 등록하고, 다른 사용자들이 판매하는 책을 검색할 수 있습니다.<br /><br />
        도서 거래 24 프로젝트는 책을 좋아하는 모든 사람들에게 추천할 만한 플랫폼입니다. 안전하고 편리한 거래를 위해 이용해보세요!
          </p>
          <div className="copyright">copyright ⓒ 2023 MGYO & YundevingV</div>
          <div className="copyright">
            <Policy to='policy'>개인정보 처리방침
            </Policy>
          </div>
        </SDescription>
      </SGitContainer>
    </StyledFooter>
  );
};
export default Footer;