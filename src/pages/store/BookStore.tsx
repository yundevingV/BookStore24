import React,{useEffect,useState} from "react";
import useInput from "../../hooks/useInput";
import Header from "../../components/common/Header";
import Navbar from "../../components/Navbar";
import Item from "../../components/store/StoreItem";
import Login from "../Login";


import { styled } from "styled-components";
import { useLocation } from 'react-router-dom';
import { useSelector } from "react-redux";
import { RootState } from "../../reducer/index";

export default function BookStore() {

    // 현재 주소
    const location = useLocation();

    // 로그인
    const loginStateData = useSelector(
        (state: RootState) => state.LoginStatusReducer.loginStatusData
    );

    const [login,setLogin] = useState<boolean>(loginStateData);

    useEffect(() => {
        setLogin(loginStateData)
    }, [loginStateData]);

    return(
        <Wrapper>
            {/* 로그인 실패시 & 비로그인 */}
            {!login && (
                <>
                <Login />
                </>
            )}
            
            {/* 로그인 성공시 */}
            {login && (
            <>
            <Header />
            
            <Container >

            <Title>
                <PTitle>북 스토어</PTitle> 
                <PContent>개인간 자유로운 거래로 인생 책을 찾아보세요!</PContent>
            </Title>

            <Navbar text='책 판매하기' url={location.pathname}/>

                <Item />    
                
            </Container>
            </>
            )}
            
        </Wrapper>
    )
}
const Wrapper = styled.div`

`
const Container = styled.div`
width : 80vw;

font-family: arial;
font-size: 24px;

margin: 0 auto;
padding : 10px;

border : 2px solid #e2e2e2;

font-family: tway, sans-serif, Arial;

position : relative;
top:5vh;


//810px 이하면
@media (max-width : 810px){
    width: 567px;
}

`

const Title = styled.div`
width : 100%;

display: flex;
flex-direction : column;

text-align : center;

`
const PTitle = styled.p`
font-weight : 1000;
font-size : 30px;

`

const PContent = styled.p`
font-weight : 200;
font-size : 18px;
`