import React,{useEffect,useState} from "react";
import Header from "../../components/common/Header";
import Navbar from "../../components/Navbar";
import Item from "../../components/store/StoreItem";
import Paging from "../../components/common/Paging";
import ViewToggle from "../../components/store/ViewToggle";

import { styled } from "styled-components";
import { useLocation } from 'react-router-dom';
import { useSelector } from "react-redux";
import { RootState } from "../../reducer/index";
import axios from "axios";
import { saveViewStatus } from "../../action/view_status";

export default function BookStore() {
    
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
        status : string
        price : number
    }

    // 현재 주소
    const { pathname } = useLocation();

    const [data,setData] = useState<DataType[] | undefined>();

    const [totalPages, setTotalPages] = useState<number | undefined>(undefined);

    const page = useSelector(
        (state: RootState) => state.PagingReducer.PagingData
    );

    const viewType = useSelector(
        (state : RootState) => state.ViewStatusReducer.viewStatusData
    )
            
    useEffect(() => {   
        axios
            .get(`http://bookstore24.shop/sell/post/${viewType}`, {
                params: {
                    page : page | 0,
                    size : 10,
                },
            })
            .then((response) => {
                setData(response.data.content);
                setTotalPages(response.data.totalPages);
                sessionStorage.setItem('url',pathname);
                console.log(response)
            })
            .catch((error) => {
                console.log('에러:', error.response);
            });
    }, [page,viewType,pathname]);

    useEffect(()=>{
        saveViewStatus('list');
    },[])

    return(
        <Wrapper>
            <>
            <Header />
            
            <Container >

            <Title>
                <PTitle>북 스토어</PTitle> 
                <PContent>개인간 자유로운 거래로 인생 책을 찾아보세요!</PContent>
            </Title>
            
            <Navbar text='책 판매하기' url={pathname}/>
            <ViewToggle />
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
    width: 567px;
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