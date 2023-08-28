import React,{useEffect, useState} from "react";
import useInput from "../../hooks/useInput";
import Header from "../../components/common/Header";
import Navbar from "../../components/Navbar";
import Item from "../../components/review/ReviewItem";
import Paging from "../../components/common/Paging";

import { styled } from "styled-components";
import { useLocation } from 'react-router-dom';
import { useSelector } from "react-redux";
import { RootState } from "../../reducer/index";

import Login from "../Login";
import axios from "axios";


export default function BookStoreCommunity() {


    interface DataType{
        author:string
        bookTitle:string
        coverImg:string
        createdDate:string
        id:number
        nickname:string
        publisher:string
        score:number
        title:string
        view:number
        loginId : string
    }

    const [data,setData] = useState<DataType[] | undefined>();

    // 현재 주소

    const { pathname } = useLocation();

    //로그인
    const loginStateData = useSelector(
        (state: RootState) => state.LoginStatusReducer.loginStatusData
    );
    
    const [totalPages, setTotalPages] = useState<number | undefined>(undefined);

    const page = useSelector(
        (state: RootState) => state.PagingReducer.PagingData
    );
    
    useEffect(() => {        
        axios
            .get(`http://bookstore24.shop/review/post/list`, {
                params: {
                    page : page | 0,
                    size : 10,
                },
            })
            .then((response) => {
                setData(response.data.content);
                setTotalPages(response.data.totalPages);
                sessionStorage.setItem('url',pathname);

            })
            .catch((error) => {
                console.log('에러:', error.response);
            });
    }, [page]);


    return(

        <Wrapper>
        
            
            <>
            <Header />
            
            <Container >
            <Title>
                <PTitle>북 커뮤니티</PTitle> 
                <PContent>책의 다양한 의견을 나눠 보세요!</PContent>
            </Title>

            <Navbar text='후기 작성하기' url={pathname} />

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