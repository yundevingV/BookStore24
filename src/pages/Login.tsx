import React from "react";
import Header from "../components/Header";
import {StyledLink} from '../styles/link'
import useInput from '../hooks/useInput';
import naver from '../assets/imgs/Naver.jpg'
import kakao from '../assets/imgs/Kakao.jpg'
import google from '../assets/imgs/Google.png'


import { styled } from "styled-components";
import {Link} from 'react-router-dom';

export default function Login() {

    const [ { id, password }, onInputChange, resetInput ] = useInput({
        id: '',
        password: '',
    });

    const submit = (e : React.MouseEvent) => {
        console.log(id);
        console.log(password);
        resetInput();
    }
    
    return(
        <Wrapper>
            <Header />
            <LoginContainer>
                <Title>
                    <TitleFont>
                        BookStore24 📚
                    </TitleFont>
                </Title>

                <SnsContainer>
                    <SnsButton> 
                        <div>
                            <Logo src={naver} alt='x'/>
                            <SnsFont>
                                네이버 로그인하기
                            </SnsFont>
                        </div>
                    </SnsButton>

                    <SnsButton> 
                        <div>
                            <Logo src={kakao} alt='x'/>
                            <SnsFont>
                                카카오 로그인하기
                            </SnsFont>
                        </div>
                    </SnsButton>

                    <SnsButton> 
                        <div>
                            <Logo src={google} alt='x'/>
                            <SnsFont>
                                구글 로그인하기
                            </SnsFont>
                        </div>
                    </SnsButton>   

                </SnsContainer>
                
                <InputContainer>

                <form >

                    <Input 
                        placeholder='아이디를 입력해주세요' 
                        name="id" 
                        value={id}
                        onChange={onInputChange}
                        />
                    
                    <Input 
                        placeholder='비밀번호를 입력해주세요'
                        name="password"
                        value={password}
                        onChange={onInputChange}
                        />
                </form>

                </InputContainer>

                <MenuContainer>
                    <Menu>
                        <StyledLink to='/join'>
                            회원 가입 
                        </StyledLink>
                    </Menu>
                    <Menu>
                        <StyledLink to='/findid'>
                            아이디찾기
                        </StyledLink>
                    </Menu>
                    <Menu>
                        <StyledLink to='/findpwd'>
                            비밀번호찾기
                        </StyledLink>
                    </Menu>
                </MenuContainer>

                <ButtonContainer> 
                    <SubmitButton onClick={submit} >
                        로그인하기
                    </SubmitButton>
                </ButtonContainer>
                
            </LoginContainer>
        </Wrapper>
    )
}

//styled-component 

const Wrapper = styled.div`

`

const LoginContainer = styled.div`
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

const Title = styled.div`
margin: 0 auto;
text-align : center;

`

const TitleFont = styled.p`
`

const SnsContainer = styled.div`
margin: 0 auto;
text-align : center;
`

const Logo = styled.img`
width : 20px;
height : 20px;

float : left;
margin-left : 5px; 

`
const SnsFont = styled.span`
    font-family: tway, sans-serif, Arial;
    font-size : 17px; 
    color : #6c6c71;
`


const SnsButton = styled.button`
width : 350px;
height : 40px;

margin : 5px;

border : 2px solid #e2e2e2;
padding : 0px;
background-color : #ffffff;

&:hover {
    background-color : #e2e2e2;
    cursor : pointer;
    }
`


const InputContainer = styled.div`
margin: 0 auto;
text-align : center;

`

const Input = styled.input`
width : 350px;
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

const MenuContainer = styled.div`
width : 350px;

margin: 0 auto;

`

const Menu = styled.span`
font-size : 8px;
margin-right : 1vw;

&:hover {
    color : black;    
    cursor : pointer;
    }

`
const ButtonContainer = styled.div`
margin: 0 auto;
text-align : center;

`

const SubmitButton = styled.button`

//기본 크기가 input > button
width : 355px;
height : 30px;

font-size : 20px;
color : #ffffff;

margin-top : 10px;

background-color: #033bfa;

border : 2px solid #ffffff;
font-family: tway, sans-serif, Arial;

&:hover {
    background-color: #ffffff;
    border : 2px solid #033bfa;

    color : black;    
    cursor : pointer;
    }
`

