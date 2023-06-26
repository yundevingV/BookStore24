import React from "react";
import Header from "../components/Header";
import Jisoo from '../assets/imgs/jisoo.jpg'
import SellingList from "../components/SellingList";
import SoldList from "../components/SoldList";
import ReviewList from "../components/ReviewList";


import { styled } from "styled-components";
interface PProps {
    value: number;
}
interface DivMaringProps {
    value: number; 
  } 
export default function Profile(){

    return(
        <Wrapper>
            <Header />
            <ProfileContainer>

                {/* 자신의 페이지인지 확인 & 프로필 수정버튼 */}
                <Div value={0}>
                    <P value={15}>
                        마이페이지
                    </P>

                    <ModifyButton>
                        프로필 수정
                    </ModifyButton>

                </Div>

                {/* 사용자 정보 */}
                <ProfileInfoContainer>

                    <PictureContainer>
                        <Picture src={Jisoo} />
                    </PictureContainer>

                    <NickNameContainer>
                        <NickName>
                            이름 님
                        </NickName>
                    </NickNameContainer>

                    <ResidenceContainer>
                        <Residence>
                            서울
                        </Residence>
                    </ResidenceContainer>
                </ProfileInfoContainer>

                {/* 판매중목록 */}
                <Div value={0}>
                    <P value={15}>
                        판매중인 상품 목록
                    </P>
                </Div>

                <Hr />

                <SellingList />
                
                {/* 판매완료목록 */}
                <Div value={15}>
                    <P value={15}>
                        판매완료한 상품 목록

                    </P>
                </Div>

                <Hr />

                <SoldList />

                {/* 후기 목록 */}
                <Div value={15}>
                    <P value={15}>
                        작성한 도서 후기 목록
                    </P>
                </Div>

                <Hr />

                <ReviewList />
            </ProfileContainer>    
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

border : 2px solid #e2e2e2;

font-family: tway, sans-serif, Arial;

position : relative;
top:5vh;
`

const Div = styled.div<DivMaringProps>`
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


const ModifyButton = styled.button`
font-size : 15px;

/* 상 오 하 왼 */
margin : 0px 0px 0px 0px;

color : #212221;

font-family: tway, sans-serif, Arial;
font-weight : bold;

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



const Button = styled.button`

//기본 크기가 input > button
width : 355px;
height : 30px;

font-size : 15px;
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