import React, { useEffect, useState } from "react"

import styled from "styled-components"

import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../../styles/fontAwesome.css'
import axios from "axios";
import truncate from "../../util/truncate";

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

export default function StoreVeiwPreview(){
    const [data,setData] = useState<booksProps | undefined>();


    useEffect(()=>{
        axios.get(`http://bookstore24.shop/book/ranking/view/sell`,

            )
            .then(response =>{
                setData(response.data);

            })
            .catch(error => {
                console.log('Error : ', error);
            })
    },[])
    const selectedData = data?.books.slice(0, 5);
    console.log(selectedData)

    return(
        <>
            <Container>

            <Title>
                가장 많이 조회된 판매 도서
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

                <BookTitle>
                {truncate(`${item.title}`,15)}
                </BookTitle>

                <BookAuthor>

                    <p>{item.author.replace('^', ',')} </p>
                    <p>{item.publisher}</p>

                </BookAuthor>

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
border-radius : 4px;

`


const Title = styled.h3`
padding : 0px 40px;

color : #ffffff;
`

const ItemContainer = styled.div`
display: flex;
justify-content : flex-start;

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
height : 100px;
padding : 20px;
`

const RContainer = styled.div`
display : flex;
flex-direction : column;
justify-content: space-between; /* or other values like flex-start, flex-end, center, etc. */
margin : 0px;
padding : 10px 0px;

`


const BookTitle = styled.span`
color : #ffffff;
`
const Rating = styled.span`
color : #ffffff;
`
const BookAuthor = styled.span`
color : #ffffff;

`