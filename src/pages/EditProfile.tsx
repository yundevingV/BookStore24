import React,{useState} from "react";
import useInput from "../hooks/useInput";
import Jisoo from '../assets/imgs/jisoo.jpg'
import Header from "../components/Header";
import Dropdown from "../components/Dropdown";
import { Space } from "../styles/Space";
import { StyledButtonLink } from "../styles/link";


import { styled } from "styled-components";
import axios from "axios";
import { getCookie } from "../components/Cookie";
import { useSelector} from "react-redux";
import { RootState } from "../reducer/index";

export default function EditProfile() {

    //입력창 이메일
    const [ { nickname }, onInputChange, resetInput ] = useInput({
        //기존 닉네임 받아오기!
        nickname : '',
    });

    const dropDownValueData = useSelector(
        (state: RootState) => state.DropDownValueReducer.dropDownValueData
    );
    
    const submit = (e: React.MouseEvent) => {
        e.preventDefault(); // Prevent the default form submission behavior.

        const jwt = getCookie('jwt'); // Assuming you have a function to get the JWT token from cookies.
        
        // Data to be sent in the request body.
        const data = {
            "residence":  dropDownValueData,

        };
        
        // Axios configuration for the POST request.
        const config = {
            headers: {
            Authorization: jwt,
            },
        };
        
        axios
            .post(`http://61.79.215.100/member/profile/residence/edit/save`, data, config)
            .then((response) => {
            console.log(`Response : ${JSON.stringify(data)}`);
            })
            .catch((error) => {
            console.log('Error:', error.response.data);
            });
        
        resetInput();
        };
    return(
        <Wrapper>
            <Header />
            <Container>
                <Space width={0} height={5} />

                <PwdButtonContainer>
                    <PwdButton>
                        <StyledButtonLink to='/editpwd'>
                            비밀번호 수정하기

                        </StyledButtonLink>
                    </PwdButton>
                </PwdButtonContainer>

                {/* 사용자 정보 */}
                <ProfileInfoContainer>

                    <PictureContainer>
                        <P>프로필사진</P>
                        <Picture src={Jisoo} />
                    </PictureContainer>
                    <Space width={0} height={20} />

                    <NickNameContainer>
                        <P>
                            닉네임
                        </P>

                        <NickNameInput 
                            placeholder='닉네임을 입력해주세요'
                            name="nickname" 
                            value={nickname}
                            onChange={onInputChange}/>
                        
                        <NickNameButton>
                            중복확인
                        </NickNameButton>

                    </NickNameContainer>      

                    <Space width={0} height={20} />

                    <ResidenceContainer>
                        
                        <P>거주지역 </P>
                        
                        <Space width={0} height={15} />

                            <Dropdown />
                    </ResidenceContainer>

                </ProfileInfoContainer>

                <Space width={0} height={20} />

                <SaveButtonContainer>
                    <SaveButton onClick={submit}>
                        거주지 수정하기
                    </SaveButton>
                </SaveButtonContainer>

                <RetireButtonContainer>
                    <RetireButton>
                        회원 탈퇴하기
                    </RetireButton>
                </RetireButtonContainer>

            </Container>
        </Wrapper>
    )
}
const Wrapper = styled.div`

`
const Container = styled.div`
width : 500px;

font-family: arial;
font-size: 24px;

margin: 0 auto;
padding : 10px;

border : 2px solid #e2e2e2;

font-family: tway, sans-serif, Arial;

position : relative;
top:5vh;

`
const PwdButtonContainer = styled.div`

text-align : right;
`

const PwdButton = styled.button`
font-family: tway, sans-serif, Arial;
font-weight : bold;
font-size : 15px;

/* 상 오 하 왼 */
margin : 0px 0px 0px 0px;

color : #212221;

background-color : transparent;

border : 0.1px solid #000000;

`
const ProfileInfoContainer = styled.div`
margin:0px;
border : 0px;

width : 100%;

display : inline-block;
`

const PictureContainer = styled.div`
text-align : center;
`

const Picture = styled.img`

width : 70px;
height : 70px;
padding : 15px;

`

const NickNameContainer = styled.div`

width : 100%;
text-align : center;

`

const P = styled.p`

font-size : 15px;
text-align : center;

/* 상 오 하 왼 */
margin : 0px 0px 0px 0px;

color : #212221;

font-family: tway, sans-serif, Arial;
font-weight : bold;

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

const ResidenceContainer = styled.div`

text-align : center;

`

const SaveButtonContainer = styled.div`
text-align : center;
margin-top : 40px;
`

const SaveButton = styled.button`
//기본 크기가 input > button
width : 120px;
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


const RetireButtonContainer = styled.div`
text-align : center;
margin-top : 40px;
margin-bottom : 40px;

`

const RetireButton = styled.button`

//기본 크기가 input > button
width : 120px;
height : 30px;

background-color: #e3174f;
border : 2px solid #ffffff;
color : black;    


font-family: tway, sans-serif, Arial;

&:hover {

  background-color: #ffffff;
  border : 2px solid #e3174f;

    cursor : pointer;
    }

`