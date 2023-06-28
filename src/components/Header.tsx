//내부
import React from "react";

//외부
import styled from "styled-components";
import { StyledLink } from "../styles/link";
import { Space } from "../styles/Space";

interface LoginStatus {
    isLogin: boolean;
  }

export default function Header() {
    const isLogin = true;
    
    return (
        <Positioner>
            <Space width={50} height={0} />
            <Logo>
                <StyledLink to='/'>
                📚                
                </StyledLink>
            </Logo>
            
            <Review>
                <StyledLink to='/bookcommunity'>
                    커뮤니티
                </StyledLink>
            </Review>

            <Store>
                <StyledLink to='/bookstore'>

                스토어
                </StyledLink>
            </Store>


            <Ranking>
                <StyledLink to='/bookranking'>

                랭킹
                </StyledLink>
            </Ranking>

            <Menu>
                <LoginStatus isLogin={isLogin} />
            </Menu>
            <Space width={50} height={0} />
            
        </Positioner>
    )
}

//헤더 위치
const Positioner = styled.div`

    position : relative;
    
    padding : 10px;
    display: flex;

    color: black;

    border-bottom : 1px solid#7d7874;


`

//로고
const Logo = styled.div`
    display: inline-block;
    font-size: 20px;
    font-weight: bold;
    
`

const Review = styled.div`
    display: inline-block;
    margin-left: 20px;

    padding : 5px; 
    border : 0.3px solid #033bfa;
`

const Store = styled.div`
    display: inline-block;
    margin-left: 20px;

    padding : 5px; 
    
    border : 0.3px solid #033bfa;

`

const Ranking = styled.div`
    display: inline-block;
    margin-left: 20px;

    padding : 5px; 

    border : 0.3px solid #033bfa;

`
//로그인 / 로그아웃 상태표시
const Menu = styled.div`
    margin-left: auto;

`

const LoginStatus: React.FC<LoginStatus> = ({ isLogin }) => {
    return <div>{isLogin ? ("login") : ("Logout")}</div>;

    };