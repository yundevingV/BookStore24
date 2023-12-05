import React, { useEffect, useState } from "react"
import truncate from "../../util/truncate";

import styled from "styled-components"
import { StyledButtonLink } from "../../styles/link";
import { saveSearchOption } from "../../action/search_option";
import { useDispatch } from "react-redux";

import axios from "axios";

interface bookInfoProps{
    id : string,
    title : string,
    author : string,
    publisher : string,
    avgScore : string,
    coverImg : string,
    isbn : string,
}

interface booksProps{
    books : Array<bookInfoProps>,
}

export default function ReviewVeiwPreview(){

    const [data,setData] = useState<booksProps | undefined>();
    const dispatch = useDispatch();

    useEffect(()=>{
        axios.get(`http://bookstore24.shop/book/ranking/view/review`)
            .then(response =>{
                setData(response.data);

            })
            .catch(error => {
                console.log('Error : ', error);
            })
    },[])


    const searchType = (type : string) => {
        dispatch(saveSearchOption(type));
    }
    
    const selectedData = data?.books.slice(0, 5);

    console.log(selectedData)

    return(
        <>
            <Container>

            <Title>
            커뮤니티에서 핫한 도서 탑 5 🔥
            </Title>

            {selectedData?.map((item : bookInfoProps , index : number) =>
            <ItemContainer>
            <Ranking>
                    {index + 1} 

                </Ranking>
            <LContainer>
                <Img src={item.coverImg} alt='x' />

            </LContainer>

            <RContainer>
            <StyledButtonLink to={`/search/bookreview/result?search_query=${item.title}`} onClick={() => searchType('booktitle')}>

                <BookTitle>
                <p>{truncate(`${item.title}`,15)}</p>
                </BookTitle>
            </StyledButtonLink>

                <StyledButtonLink to={`/search/bookreview/result?search_query=${item.author}`} onClick={() => searchType('author')}>

                    <BookAuthor>{item.author.replace('^', ',')} </BookAuthor>
                </StyledButtonLink>
                    <BookAuthor>{item.publisher}</BookAuthor>

                
                
            </RContainer>

            </ItemContainer>
            )}


        </Container>
    </> 
)

}

const Container = styled.div`

background : #272727;

width : 400px;

display : flex;
justify-content : center;
flex-direction : column;
margin : 50px auto;
padding : 10px;
border-radius : 8px;

`


const Title = styled.h3`
padding : 0px 40px;

color : #ffffff;
`

const ItemContainer = styled.div`
display: flex;
justify-content : flex-start;
margin : 10px 0px;

`

const LContainer = styled.div`

display : flex;
justify-content : center;
`

const Ranking = styled.div`
color : #ffffff;
font-size : 25px;
font-weight : 1000;

display : flex;
flex-direction : column;
justify-content : center;
`


const Img = styled.img`
width : 100px;
height : 140px;
padding : 30px;
`

const RContainer = styled.div`
    display : flex;
    flex-direction : column;
    justify-content : space-between;
    margin : 10px;
    padding : 15px 0px;


`


const BookTitle = styled.span`

color : #ffffff;
`

const BookAuthor = styled.span`
color : #ffffff;
margin : 15px 0px;
`