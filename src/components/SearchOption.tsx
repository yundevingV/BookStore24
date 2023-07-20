import React ,{useState} from "react";
import { saveSearchOption } from "../action/search_option";

import { useDispatch } from "react-redux";
import { styled } from "styled-components";

export default function SearchOption(){

    const dispatch = useDispatch();



    const [selectValue , setSelectValue] = useState('제목')

    const handleChange = (e: { target: { value: React.SetStateAction<string>; }; } ) => {
        setSelectValue(e.target.value)
    }
    
    dispatch(saveSearchOption(selectValue));

    console.log(selectValue)
    
    return(
        <>
            <Select onChange={handleChange}>
                <option value='제목'>제목</option>
                <option value='저자'>저자</option>
                <option value='ISBN'>ISBN</option>
                <option value='작성자'>작성자</option>
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