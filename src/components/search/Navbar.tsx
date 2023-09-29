import useInput from "../../hooks/useInput";
import SearchOption from "./SearchOption";
import SearchBar from "./SearchBar";
import SearchButton from "./SearchButton";
import PostButton from "./PostButton";


import { styled } from "styled-components";
import { StyledButtonLink } from "../../styles/link";
import { useSelector } from "react-redux";
import { RootState } from "../../reducer/index";
import React from "react";
import { useLocation, useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";

type NavbarProps = {
    text? : string;
    url? : string;
}

export default function Navbar({text,url} : NavbarProps ){

    // 검색 옵션선택.
    const searchOptionData = useSelector(
        (state: RootState) => state.SearchOptionReducer.searchOptionData
    );

    const searchWordData = useSelector(
        (state: RootState) => state.SearchWordReducer.searchWordData
    );

    const navigate = useNavigate();
    const location = useLocation();

    const [searchParams, setSearchParams] = useSearchParams();

    const searchWord = useSelector(
        (state : RootState) => state.SearchWordReducer.searchWordData
    );

    const path = `/search/${location.pathname}/result?search_query=${searchWord}`;

    const search = (e: React.FormEvent<HTMLFormElement>) =>
    {       
        e.preventDefault();

        setSearchParams({
            search_query : searchWord,
        })

        if (!location.pathname.includes('search')){

        navigate(path);       
        }
        else {
            navigate({
                search: `?search_query=${searchWord}`, // 쿼리 매개변수 구성 수정
            });
        }
    }
    return(
        <>
        <NavContainer>
                <Form onSubmit={(e : React.FormEvent<HTMLFormElement>) => search(e)}>

                    <SearchOption />

                    <SearchBar 
                        />
                    

                    <SearchButton />     

                    {url ? <StyledButtonLink to={url + '/add'}>
                        <PostButton text={text} />
                    </StyledButtonLink>
                    :
                    <> </>}
                    
                
                </Form>
                
        </NavContainer>
        </>
    )
}

const NavContainer = styled.div`

display: flex;

justify-content: flex-end; 

margin: 30px 0px;
`

const Form = styled.form`
  display: flex;
  align-items: center;
  
`;