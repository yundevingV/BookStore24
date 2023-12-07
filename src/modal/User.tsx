import React ,{useState} from "react";
import { styled , keyframes} from "styled-components";
import { StyledButtonLink } from "../styles/link";

interface UserSimpleProps {
    onClose: () => void;
    logout: () => void;
    time : {
      minutes: number;
      seconds: number;
    }
    
    nickname : string;

  }

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;  

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;

`;

const Container = styled.div`
  width: 400px;
  height: 300px;

  border-radius : 40px 0px 0px 40px;
  
  position: absolute;
  top: 10%;
  right: 5%;

  background-color: #FCFCFC;

  animation: ${slideIn} 0.5s ease-in-out; // 슬라이딩 애니메이션 적용

`

const Menu = styled.div`

	position: relative;
	font-size: 16px;

    &::after {
        content: '';
        position: absolute;
        border-style: solid;
        border-width: 0 16px 20px 16px;
        border-color: #FFFFFF transparent;
        display: block;
        width: 0;
        z-index: 1;
        top: -55px; 
        left: 87%; 
    }


`

const Content = styled.div`
  display : flex;
  justify-content : center;

  margin : 35px 0px;  
`

const StyledEditButtonLink = styled(StyledButtonLink)`
    
    padding : 10px;

    border-radius : 8px;

    font-size : 15px;
    font-family: tway, sans-serif, Arial;

    font-weight : bold;
    background : #cecece;
    text-decoration: none;
    color : #000;


`
const LogoutButton = styled.button`

    border : 0px;
    border-radius : 8px;
    background : #e20154;
    color : #fff;
    padding : 10px;
    cursor : pointer;
    font-size : 17px;
    font-family : tway;

    

`
export default function User({ onClose, logout, time, nickname }: UserSimpleProps) {
  // 모달을 닫기 위한 상태
  const closeModal = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target === e.currentTarget) {
      onClose(); // 배경 클릭 시 모달 닫기
    }
  };

  return (
    <ModalBackground onClick={closeModal}>
      <Container>
          <Menu>
            <Content>
              {nickname}
            </Content>

            <Content>
                <span>
                [로그인 유효시간 : {time.minutes >= 0 ? time.minutes : 0} 분
                </span>
                {time.seconds >= 0 ? time.seconds : 0} 초]
            </Content>


            <Content>
              <StyledEditButtonLink to='/profile'>
                프로필 설정
              </StyledEditButtonLink>
            </Content>

            <Content>
              <LogoutButton onClick={() => logout()}>로그아웃</LogoutButton>
            </Content>

          </Menu>
      </Container>
    </ModalBackground>
  );
}
