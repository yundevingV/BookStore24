//내부
import React from "react";

//외부
import styled from "styled-components";

interface LoginStatus {
    isLogin: boolean;
  }

export default function Header() {
    const isLogin = true;
    
    return (
        <Positioner>
            <Logo>
                📚                
            </Logo>
            
            <Menu>
                <LoginStatus isLogin={isLogin} />
            </Menu>
            
        </Positioner>
    )
}

//헤더 위치
const Positioner = styled.div`

    position : relative;
    
    padding : 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: black;

`

//로고
const Logo = styled.div`
    position : relative;
    left : 5vw;
`

//로그인 / 로그아웃 상태표시
const Menu = styled.div`
    position : relative;
    right : 5vw;
`

const LoginStatus: React.FC<LoginStatus> = ({ isLogin }) => {
    return <div>{isLogin ? ("login") : ("Logout")}</div>;

    };