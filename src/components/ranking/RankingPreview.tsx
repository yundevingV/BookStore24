import React, { useEffect, useState } from "react"
import truncate from "../../util/truncate";
import decimalDisplay from "../../util/decimalDisplay";

import styled from "styled-components"

import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../../styles/fontAwesome.css';
import axios from "axios";
import { StyledButtonLink } from "../../styles/link";
import { saveSearchOption } from "../../action/search_option";
import { useDispatch } from "react-redux";

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

export default function RankingPreview(){
    
    const [data,setData] = useState<booksProps | undefined>();
    const token = sessionStorage.getItem('token');
    const dispatch = useDispatch();

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
    const selectedData = data?.books.slice(0, 5);

    const searchType = (type : string) => {
        dispatch(saveSearchOption(type));
    }

    return(
        <>
            <Container>

                <Title>
                    평점 랭킹 🏆
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
                        <Rating>
                        <FontAwesomeIcon icon={faStar} className="star-icon"/>
                        {item.avgScore.toString().length >= 3 ? <span>{decimalDisplay(item.avgScore)}</span>
                        : item.avgScore
                        }
                        
                    </Rating>
                    
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
    
    margin : 0px;
    padding : 10px 0px;

    height : 80px;

`


const BookTitle = styled.span`
color : #ffffff;
`
const Rating = styled.span`
color : #ffffff;
`
const BookAuthor = styled.p`
color : #ffffff;

`