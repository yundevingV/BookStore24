import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { RootState } from "../reducer";



export default function SearchButton() {

    const navigate = useNavigate();
    const location = useLocation();

    const searchWord = useSelector(
        (state : RootState) => state.SearchWordReducer.searchWordData
    );

    const path = `/search/${location.pathname}/result?search_query=${searchWord}`;
    console.log(location.pathname);
    const search = () =>
    {

        if (!location.pathname.includes('search')){
            navigate(path);
        }
        else {
            console.log(false)
            navigate({
                pathname: location.pathname,
                search: `?search_query=${searchWord}`, // 쿼리 매개변수 구성 수정
            });
        }
    }

    return (
    <>
        <Button onClick={search}>
        <span role="img" aria-label="search">
            🔎
        </span>
        </Button>
    </>
    );
    }

const Button = styled.button`
    width: 50px;
    height: 41px;
    border: 0.6px solid #000000;
    background-color: #a19e9f;
`;
