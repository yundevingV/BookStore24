import React,{useState} from "react"

import styled from "styled-components";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";

import { saveloginStatus } from "../action/login_status";

interface expTypes{
  exp : boolean
}
export default function ExpiredToken({exp} : expTypes ){
  const [propsExp,setPropsExp] = useState<boolean>(exp);
  console.log(propsExp)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const login = () => {

    setPropsExp(false)

    navigate('/login')
    dispatch(saveloginStatus(false));
    sessionStorage.clear();

  }
    return(
      <>
      {propsExp ?
        <ModalBackground>
            <Container>
                <Content>
                    <Font>로그인 유효시간이 만료 되었습니다.</Font>
                    <Font>다시 로그인 해주세요.</Font>
                    <Button onClick={login}>로그인 하기</Button>
                </Content>
            </Container>
        </ModalBackground>
        : <></>
    }
    </>
    
    )
}
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
/* 모달창 크기 */
  width: 600px;
  height: 250px;

  /* 최상단 위치 */
  z-index: 999;
  
  /* 중앙 배치 */

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  /* 모달창 디자인 */
  background-color: #fff;
  border-radius: 12px;



`

const Content = styled.div`
font-family : tway;
font-size : 24px;

width : 100%;

text-align: center;

position : absolute;
top : 20px;



`

const Font = styled.p`
font-family: tway, sans-serif, Arial;

`


const Button = styled.button`

  margin-top : 20px;

  text-align: center;

//기본 크기가 input > button
width : 150px;
height : 40px;

font-size : 20px;
color : #ffffff;

background-color: #567dfc;

border : 2px solid #ffffff;
border-radius : 8px;
font-family: tway, sans-serif, Arial;

&:hover {
  
    cursor : pointer;
    }
`

