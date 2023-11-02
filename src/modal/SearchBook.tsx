import React ,{useEffect, useState} from "react"
import useInput from "../hooks/useInput";

import styled from "styled-components";
import axios from "axios";
import { getCookie } from "../components/common/Cookie";

import { useDispatch } from "react-redux";
import { saveBookInformation } from "../action/book_information";
import Swal from "sweetalert2";
    
import SearchImg from "../assets/imgs/search.svg";

type ViewProps = {
    viewModal : boolean;
    setViewModal: React.Dispatch<React.SetStateAction<boolean>>;

}

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  width: 400px;
  height: 50px;
  border-radius: 12px;
  padding : 0px 50px;

  
`;

const SearchInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  font-size: 16px;
  border-radius: 12px;
  ::placeholder{
      color : #CDCDCD;
  }
`;

const SearchIcon = styled.div`
  width: 30px;
  height : 30px;
  font-size: 24px;
  cursor: pointer;
  padding: 10px;
  background: #567dfc;
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
`;

export default function SearchBook({viewModal , setViewModal} : ViewProps){
    const token = sessionStorage.getItem('token')


    const closeModal = () => {
        setViewModal(false);
    }

    const [ { searchWord}, onInputChange, resetInput ] = useInput({
    searchWord : '',
});

    const [data,setData] = useState<any | null>(null)

    const search = (e: React.MouseEvent) => {
        if(searchWord.trim() === '' ){
            Swal.fire('검색어를 입력해주세요 !');
        }

        e.preventDefault(); // Prevent the default form submission behavior.


        axios
            .get(`http://bookstore24.shop/book/information/search`,{
                params:{
                    query: searchWord,
                },
                headers: {
                    Authorization: token,
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

        const dispatch = useDispatch();

        const save = (index : number) => {
            
            dispatch(saveBookInformation(data?.[index]))
            
        }

        return(
        <ModalBackground>
        <Container>
            
            <Font>
            책 제목을 입력해주세요
            </Font>
            
            <SearchResult>

            <SearchContainer>

                <SearchInput placeholder="검색어를 입력하세요." />
                <SearchIcon>
                    <img src={SearchImg} alt='x' />
                </SearchIcon>
            </SearchContainer>

            <>
            {data?.map((item : any, index : number) => (
                <SearchBox key={index} onClick={() => { save(index); closeModal(); }}>
                    <div className="bookname">{item.title}</div>
                    <span className="authors">{item.author.replace('^', ',')} </span>
                    <span className="authors">/</span>
                    <span className="publisher">{item.publisher}</span>
                    
                </SearchBox>
            ))}
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