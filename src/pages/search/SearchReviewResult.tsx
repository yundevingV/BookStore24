import React,{useEffect, useState} from "react";
import Header from "../../components/common/Header";
import Navbar from "../../components/Navbar";
import Item from "../../components/review/ReviewItem";
import Paging from "../../components/common/Paging";

import { styled } from "styled-components";
import { useLocation } from 'react-router-dom';
import { useSelector } from "react-redux";
import { RootState } from "../../reducer/index";

import axios from "axios";


export default function SearchReviewResult() {

    interface DataType{
        "id": number,
        "title": string,
        "score": number,
        "coverImg": string,
        "bookTitle": string,
        "author": string,
        "publisher": string,
        "nickname": string,
        "loginId": string,
        "createdDate": string,
        "view": number,
    }

    const [data,setData] = useState<DataType[] | undefined>();
    
    const [totalPages, setTotalPages] = useState<number | undefined>(undefined);

    const page = useSelector(
        (state: RootState) => state.PagingReducer.PagingData
    );
    
    // 검색
    const searchOpion = useSelector(
        (state : RootState) => state.SearchOptionReducer.searchOptionData
    );

    const searchWord = useSelector(
        (state : RootState) => state.SearchWordReducer.searchWordData
    );
    
    useEffect(() => {        
        axios
            .get(`http://bookstore24.shop/review/post/list/search/by/${searchOpion}`, {
                params: {
                    keyword : searchWord,
                    page : page ,
                    size : 10,
                },
            })
            .then((response) => {
                setData(response.data.content);
                setTotalPages(response.data.totalPages);

                console.log(response)

            })
            .catch((error) => {
                console.log('에러:', error.response);
            });
    }, [page]);

    console.log(searchOpion)
    console.log(searchWord)
    return(

        <Wrapper>
   
            <>
            <Header />
            
            <Container >
            <Title>
                <PTitle>검색 결과 입니다.</PTitle> 
                <p>검색 결과가 정확하지 않으시면 , 을 빼고 검색해주세요</p>
            </Title>
            {/* <Navbar /> */}

            <Item items={data} />
            
            <PagingContainer>
                <Paging totalPages={totalPages} />
            </PagingContainer>

            </Container>
            </>
        </Wrapper>
    )
}
const Wrapper = styled.div`

`
const Container = styled.div`
width : 80vw;

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
    width: 560px;
}

`

const Title = styled.div`
width : 100%;

display: flex;
flex-direction : column;

text-align : center;

`
const PTitle = styled.p`
font-weight : 1000;
font-size : 30px;

`

const PContent = styled.p`
font-weight : 200;
font-size : 18px;
`

const PagingContainer = styled.div`
width : 100%;

display: flex;
flex-direction : column;

text-align : center;
`