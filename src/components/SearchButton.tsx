import React from "react";
import styled from "styled-components";

type SearchButtonProps = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export default function SearchButton({ onClick }: SearchButtonProps) {
    return (
    <>
        <Button onClick={onClick}>
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
