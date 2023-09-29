import React, { useEffect, useState } from "react";
import Test from '../../assets/imgs/testbookcover.jpg'

import { styled } from "styled-components";
import axios from "axios";
import truncate from "../../util/truncate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { PLink } from "../../styles/link";

export default function ReviewList(){

    interface DataType{
        "id": number,
        "title": string,
        "score": string,
        "coverImg": string,
        "bookTitle": string,
        "author": string,
        "publisher": string,
        "nickname": string,
        "loginId": string,
        "createdDate": string,
        "view": number
    }

    const [data,setData] = useState<DataType[] | undefined>();
    const token = sessionStorage.getItem('token');
    
    useEffect(() => {        
        axios
            .get(`https://bookstore24.shop/member/profile/review/list`, {
                params: {
                    page : 0,
                    size : 3,
                },
                
                headers : {
                    'Authorization' : token
                }
                
            })
            .then((response) => {
                setData(response.data.content)

            })
            .catch((error) => {
            });
    }, []);


    return(
        <>
        <Wrapper>
        <ReviewListContainer>
        
        {data?.map((book )=>(
                    <>
                    <Space />
                    <PLink to={`/bookreview/detail/?${book.loginId}&${book.title}`}>

                    <ItemContainer >
                        <Box>
                            <Left>
                            <ItemImg src={book.coverImg} alt={book.title} />
                            </Left>

                            <Right>
                            <Content>
                                <ItemName>
                                    <span>{book.title}</span>
                                </ItemName>
                                <BookTitle>
                                    <span>{truncate(book.bookTitle,27)}</span>
                                </BookTitle>
                                <ItemPublisher>
                                    <span> {book.author.replace('^', ',')} / {book.publisher} </span>
                                </ItemPublisher>
                                <ItemRating>

                                    <span>      
                                        <FontAwesomeIcon icon={faStar} className="star-icon" />
                                        {book.score}
                                    </span>
                                </ItemRating>
                            </Content>
                            </Right>
                        </Box>
                    </ItemContainer>
                    </PLink>

                    </>
                    ))}

                </ReviewListContainer>
                </Wrapper>
                </>
    )
}

const Wrapper = styled.div`
`

const Space = styled.div`
height : 15px;
margin : 0px;
padding : 0px;
`

const ReviewListContainer = styled.div`
margin:0px;

border : 0px;

width : 100%;
height : fit-content;


`
const ItemContainer = styled.div`

/* 상 우 하 좌 */
margin : 0 15px 15px;
height : 120px;

`

const Box = styled.div`
    display: flex;

    width : 100%;
    height : 120px;
    

    background-color : #f1f1f1;
    border-radius : 8px;
    
    &:hover {
        background-color : #ffffff;
        border-radius : 8px;

        cursor : pointer;
    }

`
const Left = styled.div`
`
const Right = styled.div`
`

const ItemImg = styled.img`

padding : 7px;
height :80px;

`

const Content = styled.div`
    display: flex;
    flex-direction : column;
    justify-content : flex-start;

    padding : 0px 10px;
`

const ItemName = styled.div`

span{
    font-size : 20px;
}

`
const BookTitle =styled.div`
span{
    font-size: 16px;
}
`

const ItemPublisher = styled.div`

span {
    font-size : 15px;
    font-weight : 200;
}
`

const ItemRating = styled.div`

span{
    font-size : 15px;
}


`