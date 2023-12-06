import React from "react"
import useInput from "../hooks/useInput";
import Dropdown from "../components/common/DropDown";
import { openModal } from "../action/modal";

import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../reducer/index";

import axios from "axios";
import { useNavigate } from "react-router";

export default function FirstLogin(){
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = sessionStorage.getItem('token')

    const [ { nickname}, onInputChange, resetInput ] = useInput({
      nickname : '',
  });

  const dropDownValueData = useSelector(
    (state: RootState) => state.DropDownValueReducer.dropDownValueData
);

  const save_NickNameResidence = (e : React.MouseEvent) => {

    if(nickname.length <= 1 ){
      alert('닉네임은 최소 2글자 이상 입력하세요 ! ');
      return;
    }

      axios.post('http://bookstore24.shop/member/nicknameresidence/save'
      ,
      {
  
        "nickname" : nickname,
        "residence" : dropDownValueData
    
      },

      {
      headers : {
        "Content-Type" : "application/json; charset=utf-8",
        'Authorization' : token
      }
      }
    )

      .then(response => {
        console.log(navigate);
        navigate(0)
        dispatch(openModal(false));
        console.log(response.status);
        
    })
    .catch(error => {
    console.log(`에러 사유 : ${error}`)
    console.log(error.response)

    if(error.response.data === 'duplicate Nickname'){
      alert('닉네임이 중복되었습니다!')
    } else {
      alert('거주지가 유효하지 않습니다!')
    }

    });
  }
    return(
        <ModalBackground>
        <Container>
            <NickName>
              <Font>
                닉네임을 입력해주세요
              </Font>

              <CenterContainer>
                <NickNameInput 
                  placeholder='닉네임을 입력해주세요 (최소 2글자 이상)'
                  name="nickname" 
                  value={nickname}
                  onChange={onInputChange}/>
              </CenterContainer>
            </NickName>

            <Residence>
              <Font>
                거주지역을 선택해주세요
              </Font>
              <CenterContainer>
                <Dropdown dropValue={dropDownValueData}/>
              </CenterContainer>
            </Residence>

            <NickNameResidenceButtonContainer>
              <NickNameResidenceButton onClick={save_NickNameResidence}> 등록하기 </NickNameResidenceButton>
            </NickNameResidenceButtonContainer>

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
const NickNameInput = styled.input`

width : 240px;
height : 30px;


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

const Residence = styled.div`
  position: absolute;
  top: 180px;

  width : 100%;

`

const CenterContainer = styled.div`
text-align : center;
`

const NickNameResidenceButtonContainer = styled.div`
  position: absolute;
  top : 400px;
  width : 100%;
  text-align : center;  
`
  
const NickNameResidenceButton = styled.button`
//기본 크기가 input > button
width : 200px;
height : 30px;

font-size : 12px;

margin : 10px;
padding : 5px;

border-radius : 8px;

background-color: #567dfc;
border : 0px solid #ffffff;
color : #ffffff;

font-family: tway, sans-serif, Arial;

&:hover {


    cursor : pointer;
    }
`