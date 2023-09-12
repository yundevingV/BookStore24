import React ,{useState} from "react";
import { saveSearchOption } from "../action/search_option";

import { useDispatch } from "react-redux";
import { styled } from "styled-components";

export default function SearchOption(){

    const dispatch = useDispatch();



    const [selectValue , setSelectValue] = useState('title')

    const handleChange = (e: { target: { value: React.SetStateAction<string>; }; } ) => {
        setSelectValue(e.target.value)
    }
    
    dispatch(saveSearchOption(selectValue));

    console.log(selectValue)
    
    return(
        <>
            <Select onChange={handleChange}>
                <option value='title'>제목</option>
                <option value='booktitle'>책 제목</option>
                <option value='author'>저자</option>
                <option value='nickname'>작성자</option>
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