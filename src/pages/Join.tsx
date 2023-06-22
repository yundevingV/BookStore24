import React,{useState} from "react";
import Header from "../components/Header";
import Dropdown from "../components/Dropdown";
import useInput from "../hooks/useInput";

import { styled ,css } from "styled-components";

export default function Join(){

    //입력창 아이디 비번, 비번확인, 닉네임
    const [ { id, password1,password2,nickname,email,validNumber }, onInputChange, resetInput ] = useInput({
        id: '',
        password1: '',
        password2: '',
        email : '',
        vaildNumber:'',
    });

    const submit = (e : React.MouseEvent) => {
        console.log(id);
        console.log(password1);
        console.log(password2);
        console.log(nickname);
        console.log(email);

        console.log(nickname);

        resetInput();
    }

    




    //드롭다운 메뉴 펼치기
    const [view , setView] = useState(false);

    return(
        <Wrapper>
            <Header />

            <JoinContainer>

                {/* 아이디 */}
                <InputContainer >

                    <Form>

                        <Div>
                            <P>아이디</P>
                        </Div>

                        <Input password={false}
                            placeholder='아이디를 입력해주세요'
                            name="id" 
                            value={id}
                            onChange={onInputChange} />

                            <Button>
                                아이디 중복확인
                            </Button>
                    </Form>
                </InputContainer>

                {/* 비밀번호 */}
                <InputContainer >
                    <Form>
                        <Div>
                            <P>비밀번호</P>
                        </Div>

                        <Input password={true}
                            placeholder='비밀번호를 입력해주세요' 
                            name="password1" 
                            value={password1}
                            onChange={onInputChange} />

                        <Div>
                            <P>비밀번호 확인</P>
                        </Div>

                        <Input password={true}
                            placeholder='비밀번호를 확인해주세요'
                            name="password2" 
                            value={password2}
                            onChange={onInputChange} />
                    </Form>
                </InputContainer>

                <InputContainer >

                    <Form>

                        <Div>
                            <P>이메일</P>
                        </Div>

                        <Input password={false}
                            placeholder='이메일를 입력해주세요'
                            name="email" 
                            value={email}
                            onChange={onInputChange} />

                            <Button>
                                인증번호 전송
                            </Button>
                    </Form>
                </InputContainer>
                
                <InputContainer >

                    <Form>

                        <Div>
                            <P>인증번호</P>
                        </Div>

                        <Input password={false}
                            placeholder='인증번호를 입력해주세요'
                            name="validNumber" 
                            value={validNumber}
                            onChange={onInputChange} />

                            <Button>
                                인증번호 확인
                            </Button>
                    </Form>
                </InputContainer>
                {/* 닉네임 */}
                {/* <InputContainer >
                    <Form>
                        <Div>
                            <P>닉네임</P>
                        </Div>

                        <Input password={false} 
                            placeholder='닉네임을 확인해주세요'
                            name="nickname" 
                            value={nickname}
                            onChange={onInputChange} />
                            <Button>
                                닉네임 중복확인
                            </Button>
                    </Form>
                </InputContainer> */}

                {/* 거주지역 */}
                {/* <InputContainer >
                        <Div>
                            <P>거주지역</P>
                        </Div>

                        <Dropdown />


                </InputContainer> */}
                
                {/* <DropdownContainer>

                </DropdownContainer> */}
                
                <ButtonContainer>

                    <SubmitButton onClick={submit}>
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
width : 400px;

font-family: arial;
font-size: 24px;

margin: 0 auto;
padding : 10px;

border : 2px solid #e2e2e2;
position : relative;
top:5vh;
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
font-size : 5px;
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
const Button = styled.button`

//기본 크기가 input > button
height : 30px;

font-size : 10px;

background-color: #ffffff;
border : 2px solid #033bfa;
color : #033bfa;

font-family: tway, sans-serif, Arial;

&:hover {

    background-color: #033bfa;
    border : 2px solid #ffffff;
    color : #ffffff;

    cursor : pointer;
    }


`    
const DropdownContainer = styled.div`
margin: 0 auto;
text-align : center;
`

const ButtonContainer = styled.div`
margin: 0 auto;
text-align : center;
`

const SubmitButton = styled.button`
//기본 크기가 input > button
width : 200px;
height : 30px;

font-size : 12px;

margin : 10px;
padding : 5px;

background-color: #ffffff;
border : 2px solid #033bfa;
border-radius : 24px;
color : #033bfa;

font-family: tway, sans-serif, Arial;

&:hover {

    background-color: #033bfa;
    border : 2px solid #ffffff;
    color : #ffffff;

    cursor : pointer;
    }
`