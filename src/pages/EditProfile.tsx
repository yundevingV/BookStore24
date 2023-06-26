import React,{useState} from "react";
import useInput from "../hooks/useInput";
import Jisoo from '../assets/imgs/jisoo.jpg'
import Header from "../components/Header";
import Dropdown from "../components/Dropdown";
import { Space } from "../styles/Space";


import { styled } from "styled-components";

export default function EditProfile() {
    //입력창 이메일
    const [ { nickname }, onInputChange, resetInput ] = useInput({
        //기존 닉네임 받아오기!
        nickname : '',
    });

    const submit = (e : React.MouseEvent) => {
        console.log('ok');
        resetInput();
    }

    const [viewModal , setViewModal] = useState(false);

    const openModal = (e : React.MouseEvent) => {
        
        viewModal === true ? setViewModal(false) : setViewModal(true)
    }
    return(
        <Wrapper>
            <Header />
            <Container>
                
                {/* 사용자 정보 */}
                <ProfileInfoContainer>

                    <PictureContainer>
                        <P>프로필사진</P>
                        <Picture src={Jisoo} />
                    </PictureContainer>
                    <Space height={20} />

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
                                  
                    <Space height={20} />

                    <ResidenceContainer>
                        
                        <P>거주지역 </P>
                        
                        <Space height={15} />

                            <Dropdown />
                    </ResidenceContainer>

                </ProfileInfoContainer>

                <Space height={20} />

                <SaveButtonContainer>
                    <SaveButton>
                        프로필 수정하기
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