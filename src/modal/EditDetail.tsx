import React, { useState, useEffect } from "react"


import styled, { css } from "styled-components";


import axios from "axios";
import { useNavigate } from "react-router";

interface EditDetailProps {
    onClose: () => void;
}
    
export default function EditDetail({onClose} : EditDetailProps){

    // 모달을 닫기 위한 상태
    const no = (e: React.MouseEvent) => {
        const target = e.target as HTMLElement;
        if (target === e.currentTarget) {
          onClose(); 
        }
    };
    
    const navigate = useNavigate();

    const yes = () => {navigate(-1);}
    return(
        <ModalBackground>
            <Container>

                <MiddleDiv>
                <Font fontSize={25}>
                    수정을 취소 하시겠습니까 ?
                </Font>

                <Font fontSize={15}>
                    수정하신 내용은 복구하실 수 없습니다.
                </Font>
                </MiddleDiv>

                <ButtonContainer>
                    <Button bgColor="#e20154" color="#ffffff" onClick={yes}>
                        네
                    </Button>

                    <Button bgColor="#ffffff" color="#000000" onClick={no}>
                        아니오
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

const MiddleDiv = styled.div`
    position: absolute;
    top: 0px;

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
    width : 100px;
    height : 30px;

    margin : 20px;

    border-radius : 5px;
    border : 0px;

    font-family : 'tway';
    
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

