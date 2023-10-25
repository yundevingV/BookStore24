import React from "react"
import useInput from "../../hooks/useInput"
import Header from "../../components/common/Header"


import { styled,css } from "styled-components"
import { StyledButtonLink } from "../../styles/link"
import axios from "axios"
import { getCookie } from "../../components/common/Cookie"
import { useLocation } from "react-router"

export default function EditPwd(){
    const location = useLocation();
    console.log(location)
    //입력창 아이디 비번, 비번확인, 닉네임
    const [ { currentPassword, password1,password2}, onInputChange, resetInput ] = useInput({
        currentPassword : '',
        password1: '',
        password2: '',
        
    });

    const submit = (e: React.MouseEvent) => {
        e.preventDefault(); // Prevent the default form submission behavior.
        

            // 공백 여부 검사
    if (currentPassword.trim() === '' || password1.trim() === '' || password2.trim() === '') {
        alert('빈칸을 모두 채워주세요.'); // 공백인 경우 알람 창을 띄움.
        return; // 더 이상 진행하지 않음.
    } else if (password1 !== password2) {
        alert('변경할 비밀번호가 일치하지 않습니다.')
    }
        const token = sessionStorage.getItem('token')
        
        // Data to be sent in the request body.
        const data = {
            nowPassword: currentPassword,
            password1: password1,
            password2: password2,
        };
        
        // Axios configuration for the POST request.
        const config = {
            headers: {
            Authorization: token,
            },
        };
        
        axios
            .post(`http://bookstore24.shop/member/password/edit/save`, data, config)
            .then((response) => {
            console.log(`Response : ${response.status}`);
            console.log(`Response : ${data}`);
            })
            .catch((error) => {
                console.log(error)
            console.log('Error:', error.response.data);
            });
        
        resetInput();
        };

    return(
        <Wrapper>
            <Header />
            <Container>
                <EditProfileButtonContainer>
                        <StyledEditButtonLink to='/editprofile' state={{loginType : location.state.loginType }}>
                            프로필 수정
                        </StyledEditButtonLink>
                </EditProfileButtonContainer>

                {/* 비밀번호 */}
                <InputContainer >
                    <Form>
                        <Div>
                            <P>현재 비밀번호</P>
                        </Div>

                        <Input 
                            type='password'
                            placeholder='비밀번호를 입력해주세요' 
                            name="currentPassword" 
                            value={currentPassword}
                            onChange={onInputChange} />

                        <Div>
                            <P>변경할 비밀번호</P>
                        </Div>

                        <Input 
                            type='password'
                            placeholder='비밀번호를 입력해주세요' 
                            name="password1" 
                            value={password1}
                            onChange={onInputChange} />

                        <Div>
                            <P>변경할 비밀번호 확인</P>
                        </Div>

                        <Input
                            type='password'
                            placeholder='비밀번호를 확인해주세요'
                            name="password2" 
                            value={password2}
                            onChange={onInputChange} />
                    </Form>
                </InputContainer>


                <SaveButtonContainer>
                    <SaveButton onClick={submit} >
                        비밀번호 수정하기
                    </SaveButton>
                </SaveButtonContainer>

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

font-family: tway, sans-serif, Arial;

position : relative;
top:5vh;

`
const EditProfileButtonContainer = styled.div`

text-align : right;
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

const InputContainer = styled.div `

margin: 0 auto;
text-align : center;

`
const Div = styled.div`
margin:0px;
border : 0px;

`
const P = styled.p`
font-size : 15px;
text-align : left;

margin : 20px 100px;

color : #212221;

font-family: tway, sans-serif, Arial;
font-weight : bold;

`

const Form = styled.form`

`

const Input = styled.input`

width : 300px;
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

const SaveButtonContainer = styled.div`
text-align : center;
margin-top : 40px;
`

const SaveButton = styled.button`
//기본 크기가 input > button
width : 120px;
height : 30px;

background-color: #567dfc;
border : 2px solid #ffffff;
color : #fff;
border-radius : 8px;

font-family: tway, sans-serif, Arial;

&:hover {


    cursor : pointer;
    }

`