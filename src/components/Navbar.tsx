import SearchOption from "../components/SearchOption";
import SearchBar from "../components/SearchBar";
import SearchButton from "../components/SearchButton";
import PostButton from "../components/PostButton";

import { styled } from "styled-components";


export default function Navbar(){
    return(
        <>
        <NavContainer>
                <Form>

                    <SearchOption />

                    <SearchBar />
                    <SearchButton />

                    <PostButton text={'책 판매하기'} />
                
                </Form>
                
        </NavContainer>
        </>
    )
}

const NavContainer = styled.div`

display: flex;

justify-content: flex-end; 

margin-bottom: 10px;
`

const Form = styled.form`
  display: flex;
  align-items: center;
  
`;