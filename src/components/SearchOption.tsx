import React from "react";

import { styled } from "styled-components";

export default function SearchOption(){
    return(
        <>
            <Select>
                <option value='책 저자'>제목</option>
                <option value='책 저자'>저자</option>
                <option value='책 저자'>ISBN</option>
                <option value='책 저자'>작성자</option>
            </Select>

        </>
    )
}

const Select = styled.select`
    width : 100px;
    height : 40px;
    padding-left : 15px;

    margin-right : 20px;

    border : 0.5px solid #000000;

    &:focus {

    border :2px solid #000000;
    border-radius : 2px;

}
`