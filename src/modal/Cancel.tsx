import React from "react"
import useInput from "../hooks/useInput";
import Dropdown from "../components/common/DropDown";
import { openModal } from "../action/modal";

import styled, { css } from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../reducer/index";

import axios from "axios";
import { saveCancelStatus } from "../action/cancel_status";
import { useNavigate } from "react-router";

export default function FirstLogin(){


    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const yes = () => {
        dispatch(saveCancelStatus(false));
        navigate(-1);
    }

    const no = () => {
        dispatch(saveCancelStatus(true));
    }

    return(
        <ModalBackground>
            <Container>

                <TopDiv>
                <Font fontSize={25}>
                    작성을 취소하시겠습니까 ?
                </Font>
                </TopDiv>

                <MiddleDiv>
                <Font fontSize={15}>
                    작성중인 내용은 저장되지 않습니다.
                </Font>
                </MiddleDiv>

                <ButtonContainer>
                    <Button bgColor="#e20154" color="#ffffff" onClick={yes}>
                        확인
                    </Button>

                    <Button bgColor="#ffffff" color="#000000" onClick={no}>
                        취소
                    </Button>

                </ButtonContainer>

            </Container>
        </ModalBackground>
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
  width: 400px;
  height: 200px;

  /* 최상단 위치 */
  z-index: 999;
  
  /* 중앙 배치 */
  /* top, bottom, left, right 는 브라우저 기준으로 작동한다. */
  /* translate는 본인의 크기 기준으로 작동한다. */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  /* 모달창 디자인 */
  background-color: #e2e2e2;
  border: 1px solid black;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`

interface FontProps {
    fontSize?: number;
}

const Font = styled.p<FontProps>`
  text-align: center;
  font-family: tway, sans-serif, Arial;

  /* Define responsive font size based on props */
    ${({ fontSize }) =>
        fontSize &&
        css`
            font-size: ${fontSize}px;
        `}
`;


const TopDiv = styled.div`
  position: absolute;
  top: 0px;
  
  width : 100%;

`

const MiddleDiv = styled.div`
    position: absolute;
    top: 70px;

    width : 100%;

`


const ButtonContainer = styled.div`
  position: absolute;
  top : 100px;
  width : 100%;
  text-align : center;  
`

interface ButtonProps {
    bgColor : string,
    color : string
}
const Button = styled.button<ButtonProps>`
    width : 50px;
    height : 40px;

    margin : 20px;

    border-radius : 5px;
    border : 1px solid #000000;

    ${({ bgColor }) =>
        bgColor &&
        css`
            background: ${bgColor};
        `}
    
    ${({ color }) =>
        color &&
        css`
            color: ${color};
        `}

`
