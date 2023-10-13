import React from "react"
import useInput from "../../hooks/useInput"
import Header from "../../components/common/Header"


import { styled,css } from "styled-components"
import { StyledButtonLink } from "../../styles/link"
import axios from "axios"
import { getCookie } from "../../components/common/Cookie"

export default function EditPwd(){

    //입력창 아이디 비번, 비번확인, 닉네임
    const [ { currentPassword, password1,password2}, onInputChange, resetInput ] = useInput({
        currentPassword : '',
        password1: '',
        password2: '',
        
    });

    const submit = (e: React.MouseEvent) => {
        e.preventDefault(); // Prevent the default form submission behavior.
        
        // Assuming you have defined the following state variables:
        // const currentPassword = ...;
        // const password1 = ...;
        // const password2 = ...;
        
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
                    <EditProfileButton>
                        <StyledButtonLink to='/editprofile'>
                            프로필 수정
                        </StyledButtonLink>
                    </EditProfileButton>
                </EditProfileButtonContainer>

                {/* 비밀번호 */}
                <InputContainer >
                    <Form>
                        <Div>
                            <P>현재 비밀번호</P>
                        </Div>

                        <Input password={true}
                            placeholder='비밀번호를 입력해주세요' 
                            name="currentPassword" 
                            value={currentPassword}
                            onChange={onInputChange} />

                        <Div>
                            <P>변경할 비밀번호</P>
                        </Div>

                        <Input password={true}
                            placeholder='비밀번호를 입력해주세요' 
                            name="password1" 
                            value={password1}
                            onChange={onInputChange} />

                        <Div>
                            <P>변경할 비밀번호 확인</P>
                        </Div>

                        <Input password={true}
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
width : 400px;

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

const EditProfileButton = styled.button`
font-family: tway, sans-serif, Arial;
font-weight : bold;
font-size : 15px;

/* 상 오 하 왼 */
margin : 0px 0px 0px 0px;

color : #212221;

background-color : transparent;

border : 0.1px solid #000000;

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
font-size : 12px;
text-align : left;

/* 상 오 하 왼 */
margin : 0px 0px 0px 40px;

color : #212221;

font-family: tway, sans-serif, Arial;
font-weight : bold;

`

const Form = styled.form`

`

const Input = styled.input <{password : boolean}>`
width : 220px;
height : 30px;

margin : 10px;

border : 2px solid #e2e2e2;
padding : 0px;

${(props) =>
    props.password &&
    css`
        width: 300px;
    `}
    
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