import React from "react";
import Header from "../components/Header";

import { styled } from "styled-components";

export default function Join(){
    return(
        <Wrapper>
            <Header />

            <JoinContainer>

                {/* 아이디 */}
                <InputContainer>
                    <Form>
                        <Input 
                            placeholder='아이디를 입력해주세요' />
                            <OverlapButton>
                                아이디 중복확인
                            </OverlapButton>
                    </Form>
                </InputContainer>

                {/* 비밀번호 */}
                <InputContainer>
                    <Form>
                        <Input 
                            placeholder='비밀번호를 입력해주세요'/>
                        <Input 
                            placeholder='비밀번호를 확인해주세요'/>
                    </Form>
                </InputContainer>

                {/* 닉네임 */}
                <InputContainer>
                    <Form>
                        <Input 
                            placeholder='닉네임을 확인해주세요'/>
                            <OverlapButton>
                                닉네임 중복확인
                            </OverlapButton>
                    </Form>
                </InputContainer>
            </JoinContainer>

        </Wrapper>  
    )
}

const Wrapper = styled.div`
    
`

const JoinContainer = styled.div`
width : 500px;

font-family: arial;
font-size: 24px;

margin: 0 auto;
padding : 10px;

border : 2px solid #e2e2e2;
`

const InputContainer = styled.div`
margin: 0 auto;
text-align : center;
`

const Form = styled.form`
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
const OverlapButton = styled.button`
`    
