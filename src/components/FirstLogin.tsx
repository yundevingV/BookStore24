import React from "react"
import styled from "styled-components";
import Dropdown from "./Dropdown";

type ViewProps = {
    viewModal : boolean;
    setViewModal: React.Dispatch<React.SetStateAction<boolean>>;

}

export default function FirstLogin({viewModal , setViewModal} : ViewProps){
    console.log(viewModal);

    const closeModal = (e : React.MouseEvent) => {
        setViewModal(false);
    }


    return(
        <ModalBackground>
        <Container>
            <NickName>
              <NickNameInput 
                placeholder='닉네임을 입력해주세요'
                />
              
              <NickNameButton>
                중복확인
              </NickNameButton>

            </NickName>

            <Residence>
              <DropdownContainer>
                <Dropdown />
              </DropdownContainer>
            </Residence>

            <SubmitButtonContainer>
              <SubmitButton > 등록하기 </SubmitButton>
            </SubmitButtonContainer>

            <Button onClick={closeModal}> X </Button>



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
  height: 500px;

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

const NickName = styled.div`
  position: absolute;
  top: 50px;
  
  width : 100%;
  background : black;
`
const NickNameInput = styled.input `
width : 220px;
height : 30px;

margin : 10px;

border : 2px solid #e2e2e2;
padding : 0px;

&::placeholder{
    font-family: tway, sans-serif, Arial;
	}

//인풋 창 포커스
&:focus {
    //클릭 했을때 기본(?) 선 안나오게.
    outline: none !important;

    border: 2px solid blue;
    }
`

const NickNameButton = styled.button`

`

const Residence = styled.div`
  position: absolute;
  top: 150px;

  width : 100%;

`

const DropdownContainer = styled.div`
text-align : center;
`

const Button = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;

  border : 0px;
  background-color: #e2e2e2;

`

const SubmitButtonContainer = styled.div`
  position: absolute;
  top : 400px;
  width : 100%;
  text-align : center;  
`
  

const SubmitButton = styled.button`

  
`