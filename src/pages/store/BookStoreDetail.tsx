import React,{useState,useEffect} from "react";
import Header from "../../components/common/Header";
import EditButton from "../../components/EditButton";
import Login from "./../Login";
import convertTime from "../../util/convertTime";

import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled } from "styled-components";
import { useLocation,  useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../reducer/index";
import axios from "axios";
import useDecodedJWT from "../../hooks/useDecodedJWT";
import Toggle from "../../components/store/SetToggle";
import OpenChat from "../../modal/OpenChat";
import Footer from "../../components/common/Footer";

export default function BookStoreDetail() {

    // 현재 주소
    const location = useLocation();

    const params = decodeURIComponent(location.search.replace('?','')).split('&');

    const loginId = params[0];
    
    const title = params[1];

    // 로그인
    const loginStateData = useSelector(
        (state: RootState) => state.LoginStatusReducer.loginStatusData
    );

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { pathname } = useLocation();

    const token = sessionStorage.getItem('token')
    let dec = useDecodedJWT(token);

    interface DataType{
        "id" : string,
        "title": string,
        "content": string,
        "view" : number,
        "createdDate": string,
        "nickname": string,
        "loginId" : string,
        "price": number,
        "talkUrl": string,
        "status" : string,
        "bookTitle": string,
        "author": string,
        "publisher": string,
        "coverImg": string,
        "isbn": string,
    }

    const [data,setData] = useState<DataType | null>(null)

    useEffect(() => {        
        axios
            .get(`http://bookstore24.shop/sell/post/detail`,{
                
                params:{
                    "loginId": loginId,
                    "title": title
                },
                headers: {
                    Authorization: token,
                
                }
            })
            
            .then((response) => {
                console.log(`Response : ${JSON.stringify(response.data)}`);
                setData(response.data)
            })
            .catch((error) => {
                console.log('Error:', error.response);

            if (!token) {
                navigate("./login");
                sessionStorage.setItem('url',pathname)
            }else{
                navigate('/bookstore')
            }
        })
    },[]);
    const [viewCheck,setCheck] = useState<boolean>(false);

    const check = () => {
        setCheck(true);
    } 
    return(
        <Wrapper>
            {/* b   로그인 실패시 & 비로그인 */}
            {!loginStateData && (
                <>
                <Login />
                </>
            )}
            
            {/* 로그인 성공시 */}
            {loginStateData && (
            <>
            <Header />
            
            <Container >
                {/* 게시글을 작성한 사용자 와 로그인한 사용자가 같을때 */}
                {dec?.loginId === data?.loginId ? 
                <>
                    <EditButton id={data?.id} loginId={data?.loginId} title={data?.title} url='sell' />
                    <Toggle status={data?.status} loginId={data?.loginId} title={data?.title}/>
                </>
                : 
                <></>}
                
                

                <InnerContainer>
                <TitleContainer>
                    <p className="title">{data?.title}</p>


                </TitleContainer>

                <StatContainer>
                    <Profile> 
                    <FontAwesomeIcon icon={faCircleUser}  /><span> {data?.nickname}</span>
                    <Date>{convertTime(data?.createdDate)}</Date>
                    </Profile>

                    
                    <span className='view'> <FontAwesomeIcon icon={faEye} />
                        {data?.view?.toLocaleString('ko-KR')}</span>
                </StatContainer>

                <InfoContainer>

                <Left>
                    <Picture src={data?.coverImg} alt='x'/>
                </Left>

                <Right>
                    <Info>[판매 도서 정보]</Info>
                    <p className="bookTitle">제목 : {data?.bookTitle}</p>
                    <SP>저자 : {data?.author.replace('^', ',')} </SP>
                    <SP>출판사 : {data?.publisher}</SP>

                </Right>

                </InfoContainer>

                <RatingContainer>

                <span> 
                판매 가격 : ₩ {data?.price.toLocaleString('ko-KR')}
                </span>
                </RatingContainer>

                </InnerContainer>

                <hr />
                <ContentContainer>
                    <p>
                        상품 설명
                    </p>

                    <div>
                        {data?.content}
                    </div>
                </ContentContainer>


                {/* 오픈채팅 */}
                {viewCheck && <OpenChat url={data?.talkUrl} />}
                <OpenChatContainer>
                    <OpenChatButton onClick={() => check()}>
                        오픈 채팅으로 연락하기
                    </OpenChatButton>
                </OpenChatContainer>

            </Container>
            </>
            )}
            <Footer />
        </Wrapper>
    )
}
const Wrapper = styled.div`

`

const Container = styled.div`
width : 70vw;

font-family: arial;
font-size: 24px;

margin: 0 auto;
padding : 10px;


font-family: tway, sans-serif, Arial;

position : relative;
top:5vh;


//810px 이하면
@media (max-width : 1080px){
    width: 590px;
}

`

const InnerContainer =styled.div`
display : flex;
flex-direction : column;
justify-content: space-around;

margin : 50px 0px;

span{
    font-size : 17px;
}
`
const Profile = styled.div`
    display: flex;

    align-items : center;
`
const InfoContainer = styled.div`
display : flex;

`

const Left = styled.div`
display : flex;

width : 30vw;

`

const Right =styled.div`

display : flex;
justify-content : start;
flex-direction : column;

padding : 0px 30px;
width : 30vw;

`
const Info = styled.div`
margin : 0px auto 30px;
p{text-align : center;}

`
const SP = styled.p`
font-size : 18px;
`
const RatingContainer = styled.div`
margin : 30px auto 0px;
span{
    font-size : 25px;
}
`
const TitleContainer = styled.div`

`

const StatContainer = styled.div`
display : flex;
align-items : center;
margin : 20px 0px;

span {
    font-size : 17px;
    
    font-weight : 300;
    color : #4e4a4a;
    margin : 10px;
}
`

const Picture = styled.img`
width : 250px;
height : 350px;

margin : 0 auto;
`

const Date = styled.span`
margin : 20px;
font-size : 17px;
`
const ContentContainer = styled.div`
display: flex;
flex-direction: column;

margin : 50px 0px;

span{
    font-weight : 1000;
    color : yellow;
}
div{
    font-size : 17px;
}

`


const CommentContainer = styled.div`
display: flex;
flex-direction : column;
justify-content: space-between;

margin-bottom: 50px;

`


const OpenChatContainer = styled.div`
display: flex;
justify-content: center;


margin-bottom: 50px;

p{
    font-size : 1px;
}
`

const OpenChatButton = styled.button`
width : 150px;
height : 50px;

font-size : 12px;

margin : 10px;
padding : 5px;

background-color: #faec2b;
border : 0px solid #000000;
color : #000000;

border-radius : 8px;

font-family: tway, sans-serif, Arial;

&:hover {

    cursor : pointer;
    }
`

