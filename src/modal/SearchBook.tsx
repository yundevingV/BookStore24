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

// 검색 구현
    type Books = {name : string , publisher : string};

    const [searchResultList , setSearchResultList] = useState<Books[]>([]);

    let books= [
        { name: 'scas', publisher: 'aaa'},
        { name: 'sss', publisher: 'bd'}
    ];
    
    const submit = (e : React.MouseEvent) => {

        let filterList = books.filter(item => item.name.includes(searchWord) && searchWord !== '')
        setSearchResultList(filterList);

    }


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
            .get(`http://52.79.234.227/book/information/search`,{
                params:{
                  query: searchWord,
                },
                headers: {
                    Authorization: jwt,
                  
                }
              })
            
            .then((response) => {
            console.log(`Response : ${JSON.stringify(response)}`);
            })
            .catch((error) => {
            console.log('Error:', error.response);
            });
        
        resetInput();
        };
    
    return(
        <ModalBackground>
        <Container>
            
            <Font>
            책 제목을 입력해주세요
            </Font>

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

            
            <SearchResult>

            <>
            {searchResultList.map(item=>
                <SearchBox>
                    <p className='title'>{item.name}</p>
                    <p className='publisher'>{item.publisher}</p>
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
  width: 400px;
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
width: 400px;
height : 400px;

display: flex;
flex-direction: column;

overflow : auto;

`

const SearchBox = styled.div`
font-family: tway, sans-serif, Arial;

height : 50px;

border: 1px solid #000;

margin : 10px 10px;

padding: 5px;

p{
    line-height : 1px;
}
.title{
    
    font-size: 20px;
}
.publisher{
    font-size: 12px;
}
`