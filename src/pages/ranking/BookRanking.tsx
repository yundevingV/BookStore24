import React,{useState,useEffect} from "react";
import Header from "../../components/common/Header";
import RankingContent from "../../components/ranking/ui/RankingContent";
import { Space } from "../../styles/Space";
import Login from "../Login";

import { styled } from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "../../reducer/index";
import axios from "axios";
import RankingTitle from "../../components/ranking/RankingTitle";
import Footer from "../../components/common/Footer";

interface bookInfoProps{
    id : string,
    title : string,
    author : string,
    publisher : string,
    avgScore : number,
    coverImg : string,
    isbn : string,
}

interface booksProps{
    books : Array<bookInfoProps>,
    
}

export default function BookRanking(){

        // 로그인
        const loginStateData = useSelector(
            (state: RootState) => state.LoginStatusReducer.loginStatusData
        );

        const token = sessionStorage.getItem('token');


        const [data,setData] = useState<booksProps | undefined>();

        useEffect(()=>{
            axios.get(`http://bookstore24.shop/book/ranking/score`,

                )
                .then(response =>{
                    setData(response.data);
    
                })
                .catch(error => {
                    console.log('Error : ', error);
                })
        },[])

    return(
        
        <Wrapper>

            

            <>
            
            <Header />

            <Container>

                <Space width={0} height={50} />

                <RankingTitle text={'평점 랭킹'} />

                <Space width={0} height={30} />

                <RankingContent books={data?.books} />


            </Container>
            </>
            <Footer />
        </Wrapper>
        
    )
}

const Wrapper = styled.div`

`
const Container = styled.div`
width : 1000px;

font-family: arial;
font-size: 24px;

margin: 0 auto;
padding : 10px;


font-family: tway, sans-serif, Arial;

position : relative;
top:5vh;


//810px 이하면
@media (max-width : 810px){
    width: 800px;
}

`