import React,{useState,useEffect} from "react";
import Header from "../../components/common/Header";
import EditButton from "../../components/EditButton";
import Login from "./../Login";

import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled } from "styled-components";
import { useLocation,  useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../reducer/index";
import axios from "axios";
import useDecodedJWT from "../../hooks/useDecodedJWT";
import Toggle from "../../components/store/SetToggle";

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

                <LeftContainer>
                    <Picture src={data?.coverImg} alt='x'/>
                </LeftContainer>


                {/* 제목 등등 책 정보 */}
                <RightContainer>
                        
                    <div>
                        <p className="title">{data?.title}</p>
                    </div>


                    <div>
                    <p className="profile"> 닉네임 : {data?.nickname}</p>
                    </div>
                    
                    <div>
                        <p className="title">{data?.bookTitle}</p>
                        <p className="publisher">저자 : {data?.author.replace('^', ',')}</p>
                        <p className="publisher">출판사 : {data?.publisher}</p>
                        <p className='view'> <FontAwesomeIcon icon={faEye} />
                        {data?.view.toLocaleString('ko-KR')}</p>
                        <p className='price'>₩ {data?.price.toLocaleString('ko-KR')}</p>
                    </div>



                </RightContainer>

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
                <OpenChatContainer>
                    <OpenChatButton>
                        오픈 채팅으로 연락하기
                    </OpenChatButton>
                </OpenChatContainer>

            </Container>
            </>
            )}
        </Wrapper>
    )
}
const Wrapper = styled.div`

`

const Container = styled.div`
width : 50vw;

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
justify-content: space-around;

margin : 50px 0px;

`

const LeftContainer = styled.div`
    display: flex;
    flex-direction: column;

    width : 30%;
`

const RightContainer = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    div {
    width: 100%;
    height: auto;
    border: none;
    border-radius: 2px;
}
    
    .title{
        font-weight : 900;
    }

    .profile {
        font-size : 12px;
    }

    .publisher{
        font-size : 15px;
        font-bold : 200;
        color : #4b4d4c;
    }
    .price {
    }


`

const Picture = styled.img`
width : 250px;
height : 350px;
`



const ContentContainer = styled.div`
display: flex;
flex-direction: column;

width : 500px;

margin : 50px 50px;

span{
    font-weight : 1000;
    color : yellow;

}
div{
    font-size : 17px;
}

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

background-color: #ffee00;
border : 2px solid #000000;
color : #000000;

border-radius : 4px;

font-family: tway, sans-serif, Arial;

&:hover {

    background-color: #000000;
    border : 2px solid #ffee00;
    color : #ffee00;

    cursor : pointer;
    }
`

