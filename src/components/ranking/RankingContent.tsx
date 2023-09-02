import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../../styles/fontAwesome.css'

import { styled } from "styled-components";

interface BookInfoProps {
    id: string;
    title: string;
    author: string;
    publisher: string;
    avgScore: string;
    coverImg: string;
    isbn: string;
}

interface BooksProps {
    books: BookInfoProps[] | undefined;
}

export default function RankingContent({ books }: BooksProps) {

    return (
        <Wrapper>
            <Container>
                {books?.map((book : BookInfoProps, index : number) => (
                    <>
                    <ItemContainer key={index}>
                        <Box>
                            <Ranking>
                            {index + 1}
                            </Ranking>
                            <ItemImg src={book.coverImg} alt={book.title} />
                            
                            <Content>
                                <ItemName>
                                    <span>{book.title}</span>
                                </ItemName>
                                <ItemPublisher>
                                    <span>{book.publisher} / {book.author}</span>
                                </ItemPublisher>
                                <ItemRating>
                                <FontAwesomeIcon icon={faStar} className="star-icon"/>

                                    <span>{book.avgScore} 점</span>
                                </ItemRating>
                            </Content>
                        </Box>
                    </ItemContainer>
                    </>
                ))}
            </Container>
        </Wrapper>
    );
}
const Wrapper = styled.div`

`

const Container = styled.div`
margin:0 auto;

border : 0px;

width : 750px;
height : auto;


display : flex;
flex-direction : column;
`

const ItemContainer = styled.div`



`

const Box = styled.div`
    display: flex;

    width : 700px;
    height : 150px;
    
    margin: 5px 0px;

    background-color : #f1f1f1;
    border-radius : 4px;
    
    &:hover {
        background-color : #ffffff;
        cursor : pointer;
    }

`

const Ranking = styled.div`
display : flex;
flex-direction : column;
justify-content : center;

padding : 0px 10px;
`

const Img =styled.div`

`
const ItemImg = styled.img`

padding : 7px;
height :135px;

`

const Content = styled.div`
    display: flex;
    flex-direction : column;
    justify-content : flex-start;
    padding : 20px;
`

const ItemName = styled.div`

span{
    font-size : 20px;
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

