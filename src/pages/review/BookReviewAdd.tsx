import React,{useEffect, useRef, useState} from "react";
import Login from "../Login";
import useInput from "../../hooks/useInput";
import Header from "../../components/common/Header";
import init from '../../assets/imgs/initBook.png'
import SearchBook from "../../modal/SearchBook";
import StarRating from "../../components/review/Star";

import { saveCancelStatus } from "../../action/cancel_status";
import { saveBookInformation } from "../../action/book_information";

import Cancel from "../../modal/Cancel";

import { styled } from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../reducer/index";
import { saveBookRating } from "../../action/book_rating";
import Swal from "sweetalert2";

export default function BookReviewAdd() {

    const loginStateData =  useSelector(
        (state: RootState) => state.LoginStatusReducer.loginStatusData
    )

    const [ { title,content }, onInputChange, resetInput ] = useInput({
        id: '',
        content: '',
    });

    const [viewModal , setViewModal] = useState(false);

    const openModal = (e : React.MouseEvent) => {
        
        viewModal === true ? setViewModal(false) : setViewModal(true)
    }

    const navigate = useNavigate();

    interface bookInfoType{
        title : string | undefined,
        author : string | undefined,
        publisher : string | undefined,
        isbn : number | undefined,
        image : string | undefined,
    }

    const [bookInformation, setBookinformation] = useState<bookInfoType>();

    const add = (e: React.MouseEvent) => {
        e.preventDefault(); // Prevent the default form submission behavior.

        const token = sessionStorage.getItem('token')
        
        // Data to be sent in the request body.
        const data = {
            "title" : title.trim(),
            "isbn" : bookInformation?.isbn,
            "bookTitle" : bookInformation?.title,
            "author" : bookInformation?.author,
            "publisher" : bookInformation?.publisher,
            "coverImg" : bookInformation?.image,
            "content" : content,
            "score" : bookRatingData,
        };
        
        // Axios configuration for the POST request.
        const config = {
            headers: {
            Authorization: token,
            },
        };
        if (bookRatingData >= 1 && title.trim() && content.trim() && bookInformation?.title
            ){
        axios
            .post(`http://bookstore24.shop/review/post/save`, data, config)
            .then((response) => {
            console.log(`Response : ${(JSON.stringify(data))}`);
            navigate(-1);
            })
            .catch((error) => {
            console.log('Error:', error.response);
            if (error.response.status === 409) {Swal.fire({ html : error.response.data})}
            });
        }
        else {
            Swal.fire({ html : '빈칸을 확인해주세요 !'});
        }
        }

        // 제목 저자 출판사
        const bookInformationData = useSelector(
            (state: RootState) => state.BookInformationReducer.bookInformationData
        );
        

        useEffect(()=>{
            dispatch(saveBookInformation([]));
            dispatch(saveBookRating(0));
        },[])

        // 별점
        const bookRatingData = useSelector(
            (state : RootState) => state.BookratingReducer.bookRatingData
        )

        const cancelStatus = useSelector(
            (state : RootState) => state.CancelStatusReducer.cancelStatusData
        )

        // 처음 렌더링될때만 값 불러오기.
        const didMountRef = useRef(false);

        useEffect(() => {
            if (didMountRef.current) {
                setBookinformation(bookInformationData);
            } else {
                didMountRef.current = true;
            }
        }, [cancelStatus, bookInformationData]);
        
        const dispatch = useDispatch();

        const cancel = () => {
            dispatch(saveCancelStatus(true))
            console.log(cancelStatus)
        }

        console.log(bookInformation)

    return(
        <Wrapper>
            {!loginStateData && (
                <>
                <Login />
                </>
            )}
            

            {loginStateData && (
            <>
            <Header />
            
            <Container >
                <H3>
                    글 작성하기
                </H3>
                <Hr />

                <InnerContainer>

                <LeftContainer>
                    {bookInformation?.image ? <Picture src={bookInformation?.image} alt='x' />
                    : <Picture src={init} alt='x' />    
                }
                    
                </LeftContainer>

                    <RightContainer>
                    게시글 제목
                    <Title 
                        placeholder='게시글 제목'
                        name="title"
                        value={title}
                        onChange={onInputChange} 
                        />
                        
                    책 제목
                    <BookTitle placeholder='책 제목을 입력해주세요'
                        value={bookInformation?.title}
                        readOnly
                        onClick={openModal} />

                    {viewModal && <SearchBook viewModal={viewModal} setViewModal={setViewModal}/>}
                    {cancelStatus && <Cancel />}

                    저자
                    <BookTitle 
                        placeholder='저자를 입력해주세요'
                        value={bookInformation?.author?.replace('^', ',')}
                        readOnly
                        />
                    출판사
                    <BookTitle 
                        placeholder='출판사를 입력해주세요' 
                        value={bookInformation?.publisher}
                        readOnly 
                        />
                        
                    <StarRating initialRating={0} />
                
                </RightContainer>

                </InnerContainer>

                

                <ContentContainer>
                    내용
                    <input
                        className="content"
                        placeholder='게시글 내용을 입력하세요' 
                        name="content"
                        value={content}
                        onChange={onInputChange} 
                        
                        />
                </ContentContainer>

                <ButtonContainer>


                    <CancelButton onClick={cancel}>
                        취소하기
                    </CancelButton>

                    <AddButton onClick={add}>
                        등록하기
                    </AddButton>
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