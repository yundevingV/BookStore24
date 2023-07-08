import useInput from "../hooks/useInput";
import SearchOption from "../components/SearchOption";
import SearchBar from "../components/SearchBar";
import SearchButton from "../components/SearchButton";
import PostButton from "../components/PostButton";


import { styled } from "styled-components";
import { StyledButtonLink } from "../styles/link";
import { useSelector } from "react-redux";
import { RootState } from "../reducer/index";

type NavbarProps = {
    text : string;
    url : string;
}

export default function Navbar({text,url} : NavbarProps ){

    // 검색 옵션선택.
    const searchOptionData = useSelector(
        (state: RootState) => state.searchOptionReducer.searchOptionData
    );

    const searchWordData = useSelector(
        (state: RootState) => state.searchWordReducer.searchWordData
    );


    const submit = (e : React.MouseEvent) => {

        // let filterList = books.filter(item => item.name.includes(searchWord) && searchWord !== '')

        console.log(searchWordData)
    }

    return(
        <>
        <NavContainer>
                <Form>

                    <SearchOption />

                    <SearchBar 
                        />
                    <SearchButton onClick={submit} />                   
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