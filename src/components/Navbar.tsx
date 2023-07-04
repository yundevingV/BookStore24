import SearchOption from "../components/SearchOption";
import SearchBar from "../components/SearchBar";
import SearchButton from "../components/SearchButton";
import PostButton from "../components/PostButton";

import { styled } from "styled-components";
import { StyledButtonLink } from "../styles/link";

type NavbarProps = {
    text : string;
    url : string;
}

export default function Navbar({text,url} : NavbarProps ){

    return(
        <>
        <NavContainer>
                <Form>

                    <SearchOption />

                    <SearchBar />
                    <SearchButton />
                    <StyledButtonLink to={url + 'add'}>
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