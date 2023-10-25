import React, { useState, useEffect } from "react";
import Header from "../../components/common/Header";
import Jisoo from '../../assets/imgs/jisoo.jpg'
import SellingList from "../../components/profile/SellingList";
import SoldList from "../../components/profile/SoldList";
import ReviewList from "../../components/profile/ReviewList";
import { StyledButtonLink, StyledLink } from "../../styles/link";

import Google from "../../assets/imgs/Google.png";
import Naver from "../../assets/imgs/Naver.jpg";
import Kakao from "../../assets/imgs/Kakao.jpg";

import { styled } from "styled-components";
import axios from "axios";
import Login from "../Login";
import { useSelector } from "react-redux";
import { RootState } from "../../reducer";


interface PProps {
    value: number;
}

interface DivMarginProps {
    value: number; 
}

export default function Profile(){
    
    const loginStateData = useSelector(
        (state: RootState) => state.LoginStatusReducer.loginStatusData
    );
    
    const [auth,setAuth] = useState<boolean>();

    interface DataType{
        nickname : string;
        residence : string;
    }

    const [data,setData] = useState<DataType | null>(null)

    const list = ["서울", "인천", "경기도"];
    const value = ["seoul","incheon","gyeonggi"]
    
    const [loginType,setLoginType] = useState<string>('');



    const [residence , setResidence] = useState('');

    const token = sessionStorage.getItem('token')

    // 로그인 정보
    useEffect(()=>{
        axios.get(`http://bookstore24.shop/member/profile/my`,
            {
                headers : {
                    'Authorization' : token
                }
            }

            )
            .then(response =>{
                console.log(response.data);
                setData(response.data);
                
                let idx = value.indexOf(response.data.residence)
                setResidence(list[idx])

                console.log(residence)
                setAuth(true); 
                setLoginType(response.data.provider);
                })

            .catch(error => {
                console.log('Error : ', error);
            })
    },[])

    return(
        <Wrapper>
            
            {/* 로그인 실패시 & 비로그인 */}
            {!loginStateData && (
                <>
                <Login />
                </>
            )}

                
            {loginStateData && (
            <>
            <Header />
            <ProfileContainer>
                {/* 자신의 페이지인지 확인 & 프로필 수정버튼 */}
                {auth ? 
                <Div value={0}>
                    <P value={15}>
                        마이페이지
                    </P>

                        <StyledEditButtonLink to='/editprofile'>
                            프로필 수정
                        </StyledEditButtonLink>

                </Div>
                :
                <>
                <P value={15}>
                        {loginStateData ? '회원 정보' : ''}
                    </P>
                </>
                }
                {/* 사용자 정보 */}
                <ProfileInfoContainer>

                    <PictureContainer>
                        <Picture src={Jisoo} />
                    </PictureContainer>


                    <NickNameContainer>
                        <NickName>
                            {data?.nickname}
                            {loginType === Google && <img src={Google} alt ='x'/> }
                            {loginType === Naver && <img src={Naver} alt ='x'/> }
                            {loginType === Kakao && <img src={Kakao} alt ='x'/> }
                                                    
                        </NickName>

                    </NickNameContainer>

                    <ResidenceContainer>
                        <Residence>
                            {residence}
                        </Residence>
                    </ResidenceContainer>
                </ProfileInfoContainer>

                {/* 판매중목록 */}
                <Div value={0}>
                    <P value={15}>
                        판매중인 상품 목록 <PlusLink to='sell/on'> + </PlusLink>
                    </P>
                </Div>

                <Hr />

                <SellingList />
                
                {/* 판매완료목록 */}
                <Div value={15}>
                    <P value={15}>
                        판매완료한 상품 목록
                        <PlusLink to='sell/off'> + </PlusLink>

                    </P>
                </Div>

                <Hr />

                <SoldList />

                {/* 후기 목록 */}
                <Div value={15}>
                    <P value={15}>
                        작성한 도서 후기 목록
                        <PlusLink to='review'> + </PlusLink>
                    </P>
                </Div>

                <Hr />

                <ReviewList />
            </ProfileContainer>
            </>
            )}
        </Wrapper>

    )
}
const Wrapper = styled.div`

`
const ProfileContainer = styled.div`

width : 500px;

font-family: arial;
font-size: 30px;

margin: 0 auto;
padding : 10px;


font-family: tway, sans-serif, Arial;

position : relative;
top:5vh;
`

const Div = styled.div<DivMarginProps>`
/* 상 우 하 좌 */
margin : ${props => props.value}px 0px 0px 0px;
border : 0px;

width : 100%;
display : inline-block;

`
const Hr = styled.hr`
`

const P = styled.span<PProps>`
font-size: ${props => props.value}px;
text-align : left;

/* 상 오 하 왼 */
margin : 0px 250px 0px 50px;

color : #212221;

font-family: tway, sans-serif, Arial;
font-weight : bold;

`

const StyledEditButtonLink = styled(StyledButtonLink)`
    
    padding : 10px;

    border-radius : 8px;

    font-size : 15px;
    font-family: tway, sans-serif, Arial;

    font-weight : bold;
    background : #cecece;
    text-decoration: none;


`
const ProfileInfoContainer = styled.div`
margin:0px;
border : 0px;

width : 100%;
height : 100px;

display : inline-block;
`

const PictureContainer = styled.div`

`

const Picture = styled.img`

width : 70px;
height : 70px;
padding : 15px;

`

const NickNameContainer = styled.div`
position : absolute;
top : 50px;
left : 110px;

display : flex;
align-items : center;
img {
    width : 20px;
    height : 20px;
    margin : 0px 20px;
}
`

const NickName = styled.span`
font-size : 22px;
`

const ResidenceContainer = styled.div`
position : absolute;
top : 90px;
left : 110px;
`

const Residence = styled.span`
font-size : 22px;
`

const PlusLink = styled(StyledLink)`
color : #000;

`
