import useInput from "../hooks/useInput";
import SearchOption from "../components/SearchOption";
import SearchBar from "../components/SearchBar";
import SearchButton from "../components/SearchButton";
import PostButton from "../components/PostButton";


import { styled } from "styled-components";
import { StyledButtonLink } from "../styles/link";
import { useSelector } from "react-redux";
import { RootState } from "../reducer/index";
import React from "react";

type NavbarProps = {
    text : string;
    url : string;
}

export default function Navbar({text,url} : NavbarProps ){

    // 검색 옵션선택.
    const searchOptionData = useSelector(
        (state: RootState) => state.SearchOptionReducer.searchOptionData
    );

    const searchWordData = useSelector(
        (state: RootState) => state.SearchWordReducer.searchWordData
    );


    const submit = (e: React.MouseEvent,searchWordData :string) => {
        e.preventDefault(); // Prevent the default form submission behavior
        console.log(searchWordData);
        console.log(searchOptionData)
    }

    return(
        <>
        <NavContainer>
                <Form onSubmit={(e : any) => submit(e, searchWordData)}>

                    <SearchOption />

                    <SearchBar 
                        />
                    

                    <SearchButton />     

                    <StyledButtonLink to={url + '/add'}>
                        <PostButton text={text} />
                    </StyledButtonLink>
                
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