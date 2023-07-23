import React, { useEffect } from "react";
import useInput from "../hooks/useInput";
import { saveSearchWord } from "../action/search_word";

import { styled } from "styled-components";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../reducer/index";


export default function SearchBar(){

    const dispatch = useDispatch();
    //검색창
    const [ {searchWord}, onInputChange, resetInput ] = useInput({
        searchWord : '',
        
    });

    useEffect(() => {
        dispatch(saveSearchWord(searchWord));
        }, [dispatch,searchWord]);    

    return(
        <>
            <Input 
                placeholder='검색'
                name="searchWord" 
                value={searchWord}
                onChange={onInputChange} />

        </>
    )
}

const Input = styled.input`
    width : 175px;
    height : 37px;
    padding-left : 15px;

    border : 0.5px solid #000000;
    border-right : 0px; 

    &:focus {
    border-color: darken(#000000, 10%); /* Darken the border color */
    box-shadow: inset 0 0 5px darken(#000000, 10%); /* Add an inward box shadow */
    border-right : 0px; 
  }

`

