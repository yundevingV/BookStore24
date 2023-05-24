import React from "react";
import Header from "../components/Header";

import { styled } from "styled-components";

interface InputType {
    isType : boolean;
}

export default function Login() {

    const isType = true;

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
                    <InputType isType={isType}/>
                    <InputType isType={!isType}/>

                </InputContainer>

                <MenuContainer>
                    <Menu>
                        회원 가입 아이디찾기 비밀번호찾기
                    </Menu>
                </MenuContainer>

                <ButtonContainer> 
                    <SubmitButton>
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
font-family: arial;
font-size: 24px;
margin: 0 auto;

//보기전용
outline: dashed 1px black;
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
width : 256px;
height : 30px;

margin : 10px;

border : 2px solid #e2e2e2;

background-color : #e2e2e2;

//인풋 창 포커스
&:focus {
    //클릭 했을때 기본(?) 선 안나오게.
    outline: none !important;

    border: 2px solid blue;
    }
`

const MenuContainer = styled.div`
margin: 0 auto;
text-align : center;
`

const Menu = styled.p`
font-size : 8px;
`
const ButtonContainer = styled.div`
margin: 0 auto;
text-align : center;
`

const SubmitButton = styled.button`

`

//아이디 / 비밀번호에 따라 다르게 렌더링
// eslint-disable-next-line @typescript-eslint/no-redeclare
const InputType: React.FC<InputType> = ({ isType }) => {
return (
    <div>
    {isType ? (
        <Input placeholder='아이디를 입력해주세요' />
        
    ) : (
        <Input placeholder='비밀번호를 입력해주세요' />
    )}
    </div>
);
};