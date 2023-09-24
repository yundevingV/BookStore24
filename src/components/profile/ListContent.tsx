import { faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { styled } from "styled-components"
import truncate from "../../util/truncate"

interface DataType {
    "id": number,
    "title": string,
    "score": string,
    "price": number,
    "coverImg": string,
    "bookTitle": string,
    "author": string,
    "publisher": string,
    "nickname": string,
    "loginId": string,
    "createdDate": string,
    "view": number
}

interface DataTypeList {
    data: DataType[] | undefined;
}

export default function ListContent({ data }: DataTypeList) {
    return (
        <>
            {data?.map((book) => (
                <>
                    <ItemContainer >
                        <Box>

                            <ItemImg src={book.coverImg} alt={book.title} />

                            <Content>
                                <ItemName>
                                    <span>{book.title}</span>
                                </ItemName>
                                <BookTitle>
                                    <span>{truncate(book.bookTitle, 27)}</span>
                                </BookTitle>
                                <ItemPublisher>
                                    <span> {book.author.replace('^', ',')} / {book.publisher} </span>
                                </ItemPublisher>
                                <ItemRating>

                                    {book.score ? 
                                        <span>
                                        <FontAwesomeIcon icon={faStar} className="star-icon" />
                                        {book.score}
                                        </span>
                                        : <></>}
                                    {book.price ?
                                        <span> {book.price} ₩</span>
                                        : <></>
                                    }

                                </ItemRating>
                            </Content>
                        </Box>
                    </ItemContainer>
                </>
            ))}
        </>
    )
}

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
const BookTitle = styled.div`
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