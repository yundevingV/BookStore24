import React from "react";
import useInput from "../hooks/useInput";
import Header from "../components/Header";


import { styled } from "styled-components";

export default function FindPwd(){

    //입력창 이메일
    const [ { id , email }, onInputChange, resetInput ] = useInput({
        id : '',
        email : '',
    });

    const submit = (e : React.MouseEvent) => {
        console.log(email);
        
        resetInput();
    }

    return(
        <Wrapper>
            <Header />
            <FindContainer>
                <Title>
                    <TitleFont>
                        비밀번호찾기
                    </TitleFont>
                </Title>


                <InputContainer>
                <Div>
                    <P>
                        아이디를 입력해주세요.
                    </P>
                </Div>
                    <Input 
                        placeholder='아이디를 입력해주세요.'
                        name="id" 
                        value={id}
                        onChange={onInputChange}/>
                </InputContainer>

                <InputContainer>
                <Div>
                    <P>
                        이메일을 입력해주세요.
                    </P>
                </Div>
                    <Input 
                        placeholder='이메일을 입력해주세요.'
                        name="email" 
                        value={email}
                        onChange={onInputChange}/>
                </InputContainer>

                <ButtonContainer>
                    <Button onClick={submit}>
                        비밀번호 찾기
                    </Button>
                </ButtonContainer>

            </FindContainer>    
        </Wrapper>

    )
}
const Wrapper = styled.div`

`
const FindContainer = styled.div`

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

const Div = styled.div`
margin:0px;
border : 0px;

`

const P = styled.p`
font-size : 5px;
text-align : left;

/* 상 오 하 왼 */
margin : 0px 0px 0px 55px;

color : #212221;

font-family: tway, sans-serif, Arial;
font-weight : bold;

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

const ButtonContainer = styled.div`
margin: 0 auto;
text-align : center;

`

const Button = styled.button`

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