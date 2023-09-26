import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveSearchOption } from "../action/search_option";
import { RootState } from "../reducer"; // Import your RootState type from your Redux setup
import { styled } from "styled-components";

export default function SearchOption() {
  const dispatch = useDispatch();
    // 검색
    const searchOpion = useSelector(
        (state : RootState) => state.SearchOptionReducer.searchOptionData
    );
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = e.target.value;
    dispatch(saveSearchOption(newValue));
  };

  return (
    <>
      <Select value={searchOpion} onChange={handleChange}>
        <option value="title">제목</option>
        <option value="author">저자</option>
        <option value="booktitle">책 제목</option>
        <option value="nickname">작성자</option>
      </Select>
    </>
  );
}

const Select = styled.select`
  width: 100px;
  height: 40px;
  padding-left: 15px;
  margin-right: 20px;
  border: 0.5px solid #000000;

  &:focus {
    border: 2px solid #000000;
    border-radius: 2px;
  }
`;
