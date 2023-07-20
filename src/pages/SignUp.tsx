import React,{useState , useEffect} from "react";
import Header from "../components/Header";
import useInput from "../hooks/useInput";
import FirstLogin from "../modal/FirstLogin";

import { styled ,css } from "styled-components";
import axios from "axios";


export default function SignUp(){

    //입력창 아이디 비번, 비번확인, 닉네임
    const [ { id, pwd1,password2,nickname,email,validNumber }, onInputChange, resetInput ] = useInput({
        id: '',
        pwd1: '',
        password2: '',
        email : '',
        vaildNumber:'',
    });

    //회원가입 post
    type signUpDataType = (
        id : string,
        pwd1 : string,
        email : string
     ) => void

    const SignUp : signUpDataType = (id,pwd1,email ) => {
        axios.post('http://bookstore24.shop/local/signup',
        {
            "loginId" : id,
            "loginPassword" : pwd1,
            "email" : email,
        }
        )
        .then(function (response) {
            console.log(response);
            resetInput();
        })
        .catch(function (error) {

            console.log(`error : ${error}`);
            if(error.response){
                console.log(error.response);
                alert(`${error.response.data}`);
            }
        });
        
        }
    
    //모달 펼치기
    //모달은 결국 로그인 완료되면 나오게 설정할거임

    const [viewModal , setViewModal] = useState(false);

    const openModal = (e : React.MouseEvent) => {
        
        viewModal === true ? setViewModal(false) : setViewModal(true)
    }

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

                            {/* <Button>
                                아이디 중복확인
                            </Button> */}
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
                            name="pwd1" 
                            value={pwd1}
                            onChange={onInputChange} />


                    </Form>
                </InputContainer>

                <InputContainer>
                <Div>
                            <P>비밀번호 확인</P>
                        </Div>

                        <Input password={true}
                            placeholder='비밀번호를 확인해주세요'
                            name="password2" 
                            value={password2}
                            onChange={onInputChange} />
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

                            {/* <Button>
                                인증번호 전송
                            </Button> */}
                    </Form>
                </InputContainer>
                
                {/* <InputContainer >

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
                </InputContainer> */}

                <ButtonContainer>

                    <SubmitButton onClick={()=>SignUp(id,pwd1,email)}>
                        제출하기
                    </SubmitButton>
                    
                </ButtonContainer>
            </JoinContainer>
            <button onClick={openModal}>
                Test
            </button>
            {viewModal && <FirstLogin viewModal={viewModal} setViewModal={setViewModal}/>}
        </Wrapper>  
    )
}


const Wrapper = styled.div`

`

const JoinContainer = styled.div`
width : 550px;
height : 550px;

font-family: arial;
font-size: 24px;

margin: 0 auto;
padding : 10px;

border : 2px solid #e2e2e2;

position : relative;
top:5vh;

display : flex;
flex-direction : column;
justify-content: space-around;
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
margin : 0px 0px 0px 0px;

color : #212221;

font-family: tway, sans-serif, Arial;
font-weight : bold;

`

const Form = styled.form`

`

const Input = styled.input <{password : boolean}>`
width : 300px;
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
height : 31px;
padding : 10px;
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


const ButtonContainer = styled.div`
margin: 0 auto;
text-align : center;
`

const SubmitButton = styled.button`
//기본 크기가 input > button
width : 200px;
height : 35px;

font-size : 12px;

margin : 10px;
padding : 5px;

background-color: #ffffff;
border : 2px solid #033bfa;
border-radius : 5px;
color : #033bfa;

font-family: tway, sans-serif, Arial;

&:hover {

    background-color: #033bfa;
    border : 2px solid #ffffff;
    color : #ffffff;

    cursor : pointer;
    }
`