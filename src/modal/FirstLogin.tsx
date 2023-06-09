import React from "react"
import useInput from "../hooks/useInput";
import Dropdown from "../components/Dropdown";

import styled from "styled-components";

type ViewProps = {
    viewModal : boolean;
    setViewModal: React.Dispatch<React.SetStateAction<boolean>>;

}

export default function FirstLogin({viewModal , setViewModal} : ViewProps){
    console.log(viewModal);

    const closeModal = (e : React.MouseEvent) => {
        setViewModal(false);
    }

    const [ { nickname}, onInputChange, resetInput ] = useInput({
      nickname : '',
  });

  const submit = (e : React.MouseEvent) => {

      console.log(nickname);

      resetInput();
  }
    return(
        <ModalBackground>
        <Container>
            <NickName>
              <Font>
                닉네임을 입력해주세요
              </Font>

              <NickNameInput 
                placeholder='닉네임을 입력해주세요'
                name="nickname" 
                value={nickname}
                onChange={onInputChange}/>
              
              <NickNameButton>
                중복확인
              </NickNameButton>

            </NickName>

            <Residence>
              <Font>
                거주지역을 선택해주세요
              </Font>
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

const Font = styled.p`
text-align: center;
font-family: tway, sans-serif, Arial;

`

const NickName = styled.div`
  position: absolute;
  top: 50px;
  
  width : 100%;
`

const NickNameInput = styled.input `


width : 240px;
height : 30px;

margin : 20px;

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
//기본 크기가 input > button
width : 100px;
height : 30px;

background-color: #ffffff;
border : 2px solid #033bfa;
color : black;    


font-family: tway, sans-serif, Arial;

&:hover {

  color : #ffffff;
  background-color: #033bfa;
  border : 2px solid #ffffff;

    cursor : pointer;
    }
`

const Residence = styled.div`
  position: absolute;
  top: 180px;

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
//기본 크기가 input > button
width : 200px;
height : 30px;

font-size : 12px;

margin : 10px;
padding : 5px;

border-radius : 24px;

background-color: #033bfa;
border : 0px solid #ffffff;
color : #ffffff;

font-family: tway, sans-serif, Arial;

&:hover {

  background-color: #ffffff;
  border : 2px solid #033bfa;
  color : #033bfa;

    cursor : pointer;
    }
`