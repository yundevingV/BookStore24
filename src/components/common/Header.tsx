//내부
import React,{useState,useEffect} from "react";
import { saveloginStatus } from "../../action/login_status";
import FirstLogin from "../../modal/FirstLogin";
import { openModal } from "../../action/modal";
import logo from "../../assets/imgs/logo.svg";

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
import HeaderLink from "./HeaderLink";

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

    const calculateTime = () => {
        const date = new Date(dec?.exp * 1000);
        const curDate = new Date();
        const timeDifferenceInMilliseconds = date.getTime() - curDate.getTime();
        const totalSeconds = Math.floor(timeDifferenceInMilliseconds / 1000);
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        return { minutes, seconds };
      };
    
      const initialTime = calculateTime();
      const [time, setTime] = useState(initialTime);
    
      useEffect(() => {
        const interval = setInterval(() => {
          const newTime = calculateTime();
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
    const [nickname,setNickname] = useState<string>('');

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
    
            .then(response => {
                setNickname(response.data.nickname);
            })
            .catch(error => {
            console.log(`에러 사유 : ${error}`)
            dispatch(openModal(true));
            });
        } else {
            // 로그인이 안되있을때
        }
    },[])
    return (
        
        <Positioner>
            
            {openModalData&&loginStateData&&dec?.nickname===null&&
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

                    [로그인 유효시간 :
                    <span>

                    &nbsp;{time.minutes >= 0 ? time.minutes : 0}분&nbsp;
                    </span>
                    
                    {time.seconds >= 0 ? time.seconds : 0}초]

                </Token>
                <Profile>
                    <StyledLinkBlack to='/profile'>
                    <span> {nickname}  -   </span>

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