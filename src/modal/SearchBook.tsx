import React ,{useState} from "react"
import useInput from "../hooks/useInput";

import styled from "styled-components";
import axios from "axios";
import { getCookie } from "../components/Cookie";

type ViewProps = {
    viewModal : boolean;
    setViewModal: React.Dispatch<React.SetStateAction<boolean>>;

}

export default function SearchBook({viewModal , setViewModal} : ViewProps){
    console.log(viewModal);

    const closeModal = (e : React.MouseEvent) => {
        setViewModal(false);
    }

    const [ { searchWord}, onInputChange, resetInput ] = useInput({
    searchWord : '',
});

    interface DataType{
        "title": string,
        "author": string,
        "publisher": string,
    }
    
    const [data,setData] = useState<DataType[] | null>(null)

    const search = (e: React.MouseEvent) => {
        e.preventDefault(); // Prevent the default form submission behavior.

        const jwt = getCookie('jwt'); // Assuming you have a function to get the JWT token from cookies.
        
        // Axios configuration for the POST request.
        const config = {
            headers: {
            Authorization: jwt,

            },
        };
        
        axios
            .get(`http://bookstore24.shop/book/information/search`,{
                params:{
                    query: searchWord,
                },
                headers: {
                    Authorization: jwt,
                }
            })
            
            .then((response) => {
            console.log(`${response.data}}`);
            setData(response.data);
            })
            .catch((error) => {
            console.log('Error:', error.response);
            });
        
        resetInput();
        };

        const save = () => {

        }
    
    return(
        <ModalBackground>
        <Container>
            
            <Font>
            책 제목을 입력해주세요
            </Font>
            
            <SearchResult>

            <SearchContainer>
                <div >
                <input placeholder='검색어를 입력해주세요.'
                name="searchWord" 
                value={searchWord}
                onChange={onInputChange} />
                </div>

                <div>
                <SearchButton onClick={search}>
                    검색
                </SearchButton>
                </div>
            </SearchContainer>

            

            <>
            {data?.map(item=>
                <SearchBox onClick={() => save()}>
                    <div className="bookname">{item.title}</div>
                    <span className="authors">{item.author} </span>
                    <span className="authors">/</span>
                    <span className="publisher">{item.publisher}</span>
                </SearchBox>
                )}
            </>
                
                
            </SearchResult>

            <Button onClick={closeModal}> X </Button>

        </Container>
        </ModalBackground>
    )
}
const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;

`;
const Container = styled.div`
/* 모달창 크기 */
  width: 500px;
  height: 600px;

  /* 최상단 위치 */
  z-index: 999;
  
  /* 중앙 배치 */
  /* top, bottom, left, right 는 브라우저 기준으로 작동한다. */
  /* translate는 본인의 크기 기준으로 작동한다. */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  /* 모달창 디자인 */
  background-color: #e2e2e2;
  border: 1px solid black;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`

const Font = styled.p`
text-align: center;
font-family: tway, sans-serif, Arial;

`

const SearchContainer = styled.div`
display : flex;
justify-content: space-evenly;

input {
    width: 250px;
    height: 25px;
}


`
const SearchButton = styled.button`
width: 50px;
height: 25px;

font-size : 12px;

padding : 5px;

background-color: #ffffff;
border : 1px solid #033bfa;
border-radius : 2px;
color : #033bfa;

font-family: tway, sans-serif, Arial;

&:hover {

    background-color: #033bfa;
    color : #ffffff;

    cursor : pointer;
    }
`

const Button = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;

  border : 0px;
  background-color: #e2e2e2;

  cursor : pointer;
`

const SearchResult = styled.div`
width: 500px;
height : 500px;

display: flex;
flex-direction: column;

overflow : auto;

`

const SearchBox = styled.div`

    width: 400px;
    border: 1px solid #aaaaaa;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 5px;
    margin-left : 40px;
    color: #303030;


    .bookImg {
        display: none;
    }
    .bookname {
        font-size: 16.5px;
        font-weight: 600;
        margin-bottom: 4px;
    }
    .authors {
        font-size: 13px;
        margin-right: 7px;
    }
    .publisher {
        font-size: 13px;
        margin-left: 7px;
    }
`