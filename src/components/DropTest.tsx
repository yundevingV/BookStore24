import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveDropDownValue } from '../action/dropdown_value';
import styled from 'styled-components';

type dropProps ={
  dropValue : string,
}

const DropdownWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledSelect = styled.select`
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin: 8px;
`;

const DropdownMenu = ({ dropValue }: dropProps) => {
  
  const dispatch = useDispatch();
  
  const [selectedValue, setSelectedValue] = useState(dropValue);

  const handleSelectChange = (event : any) => {
    const newValue = event.target.value;
    setSelectedValue(newValue);
    dispatch(saveDropDownValue(newValue));
  };

  const list = ["서울", "인천", "경기도"];
  const value = ["seoul", "incheon", "gyeonggi"];

  return (
    <DropdownWrapper>
      <StyledSelect value={selectedValue} onChange={handleSelectChange}>
        {list.map((item, index) => (
          <option key={value[index]} value={value[index]}>
            {item}
          </option>
        ))}
      </StyledSelect>
    </DropdownWrapper>
  );
};

export default DropdownMenu;