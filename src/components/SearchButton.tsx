import React from "react";
import { useLocation } from "react-router";
import { useNavigate } from "react-router";
import styled from "styled-components";



export default function SearchButton() {

    const navigate = useNavigate();
    const location = useLocation();
    console.log(location.pathname)

    const search = () =>
    {
        navigate(`/search${location.pathname}/result`);
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
