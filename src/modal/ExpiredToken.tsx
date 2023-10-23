import React,{useState} from "react"
import useInput from "../hooks/useInput";
import Dropdown from "../components/common/DropDown";

import styled from "styled-components";
import { useNavigate } from "react-router";

interface expTypes{
  exp : boolean
}
export default function ExpiredToken({exp} : expTypes ){
  const [propsExp,setPropsExp] = useState<boolean>(exp);
  console.log(propsExp)
  const navigate = useNavigate();
  const login = () => {
    
    setPropsExp(false)

    navigate('/login')

  }
    return(
      <>
      {propsExp ?
        <ModalBackground>
            <Container>
                <Content>
                    <p>토큰 만료시간이 되었습니다.</p>
                    <p>다시 로그인 해주세요.</p>
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
  height: 300px;

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

  display : flex;
  justify-content : center;

`

const Content = styled.div`
font-family : tway;
font-size : 24px;

`

const Button = styled.button`

`

