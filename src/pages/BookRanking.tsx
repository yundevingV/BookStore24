import React,{useState,useEffect} from "react";
import Header from "../components/Header";
import RankingContent from "../components/RankingContent";
import RankingTitle from "../components/RankingTitle";
import { Space } from "../styles/Space";
import Login from "./Login";

import { styled } from "styled-components";
import { useLocation } from 'react-router-dom';
import { useSelector } from "react-redux";
import { RootState } from "../reducer/index";

export default function BookRanking(){
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
            
            <Container>

                <Space width={0} height={50} />

                <RankingTitle text={'조회수 랭킹'} />
                
                <Space width={0} height={30} />

                <RankingContent type={'view'} />
                
                <Space width={0} height={50} />

                <RankingTitle text={'평점 랭킹'} />

                <Space width={0} height={30} />

                <RankingContent type={'rate'} />

            </Container>
            </>
            )}
        </Wrapper>
        
    )
}

const Wrapper = styled.div`

`
const Container = styled.div`
width : 1000px;

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
    width: 800px;
}

`