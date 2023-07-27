import React,{useEffect} from "react";
import Header from "../components/Header";
import {StyledLink} from '../styles/link'
import useInput from '../hooks/useInput';
import naver from '../assets/imgs/Naver.jpg'
import kakao from '../assets/imgs/Kakao.jpg'
import google from '../assets/imgs/Google.png'
import { saveloginStatus } from "../action/login_status";

import { styled } from "styled-components";
import {useNavigate} from 'react-router-dom';
import { useSelector , useDispatch} from "react-redux";
import { RootState } from "../reducer/index";
import axios from "axios";

export default function Login() {

    const [ { id, password }, onInputChange, resetInput ] = useInput({
        id: '',
        password: '',
    });

    const submit = (e : React.MouseEvent) => {
        console.log(id);
        console.log(password);
        resetInput();
        navigate(-1);
    }

    
    const naverLoginLink : string = "https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=B3RGNtinEp3Va8fysxkN&redirect_uri=http://bookstore24.shop/auth/naver/callback&state='test'";
    const kakaoLoginLink : string = 'https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=e435f34295d28879dfabc32de2bd7546&redirect_uri=http://bookstore24.shop/auth/kakao/callback';
    const googleLoginLink : string = 'https://accounts.google.com/o/oauth2/v2/auth?client_id=766446517759-t82jo5h4vk9rmj30bld1d30su7sqdde1.apps.googleusercontent.com&redirect_uri=http://bookstore24.shop/auth/google/callback&response_type=code&scope=openid%20email%20profile';

    const getToken = ()=>{

    }
    const kakaoLogin = () =>{
        axios.get('https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=e435f34295d28879dfabc32de2bd7546&redirect_uri=http://bookstore24.shop/auth/kakao/callback',
        {
            
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
    // 로그인 상태.

    const loginStateData = useSelector(
        (state: RootState) => state.LoginStatusReducer.loginStatusData
    );

    const navigate = useNavigate();
    
    console.log(`login status : ${loginStateData}`);

    type loginTypes =(
        id : string,
        pwd : string,
    ) => void;

    const dispatch = useDispatch();

    const testLogin : loginTypes = (id,pwd ) => {
        if (id === 'www' && pwd === 'aaa'){
            console.log(`id : ${id} , pwd : ${pwd}`);
            dispatch(saveloginStatus(true));
            console.log(loginStateData);
            navigate(-1);
        }
    }

    const login : loginTypes = (id,pwd) => {
        axios.post('http://bookstore24.shop/login',
        {
            loginId : id,
            loginPassword : pwd,
        },
        )
        .then(function (response) {
            console.log(response);

            localStorage.setItem('token', response.headers.authorization);

            // 유저인증
            axios.get('http://bookstore24.shop/user',
            {
                headers : {
            
                authorization : response.headers.authorization
            }
            },
            
            )
            .then(function (response) {
                console.log(response);
            })
            
            .catch(function (error) {
                console.log(`error : ${error}`);
                if(error.response){
                    console.log(error.response);
                    alert(`${error.response.data}`);
                }
            });

        })
        
        .catch(function (error) {
            console.log(`error : ${error}`);
            if(error.response){
                console.log(error.response);
                alert(`${error.response.data}`);
            }
        });
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
                                <A href={naverLoginLink}>네이버 로그인하기</A>
                            </SnsFont>
                        </div>
                    </SnsButton>

                    <SnsButton> 
                        <div>
                            <Logo src={kakao} alt='x'/>
                            <SnsFont>
                                <A href={kakaoLoginLink}>카카오 로그인하기</A>
                            </SnsFont>
                        </div>
                    </SnsButton>

                    <SnsButton> 
                        <div>
                            <Logo src={google} alt='x'/>
                            <SnsFont>
                                <A href={googleLoginLink}>구글 로그인하기</A>
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
                    <SubmitButton onClick={()=>login(id,password)} >
                        로그인하기
                    </SubmitButton>
                </ButtonContainer>
                <ButtonContainer> 

                {/* 포스트 예시코드 */}
                <SubmitButton onClick={() => testLogin('www', 'aaa')}>
                    테스트 로그인
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
width : 600px;

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

const A =styled.a`
    text-decoration : none;
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

