import React,{useEffect, useState} from "react";
import useInput from "../hooks/useInput";
import Header from "../components/Header";
import Test from '../assets/imgs/testbookcover.jpg'
import SearchBook from "../modal/SearchBook";

import { styled } from "styled-components";
import { useParams } from "react-router-dom";
import { getCookie } from "../components/Cookie";
import axios from "axios";
import useDecodedJWT from "../hooks/useDecodedJWT";


export default function BookCommunityEdit() {
    
    // add랑 비슷한로직.
    const [viewModal , setViewModal] = useState(false);

    const openModal = (e : React.MouseEvent) => {
        
        viewModal === true ? setViewModal(false) : setViewModal(true)
    }

    let token = getCookie('jwt');
    let dec = useDecodedJWT(token);

    useEffect(()=>{
        

        // Axios configuration for the POST request.
        const config = {
            headers: {
            Authorization: token,

            },
            params : {
                "loginId" : dec?.nickname,
                "title" : "t"
            }
        };
        
        axios
            .get(`http://61.79.215.100/review/post/edit`, config)
            .then((response) => {
            console.log(`Response : ${response}`);
            })
            .catch((error) => {
            console.log('Error:', error.response.data);
            });
        
    },[])

    const save =() => {
    
            const jwt = getCookie('jwt'); // Assuming you have a function to get the JWT token from cookies.
            
            // Data to be sent in the request body.
            const data = {
                "title" : "카카오 오어스가 읽은, 도서 리뷰입니다.",
                "bookTitle" : "김민교 자서전",
                "author" : "김민교",
                "publisher" : "교출판사",
                "coverImg" : "https://shopping-phinf.pstatic.net/main_3729966/37299668618.20230119064022.jpg",
                "isbn" : "123456789",
                "content" : "이 책을 읽고 주체적인 삶을 살았더니, 결국 제가 원하는 삶을 살게 되었습니다.수정테스트합니다. 데이터베이스에서 수정이 되었나요?",
                "score" : "4"
    
            };
            
            // Axios configuration for the POST request.
            const config = {
                headers: {
                Authorization: jwt,
                },
            };
            if (true ){
            axios
                .post(`http://61.79.215.100/review/post/edit/save`, data, config)
                .then((response) => {
                console.log(`Response : ${JSON.stringify(data)}`);
                })
                .catch((error) => {
                console.log('Error:', error.response.data);
                });
            
    }
}
    return(
        <Wrapper>
            <Header />
            
            <Container >
                <H3>
                    수정하기
                </H3>
                <Hr />

                <InnerContainer>

                <LeftContainer>
                    <Picture src={Test} alt='x'/>
                </LeftContainer>



                    <RightContainer>
                    <Title placeholder='게시글 제목'/>
                        

                    <BookTitle 
                        placeholder='책 제목을 입력해주세요'
                        onClick={openModal} />
                    {viewModal && <SearchBook viewModal={viewModal} setViewModal={setViewModal}/>}

                    <BookTitle 
                        placeholder='저자를 입력해주세요' />
                    
                    <BookTitle 
                        placeholder='출판사를 입력해주세요' />
                                            
                    <BookTitle 
                        placeholder='오픈채팅 대화방 링크를 입력해주세요' />

                    <Price
                        placeholder='희망 가격을 입력해주세요' />

                
                </RightContainer>

                </InnerContainer>

                <ContentContainer>
                    <input
                        className="content"
                        placeholder='게시글 내용을 입력하세요' />
                </ContentContainer>

                <ButtonContainer>


                    <CancelButton>
                        뒤로가기
                    </CancelButton>

                    <AddButton>
                        등록하기
                    </AddButton>
                </ButtonContainer>

                
            </Container>
        </Wrapper>
    )
}
const Wrapper = styled.div`

`
const Container = styled.div`
width :70vw;

font-family: arial;
font-size: 24px;

margin: 0 auto;
padding : 10px;

border : 2px solid #e2e2e2;

font-family: tway, sans-serif, Arial;

position : relative;
top:5vh;


//810px 이하면
@media (max-width : 810px){
    width: 567px;
}

`

const H3 = styled.h3`
margin : 5% 10%;
`

const Hr = styled.hr`
width : 80%;
`

const InnerContainer =styled.div`
display : flex;
justify-content: space-evenly;

`

const LeftContainer = styled.div`
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const RightContainer = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    input {
    width: 100%;
    height: 50px;
    margin-bottom: 20px;
    border: none;
    border-radius: 2px;
    background-color: #ffffff;
    padding-left: 10px;
    :focus {
        outline: none;
        border-bottom: 2px solid #4f4f4f;
    }
    
    }
    .content{
        
        height : 200px;
    }

`

const Picture = styled.img`
width : 250px;
height : 350px;
`

const Title = styled.input`

`

// 제목 , 저자, 출판사는 똑같은 컴포넌트로
const BookTitle = styled.input`

`

const Price = styled.input`

`

const ContentContainer = styled.div`
display: flex;
justify-content: center;
margin: 50px 50px;


input {
    width: 70%;
    height: 50px;
    margin-bottom: 20px;
    border: none;
    border-radius: 2px;
    background-color: #ffffff;
    padding-left: 10px;
    :focus {
        outline: none;
        border-bottom: 2px solid #4f4f4f;
    }
    
    }
    .content{
        
        height : 200px;
    }

`

const ButtonContainer = styled.div`
display: flex;
justify-content: center;
margin: 50px 50px;
`

const AddButton = styled.button`
width : 70px;
height : 30px;

font-size : 12px;

margin : 10px;
padding : 5px;

background-color: #033bfa;
    border : 2px solid #ffffff;
    color : #ffffff;

border-radius : 24px;


font-family: tway, sans-serif, Arial;

&:hover {

    background-color: #ffffff;
    border : 2px solid #033bfa;
    color : #033bfa;

    cursor : pointer;
    }
`
const CancelButton = styled.button`
width : 70px;
height : 30px;

font-size : 12px;

margin : 10px;
padding : 5px;

background-color: #ffffff;
border : 2px solid #033bfa;
border-radius : 24px;
color : #033bfa;

font-family: tway, sans-serif, Arial;

&:hover {

    background-color: #033bfa;
    border : 2px solid #ffffff;
    color : #ffffff;

    cursor : pointer;
    }
`