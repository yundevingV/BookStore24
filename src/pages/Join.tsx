import React,{useState} from "react";
import Header from "../components/Header";

import { styled } from "styled-components";

export default function Join(){

    // 거주지역 선택 더미 데이터
    const selectList = ["서울", "인천", "경기도", "부산"];
    const [selected, setSelected] = useState('');

    const handleSelect = (e : any) => {
        setSelected(e.target.value);
      };
    return(
        <Wrapper>
            <Header />

            <JoinContainer>

                {/* 아이디 */}
                <InputContainer>

                    <Form>

                        <PDiv>
                            <P>아이디</P>
                        </PDiv>

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
                        <PDiv>
                            <P>비밀번호</P>
                        </PDiv>

                        <Input 
                            placeholder='비밀번호를 입력해주세요'/>

                        <PDiv>
                            <P>비밀번호 확인</P>
                        </PDiv>

                        <Input 
                            placeholder='비밀번호를 확인해주세요'/>
                    </Form>
                </InputContainer>

                {/* 닉네임 */}
                <InputContainer>
                    <Form>
                        <PDiv>
                            <P>닉네임</P>
                        </PDiv>

                        <Input 
                            placeholder='닉네임을 확인해주세요'/>
                            <OverlapButton>
                                닉네임 중복확인
                            </OverlapButton>
                    </Form>
                </InputContainer>

                {/* 거주지역 */}
                <InputContainer>
                        <PDiv>
                            <P>거주지역</P>
                        </PDiv>

                    <select onChange={handleSelect} value={selected}>
                        {selectList.map((item) => (
                            <option value={item} key={item}>
                                {item}
                            </option>
                        ))}
                    </select>
                </InputContainer>

                <ButtonContainer>
                    <SubmitButton>
                        제출하기
                    </SubmitButton>
                </ButtonContainer>
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
const PDiv = styled.div`
margin:0px;
border : 0px;

`

const P = styled.p`
font-size : 5px;
text-align : left;

/* 상 오 하 왼 */
margin : 0px 0px -5px 15px;

font-weight : bold;
color : #212221;

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
const ButtonContainer = styled.div`
margin: 0 auto;
text-align : center;
`

const SubmitButton = styled.button`

`