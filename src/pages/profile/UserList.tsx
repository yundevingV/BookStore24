import React,{useState,useEffect} from "react";
import Header from "../../components/common/Header";
import { Space } from "../../styles/Space";

import { styled } from "styled-components";

import RankingTitle from "../../components/ranking/RankingTitle";
import ListContent from "../../components/profile/ListContent";
import { useLocation } from "react-router";
import Paging from "../../components/common/Paging";
import useUserData from "../../hooks/useUserData";
import Footer from "../../components/common/Footer";

export default function ProfileReviewList(){

        const token = sessionStorage.getItem('token');

        const location = useLocation();

        const [word,setWord] = useState<string>('');
        const [text,setText] = useState<string>('');
        
        const { data, totalPages } = useUserData(token, word);

        useEffect(() => {
            let path = location.pathname.split('/');
            let newWord = '';
            
                if (path.length === 4) {
                newWord = path[2].concat('/').concat(path[3]);
                } else {
                newWord = path[2];
                }
                setWord(newWord);
            }, [location.pathname]);
            
            useEffect(() => {
                if (word.includes('on')) {
                setText('판매중인 도서 목록');
                } else if (word.includes('off')) {
                setText('판매완료한 도서 목록');
                } else {
                setText('작성한 도서 후기 목록');
                }
            }, [word]);
            


    return(
        
        <Wrapper>

            <>
            
            <Header />

            <Container>

                <Space width={0} height={50} />

                <RankingTitle text={text} />

                <Space width={0} height={30} />
                
                <ListContent data={data} />

                <PagingContainer>
                    <Paging totalPages={totalPages} />
                </PagingContainer>

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
const PagingContainer = styled.div`
width : 100%;

display: flex;
flex-direction : column;

text-align : center;
`