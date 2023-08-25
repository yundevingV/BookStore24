import React,{useEffect, useRef, useState} from "react";
import useInput from "../../hooks/useInput";
import Header from "../../components/common/Header";
import Test from '../../assets/imgs/testbookcover.jpg'
import SearchBook from "../../modal/SearchBook";

import { styled } from "styled-components";
import { getCookie } from "../../components/common/Cookie";
import axios from "axios";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { RootState } from "../../reducer/index";
import StarRating from "../../components/review/Star";
import Cancel from "../../modal/Cancel";
import { saveCancelStatus } from "../../action/cancel_status";
import { useDispatch } from "react-redux";
import { saveBookInformation } from "../../action/book_information";

export default function BookCommunityAdd() {

    const [ { title, talkUrl, price, content }, onInputChange, resetInput ] = useInput({
        title: '',
        talkUrl : '',
        price: '',
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
            "title" : title,
            "bookTitle" : bookInformation?.title,
            "author" : bookInformation?.author,
            "publisher" : bookInformation?.publisher,
            "isbn" : bookInformation?.isbn,
            "talkUrl" : talkUrl,
            "coverImg" : bookInformation?.image,
            "price" : price,
            "content" : content,

        };
        
        // Axios configuration for the POST request.
        const config = {
            headers: {
            Authorization: token,
            },
        };
        if (true){
        axios
            .post(`http://bookstore24.shop/sell/post/save`, data, config)
            .then((response) => {
            console.log(`Response : ${(JSON.stringify(data))}`);
            navigate(-1);
            })
            .catch((error) => {
            console.log('Error:', error.response.data);
            });
        
        };}

        // 제목 저자 출판사
        const bookInformationData = useSelector(
            (state: RootState) => state.BookInformationReducer.bookInformationData
        );
        
        const cancelStatus = useSelector(
            (state : RootState) => state.cancelStatusReducer.cancelStatusData
        )

        const dispatch = useDispatch();
        
        useEffect(()=>{
            dispatch(saveBookInformation([]))
        },[])

        const didMountRef = useRef(false);

        useEffect(() => {
            if (didMountRef.current) {
                setBookinformation(bookInformationData);
            } else {
                didMountRef.current = true;
            }
        }, [cancelStatus, bookInformationData]);

        const cancel = () => {
            dispatch(saveCancelStatus(true))
            console.log(cancelStatus)
        }

    return(
        <Wrapper>
            <Header />
            
            <Container>
                <H3>
                    판매하기
                </H3>
                <Hr />

                <InnerContainer>

                <LeftContainer>
                {bookInformation ? <Picture src={bookInformation?.image} alt='x' />
                    : <Picture src={Test} alt='x' />    }
                </LeftContainer>

                    <RightContainer>
                    <Title 
                        placeholder='게시글 제목'
                        name="title"
                        value={title}
                        onChange={onInputChange} 
                        />
                        

                    <BookTitle placeholder='책 제목을 입력해주세요'
                        value={bookInformation?.title}
                        readOnly
                        onClick={openModal} />

                    {viewModal && <SearchBook viewModal={viewModal} setViewModal={setViewModal}/>}
                    {cancelStatus && <Cancel />}
                    <BookTitle 
                        placeholder='저자를 입력해주세요'
                        value={bookInformation?.author?.replace('^', ',')}
                        readOnly
                        />
                    
                    <BookTitle 
                        placeholder='출판사를 입력해주세요' 
                        value={bookInformation?.publisher}
                        readOnly 
                        />
                        
                    <BookTitle 
                        placeholder='오픈채팅 대화방 링크를 입력해주세요' 
                        name="talkUrl"
                        value={talkUrl}
                        onChange={onInputChange}/>

                    <BookTitle

                        placeholder='희망 가격을 입력해주세요' 
                        name="price"
                        value={price}
                        onChange={onInputChange}
                        />                
                </RightContainer>

                </InnerContainer>

                <ContentContainer>
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
height : 40px;

font-size : 12px;

margin : 10px;
padding : 5px;

background-color: #033bfa;
border : 2px solid #ffffff;
color : #ffffff;

border-radius : 8px;

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
height : 40px;

font-size : 12px;

margin : 10px;
padding : 5px;

background-color: #ffffff;
border : 2px solid #033bfa;
border-radius : 8px;
color : #033bfa;

font-family: tway, sans-serif, Arial;

&:hover {

    background-color: #033bfa;
    border : 2px solid #ffffff;
    color : #ffffff;

    cursor : pointer;
    }
`