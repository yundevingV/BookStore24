import React,{useState,useEffect} from "react";
import useInput from "../hooks/useInput";
import Header from "../components/Header";
import Test from '../assets/imgs/testbookcover.jpg'
import EditButton from "../components/EditButton";
import Login from "./Login";


import { styled } from "styled-components";
import { useLocation } from 'react-router-dom';

export default function BookStoreDetail() {
    // 현재 주소
    const location = useLocation();

    // 로그인
    const [login,setLogin] = useState<boolean>(false);

    useEffect(() => {
        setLogin(false)
        console.log('로그인 실패')
    }, [location]);
    return(
        <Wrapper>
            {/* 로그인 실패시 & 비로그인 */}
            {!login && (
                <>
                <Login />
                </>
            )}
            
            {/* 로그인 성공시 */}
            {login && (
            <>
            <Header />
            
            <Container >
                {/* 게시글을 작성한 사용자 와 로그인한 사용자가 같을때 */}
                <EditButton />

                <InnerContainer>

                <LeftContainer>
                    <Picture src={Test} alt='x'/>
                </LeftContainer>


                {/* 제목 등등 책 정보 */}
                <RightContainer>
                        
                    <div>
                        <p className="title">판매 제목</p>
                    </div>


                    <div>
                    <p className="profile">프로필</p>
                    </div>
                    
                    <div>
                        <p className="title">책 이름</p>
                        <p className="publisher">저자 : 나동빈</p>
                        <p className="publisher">출판사 : 한빛</p>
                        <p className='price'>₩ 41,000</p>
                    </div>



                </RightContainer>

                </InnerContainer>

                <hr />
                <ContentContainer>
                    <p>
                        상품 설명
                    </p>

                    <div>
                        이책을 공부하게 되면이책을 공부하게 되면이책을 공부하게 되면이책을 공부하게 되면
                    </div>
                </ContentContainer>


                {/* 오픈채팅 */}
                <ButtonContainer>
                
                        
                    <OpenChatButton>
                        오픈 채팅으로 연락하기
                    </OpenChatButton>
                </ButtonContainer>
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

border : 2px solid #e2e2e2;

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

const ButtonContainer = styled.div`
display: flex;
justify-content: center;
margin-bottom: 70px;

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
