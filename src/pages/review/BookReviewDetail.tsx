import React,{useState,useEffect} from "react";
import Header from "../../components/common/Header";
import EditButton from "../../components/EditButton";
import Login from "./../Login";
import convertTime from "../../util/convertTime";

import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled } from "styled-components";
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import { RootState } from "../../reducer/index";
import axios from "axios";
import useDecodedJWT from "../../hooks/useDecodedJWT";
import Comment from "../../components/comment/Comment";
import CommentList from "../../components/comment/CommentList";


export default function BookReviewDetail() {
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
    const { pathname } = useLocation();

    const token = sessionStorage.getItem('token')
    let dec = useDecodedJWT(token);

    interface ReviewComment {
        id : string;
        reviewCommentId: string;
        content: string;
        createdDate: string;
        nickname: string;
        loginId: string;
        reviewId: string;
        title : string;
    }

    
    interface DataType{
        "id" : string,
        "title": string,
        "bookTitle": string,
        "author": string,
        "publisher": string,
        "coverImg": string,
        "isbn": number,
        "content": string,
        "view": number,
        "score": number,
        "createdDate": string,
        "nickname": string,
        "loginId" : string,
        "reviewComments" : ReviewComment[],
    }

    const [data,setData] = useState<DataType | null>(null)

    useEffect(() => {
        axios
            .get(`http://bookstore24.shop/review/post/detail`, {
                params: {
                "loginId": loginId,
                "title": title
                },
                headers: {
                Authorization: token,
                }
            })
            .then((response) => {
                setData(response.data);

            })
            .catch((error) => {
                console.log('Error:', error.response);

                if (!token) {
                    navigate("./login");
                    sessionStorage.setItem('url',pathname);
                } else{
                    navigate('/bookreview')
                }
            });
        }, []);

    return(
        <Wrapper>
            {/* 로그인 실패시 & 비로그인 */}
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
                {dec?.loginId === data?.loginId ? <EditButton id={data?.id} loginId={data?.loginId} title={data?.title} reviewComment={data?.reviewComments} url='review' /> : <></>}

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
                    <Info>[리뷰 도서 정보]</Info>
                    <p className="bookTitle">제목 : {data?.bookTitle}</p>
                    <SP>저자 : {data?.author.replace('^', ',')} </SP>
                    <SP>출판사 : {data?.publisher}</SP>

                </Right>

                </InfoContainer>

                <RatingContainer>

                <span className='rating'> 
                후기 평점 : <FontAwesomeIcon icon={faStar} className="star-icon-detail" /> {data?.score}</span>
                </RatingContainer>

                </InnerContainer>


                <hr />


                <ContentContainer>
                    <p>
                        후기
                    </p>

                    <div>
                        {data?.content}
                    </div>
                </ContentContainer>

                <CommentContainer>
                    
                    <Comment id={data?.id} loginId={data?.loginId} title={data?.title} number={data?.reviewComments.length}/>

                    <CommentList title={data?.title.trim()} reviewComments={data?.reviewComments} />

                </CommentContainer>
            </Container>
            </>
            )}
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
    font-size : 16px;
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
    margin : 0px 10px;
    align-items: center;

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

const Picture = styled.img`
width : 250px;
height : 350px;

margin : 0 auto;
`
const RatingContainer = styled.div`
margin : 30px auto 0px;
span{
    font-size : 25px;
}
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
