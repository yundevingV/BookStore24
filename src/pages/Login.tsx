import React from "react";
import Header from "../components/Header";
import useInput from '../hooks/useInput';

import { styled } from "styled-components";

export default function Login() {

    const [ { id, password }, onInputChange, resetInput ] = useInput({
        id: '',
        password: '',
    });
    
    console.log(id)
    console.log(password)


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
                        회원 가입 
                    </Menu>
                    <Menu>
                        아이디찾기
                    </Menu>
                    <Menu>
                        비밀번호찾기
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
`

const Title = styled.div`
margin: 0 auto;
text-align : center;

`

const TitleFont = styled.p`
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
color:  #7d7874;
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

&:hover {
    background-color: #ffffff;
    border : 2px solid #033bfa;

    color : black;    
    cursor : pointer;
    }
`