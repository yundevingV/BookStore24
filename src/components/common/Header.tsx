//내부
import React,{useState,useEffect} from "react";
import { saveloginStatus } from "../../action/login_status";
import FirstLogin from "../../modal/FirstLogin";
import { openModal } from "../../action/modal";

//외부
import styled from "styled-components";
import { CurrentLink, StyledLink, StyledLinkBlack } from "../../styles/link";
import { Space } from "../../styles/Space";
import {  useLocation, useNavigate } from "react-router";
import { useSelector,useDispatch } from "react-redux";
import { RootState } from "../../reducer/index";
import axios from "axios";
import useDecodedJWT from "../../hooks/useDecodedJWT";
import ExpiredToken from "../../modal/ExpiredToken";

export default function Header() {

    const navigate = useNavigate();
    const { pathname } = useLocation();

    const loginStateData = useSelector(
        (state: RootState) => state.LoginStatusReducer.loginStatusData
    );
        
    const dispatch = useDispatch();

    const logout = () =>{
        dispatch(saveloginStatus(false));
        sessionStorage.clear()
        navigate('/')
    }
    
    //모달 펼치기
    const openModalData = useSelector(
        (state: RootState) => state.OpenModal.openModalData
    );

    // In your React project
        
    let token = sessionStorage.getItem('token')
    
    let dec = useDecodedJWT(token);

    const calculateMinutes = () => {
        const date = new Date(dec?.exp * 1000);
        const curDate = new Date();
        const timeDifferenceInMilliseconds = date.getTime() - curDate.getTime();
        return Math.floor(timeDifferenceInMilliseconds / 1000 / 60);
      }
    
      const initialMinutes = calculateMinutes();
    
      const [minutes, setMinutes] = useState(initialMinutes);
    
      useEffect(() => {
        const interval = setInterval(() => {
          const newMinutes = calculateMinutes();
          setMinutes(newMinutes);
    
          if (newMinutes <= 4) {
            setExp(true);
          }
    
          console.log(newMinutes);
        }, 60000); // Update every 1000 milliseconds (1 second)
    
        return () => {
          clearInterval(interval); // Clear the interval when the component unmounts
        };
      }, []);

    const [exp, setExp] = useState<boolean>(false);

    useEffect(()=>{
        const auth = sessionStorage.getItem("token");

        if (auth) {
            dispatch(saveloginStatus(true));

            axios.get('http://bookstore24.shop/member/nicknameresidence/check'
            ,
            {

            headers : {
                'Authorization' : token
            }
            })
    
            .then(response => {})
            .catch(error => {
            console.log(`에러 사유 : ${error}`)
            dispatch(openModal(true));
            });
        } else {
            // 로그인이 안되있을때
        }
    },[dispatch,  minutes, token])
    return (
        
        <Positioner>
            
            {openModalData&&loginStateData&&dec?.nickname===null&&
            <FirstLogin />
            }
            {exp && <ExpiredToken exp={exp} />}
            <Space width={50} height={0} />
            <Logo>
                <StyledLink to='/'>
                📚                
                </StyledLink>
            </Logo>
            
            <Review>
                {pathname.includes('review') ? 
                <CurrentLink to='/bookreview'>
                커뮤니티
                </CurrentLink>
                : 
                <StyledLink to='/bookreview'>
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
                {!loginStateData ? 
                <>
                
                <Login>
                    <StyledLinkBlack to='/login'>
                    로그인
                    </StyledLinkBlack>  
                </Login>  
                </>
                :
                <>
                <Token>
                    {minutes >= 0 ? minutes : 0}분 
                </Token>
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
  position: relative;
  padding: 10px;
  display: flex;
  color: black;
`;

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