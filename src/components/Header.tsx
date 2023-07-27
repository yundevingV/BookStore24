//내부
import React,{useState,useEffect} from "react";
import { saveloginStatus } from "../action/login_status";

//외부
import styled from "styled-components";
import { CurrentLink, StyledLink, StyledLinkBlack } from "../styles/link";
import { Space } from "../styles/Space";
import { useLocation } from "react-router";
import { useSelector,useDispatch } from "react-redux";
import { RootState } from "../reducer/index";

export default function Header() {

    const { pathname } = useLocation();

    const loginStateData = useSelector(
        (state: RootState) => state.LoginStatusReducer.loginStatusData
    );

    const [login,setLogin] = useState<boolean>(loginStateData);

    useEffect(() => {
        setLogin(loginStateData)
    }, [loginStateData]);

    const dispatch = useDispatch();

    const logout = () =>{
        dispatch(saveloginStatus(false));

        console.log(loginStateData)
    }
    
    return (
        <Positioner>
            <Space width={50} height={0} />
            <Logo>
                <StyledLink to='/'>
                📚                
                </StyledLink>
            </Logo>
            
            <Review>
                {pathname.includes('community') ? 
                <CurrentLink to='/bookcommunity'>
                커뮤니티
                </CurrentLink>
                : 
                <StyledLink to='/bookcommunity'>
                    커뮤니티
                </StyledLink> 

                }
                
            </Review>

            <Store>
            {pathname.includes('store') ? 
                <CurrentLink to='/bookstore'>
                스토어
                </CurrentLink>
                : 
                <StyledLink to='/bookstore'>

                스토어
                </StyledLink>

                }

            </Store>


            <Ranking>
            {pathname.includes('ranking') ? 
                <CurrentLink to='/bookranking'>
                랭킹
                </CurrentLink>
                : 
                <StyledLink to='/bookranking'>
                랭킹
                </StyledLink>

                }
            </Ranking>

            <Menu>
                {!login ? 
                <>
                <Join>
                    <StyledLinkBlack to='/signup'>
                    회원가입
                    </StyledLinkBlack>
                </Join>
                <Login>
                    <StyledLinkBlack to='/login'>
                    로그인
                    </StyledLinkBlack>  
                </Login>  
                </>
                :
                <>
                <Profile>
                    <StyledLinkBlack to='/profile'>
                    나의 프로필
                    </StyledLinkBlack>
                </Profile>
                <Logout>
                        <LogoutButton onClick={()=>logout()}>
                            로그아웃
                        </LogoutButton>
                </Logout>
                </>
            }
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

const Profile = styled.div`
    display: inline-block;
    margin-left: 20px;
    padding : 5px; 
    cursor : pointer;

`

const Join = styled.div`
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
`