import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled } from "styled-components";
import truncate from "../../util/truncate";
import { PLink } from "../../styles/link";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";

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

const Alert = styled.div`
    display : flex;
    justify-content : center;

    padding : 50px;


`

export default function ListContent({ data }: DataTypeList) {

    const [url,setUrl] = useState<String>('');

    const location = useLocation();
    console.log(location)

    useEffect(()=>{
        if(location.pathname.includes('review')){setUrl('bookreview')}
        else {setUrl('bookstore')}
    },[])

  if (!data || data.length === 0) {
    return <Alert>해당하는 도서 목록이 없습니다 !</Alert>;
  }
  return (
    <>
      {data.map((book) => (
        <div key={book.id}>
        <PLink to={`/${url}/detail/?${book.loginId}&${book.title}`}>
          <ItemContainer>
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
                  {book.score ? (
                    <span>
                      <FontAwesomeIcon icon={faStar} className="star-icon" />
                      {book.score}
                    </span>
                  ) : null}
                  {book.price ? <span> {book.price} ₩</span> : null}
                </ItemRating>
              </Content>
            </Box>
          </ItemContainer>
          </PLink>
        </div>
      ))}
    </>
  );
}

const ItemContainer = styled.div`
  /* 상 우 하 좌 */
  margin: 0 15px 15px;
  height: 120px;
`;

const Box = styled.div`
  display: flex;
  width: 100%;
  height: 120px;
  background-color: #cacaca;
  border-radius: 8px;
  &:hover {
    background-color: #e2e2e2;
    border-radius: 8px;
    cursor: pointer;
  }
`;

const ItemImg = styled.img`
  padding: 7px;
  height: 100px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0px 10px;
`;

const ItemName = styled.div`
  span {
    font-size: 20px;
  }
`;

const BookTitle = styled.div`
  span {
    font-size: 16px;
  }
`;

const ItemPublisher = styled.div`
  span {
    font-size: 15px;
    font-weight: 200;
  }
`;

const ItemRating = styled.div`
  span {
    font-size: 15px;
  }
}`;
