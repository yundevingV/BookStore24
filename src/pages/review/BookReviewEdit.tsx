import React,{useEffect, useState} from "react";
import Header from "../../components/common/Header";

import { styled } from "styled-components";
import { useLocation, useNavigate} from "react-router-dom";
import axios from "axios";
import StarRating from "../../components/review/Star";
import { useSelector } from "react-redux";
import { RootState } from "../../reducer";
import EditDetail from "../../modal/EditDetail";
import Swal from "sweetalert2";
import Footer from "../../components/common/Footer";


export default function BookCommunityEdit() {
    
    // 현재 주소
    const location = useLocation();

    const navigate = useNavigate();

    const params = decodeURIComponent(location.search.replace('?','')).split('&');

    const loginId = params[0];
    const title = params[1];
    
    const token = sessionStorage.getItem('token');

    interface DataType{
        "title": string,
        "bookTitle": string,
        "author": string,
        "publisher": string,
        "coverImg": string,
        "isbn": number,
        "content": string,
        "score": number,
        "createdDate": string,
        "nickname": string,
    }
    const [data,setData] = useState<DataType | null>(null);

    useEffect(() => {        
        axios
            .get(`http://bookstore24.shop/review/post/edit`,{
                
                params:{
                    "loginId": loginId,
                    "title": title
                },
                headers: {
                    Authorization: token,
                
                }
            })
            
            .then((response) => {
                console.log(`Response : ${response}`);
                setData(response.data);
                setContent(response.data.content);

            })
            .catch((error) => {
                console.log('Error:', error.response);
                navigate(-1);
            });
    
    },[]);

    const [content,setContent] = useState<string>('');

    const onInputChange = (event : any) => {
        // '내용'을 변경 핸들링
        setContent(event.target.value);
    };

    const score = useSelector(
        (state : RootState) => state.BookratingReducer.bookRatingData
    )
    
    const save = (e: React.MouseEvent) => {
        e.preventDefault();
    
        const newData = {
            "title" : data?.title.trim(),            
            "isbn" : data?.isbn,
            "bookTitle" : data?.bookTitle,
            "author" : data?.author,
            "publisher" : data?.publisher,
            "coverImg" : data?.coverImg,
            "content" : content,
            "score" : score,
        };
    
        const config = {
            headers: {
                Authorization: token,
            },
        };
    
        if (true) {
            axios
                .post(`http://bookstore24.shop/review/post/edit/save`, newData, config)
                .then((response) => {
                    console.log(`Response : ${JSON.stringify(newData)}`);
                    Swal.fire({ html : '수정이 완료 되었습니다 !'})

                    navigate(-1);
                })
                .catch((error) => {
                    console.log('Error:', error.response.data);
                });
        }
    };
    
    const [view,setView] = useState<boolean>(false);

    const open = () => {
        setView(true);
      };
    
      const close = () => {
        setView(false);
      };

    
    return(
        <Wrapper>
            <Header />
            
            <Container >
                <H3>
                    수정하기
                </H3>
                <Hr />

                {data ? 
                <>
                <InnerContainer>

                <LeftContainer>
                    <Picture src={data?.coverImg} alt='x'/>
                </LeftContainer>

                    <RightContainer>
                    게시글 제목 
                    <Title
                        placeholder='게시글 제목'
                        value={data?.title}
                    />
                        
                    책 제목
                    <input 
                        placeholder='책 제목을 입력해주세요'
                        value={data?.bookTitle}

                        />
                    저자
                    <input 
                        placeholder='저자를 입력해주세요' 
                        value={data?.author}

                        />
                    출판사
                    <input 
                        placeholder='출판사를 입력해주세요' 
                        value={data?.publisher}
                        />

                    <StarRating initialRating={data?.score} />

                </RightContainer>

                </InnerContainer>

                    <ContentContainer>
                        내용
                        <input
                            className="content"
                            name="content"
                            placeholder='게시글 내용을 입력하세요' 
                            defaultValue={content}
                            onChange={onInputChange}

                            />
                </ContentContainer>
                
                {view && <EditDetail onClose={close} /> }

                <ButtonContainer>


                    <CancelButton>
                        뒤로가기
                    </CancelButton>

                    <AddButton onClick={save}>
                        등록하기
                    </AddButton>
                </ButtonContainer>
                </>
                :
                <> </>
                }

                
            </Container>
            <Footer />
        </Wrapper>
    )
}
const Wrapper = styled.div`

`
const Container = styled.div`
width :100vw;

font-family: arial;
font-size: 20px;

margin: 0 auto;
padding : 10px;


font-family: tway, sans-serif, Arial;

position : relative;
top:5vh;


//810px 이하면
@media (max-width : 810px){
    width: 567px;
}

`

const H3 = styled.h3`
margin : 50px 10%;
`

const Hr = styled.hr`
width : 80vw;
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
    margin : 10px 0px;
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

const Score = styled.input`



`

const ContentContainer = styled.div`
display: flex;

flex-direction: column;
justify-content: center;

margin: 50px 10%;

input {
    height: 50px;
    margin: 10px 0px;
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
width : 100px;
height : 40px;

font-size : 14px;

margin : 10px;
padding : 5px;

background-color: #567dfc;
border : 2px solid #ffffff;
color : #ffffff;

border-radius : 8px;

font-family: tway, sans-serif, Arial;

&:hover {
    cursor : pointer;
    }
`

const CancelButton = styled.button`
width : 100px;
height : 40px;

font-size : 14px;

margin : 10px;
padding : 5px;

background-color: #ffffff;
border : 2px solid #567dfc;
border-radius : 8px;
color : #567dfc;

font-family: tway, sans-serif, Arial;

&:hover {

    cursor : pointer;
    }
`