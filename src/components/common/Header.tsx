//내부
import React, { useState, useEffect } from "react";
import FirstLogin from "../../modal/FirstLogin";
import user from '../../assets/imgs/user.svg'

//외부
import styled from "styled-components";
import { StyledLink, StyledLinkBlack } from "../../styles/link";
import { Space } from "../../styles/Space";
import { useLocation, useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { saveloginStatus } from "../../action/login_status";

import { RootState } from "../../reducer/index";
import useDecodedJWT from "../../hooks/useDecodedJWT";
import ExpiredToken from "../../modal/ExpiredToken";
import HeaderLink from "../header/HeaderLink";
import useWindowSizeCustom from "../../hooks/useWindowSizeCuston";
import { CalculateTime } from "../../util/calculateTime";
import { Check } from "../header/Check";
import User from "../../modal/User";

export default function Header() {

    const navigate = useNavigate();

    const loginStateData = useSelector(
        (state: RootState) => state.LoginStatusReducer.loginStatusData
    );

    const dispatch = useDispatch();

    const logout = () => {
        dispatch(saveloginStatus(false));
        sessionStorage.clear()
        navigate('/')
    }

    //모달 펼치기
    const openModalData = useSelector(
        (state: RootState) => state.OpenModal.openModalData
    );

    let token = sessionStorage.getItem('token');

    let dec = useDecodedJWT(token);

    const initialTime = CalculateTime();
    const [time, setTime] = useState(initialTime);

    useEffect(() => {
        const interval = setInterval(() => {
            const newTime = CalculateTime();
            setTime(newTime);

            if (newTime.minutes <= 0 && newTime.seconds <= 0) {
                setExp(true);
                clearInterval(interval);
            }

        }, 1000); // Update every 1000 milliseconds (1 second)

        return () => {
            clearInterval(interval); // Clear the interval when the component unmounts
        };
    }, []);

    const [exp, setExp] = useState<boolean>(false);

    // 닉네임 거주지 체크
    const check = Check();

    // 반응형 헤더
    const [response, setResponse] = useState<boolean>(false);

    const windowSize = useWindowSizeCustom();

    useEffect(() => {
        if (windowSize.width < 1050) { setResponse(true) }
        else { setResponse(false) }
    }, [windowSize.width])


    const [view,setView]= useState<boolean>(false);
    const open = () => {setView(true)}
    const close = () => {setView(false)}
    return (

        <Positioner>

            {openModalData && loginStateData && dec?.nickname === null &&
                <FirstLogin />
            }
            {exp && <ExpiredToken exp={exp} />}
            <Space width={50} height={0} />
            <Logo>
                <StyledLink to='/'>
                    <Logo>BookStore24</Logo>
                </StyledLink>
            </Logo>

            <Review>
                <HeaderLink url='bookReview' label='커뮤니티' />

            </Review>

            <Store>
                <HeaderLink url='bookStore' label='스토어' />

            </Store>


            <Ranking>
                <HeaderLink url='bookranking' label='랭킹' />

            </Ranking>

            <Menu>

                {!loginStateData ? (
                    <>
                        <Login>
                            <StyledLinkBlack to="/login">로그인</StyledLinkBlack>
                        </Login>
                    </>
                ) : (
                    <>
                        {response ? (
                            <>
                                <div onClick={open}>
                                    <img src={user} alt='x' />
                                </div>
                                {view && <User onClose={close} logout={logout} time={time} nickname={check.nickname}/>}

                            </>
                        ) : (
                            <>
                                <Token>
                                    [로그인 유효시간 :
                                    <span>
                                        {time.minutes >= 0 ? time.minutes : 0} 분
                                    </span>
                                    {time.seconds >= 0 ? time.seconds : 0} 초]
                                </Token>
                                <Profile>
                                    <StyledLinkBlack to="/profile">
                                        <span>{check.nickname} - </span>
                                        프로필
                                    </StyledLinkBlack>
                                </Profile>
                                <Logout>
                                    <LogoutButton onClick={() => logout()}>로그아웃</LogoutButton>
                                </Logout>
                            </>
                        )}
                    </>
                )}

            </Menu>
            <Space width={50} height={0} />
        </Positioner>
    )
}

//헤더 위치
const Positioner = styled.div`
  position: relative;
  padding: 10px;
  display: flex;
  align-items : center;
  color: black;

  font-family : tway;
`;

//로고
const Logo = styled.div`
    display: inline-block;
    font-size: 30px;
    font-weight: bold;

    font-family : Cooper;
    color : #4dac27;
    
`

const Review = styled.div`
    display: inline-block;
    margin-left: 20px;

    padding : 5px; 
`

const Store = styled.div`
    display: inline-block;
    margin-left: 20px;

    padding : 5px; 
    

`

const Ranking = styled.div`
    display: inline-block;
    margin-left: 20px;

    padding : 5px; 


`
//로그인 / 로그아웃 상태표시
const Menu = styled.div`
    margin-left: auto;
    display: inline-block;

`

const Login = styled.div`
    display: inline-block;
    margin-left: 20px;
    padding : 5px; 

    cursor : pointer;

`

const Logout = styled.div`
    display: inline-block;
    margin-left: 20px;
    padding : 5px; 

    cursor : pointer;
`
const Token = styled.div`
    display: inline-block;
    margin-left: 20px;
    padding : 5px; 
    cursor : pointer;
`
const Profile = styled.div`
    display: inline-block;
    margin-left: 20px;
    padding : 5px; 
    cursor : pointer;

`


const LogoutButton = styled.button`
    border : 0px;
    background : transparent;
    cursor : pointer;
    font-size : 17px;
    font-family : tway;

`