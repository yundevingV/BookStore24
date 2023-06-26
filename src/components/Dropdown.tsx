import React ,{useState} from "react";

import { styled } from "styled-components";

export default function Dropdown() {

    // 거주지역 선택 더미 데이터
    const list = ["서울", "인천", "경기도"];
    

    const [active, setActive] = useState(false); // 리스트가 열려있는지 확인
    const [selected, setSelected] = useState(list[0]); // 선택된 값을 selected에 담아 컴포넌트 간에 공유


    return (
    // StyledSelectbox = button, ul을 담는 전체 div
    <StyledSelectbox>
        
    <StyledSelectedLabel value={selected} onClick={() => setActive(!active)}> 
    {/* 선택된 값이 보여질 버튼 */}
        {selected} {active ? '▼' : '▶'}
    </StyledSelectedLabel>
    {/* 리스트를 보여줄 ul (ul을 열고 닫는 방식을 통해 드롭다운 구현) */}
    {active ? <StyledOptionList > 
        {list
        .filter(element => element !== selected) // 현재 selected된 값을 제외하고 보여주도록 함.
        .map(element => (
            <StyledOptionItem 
            key={element} // map을 쓰기 위해서는 해당 방식으로 key가 주어져야함.
            onClick={() => { // 클릭되면 active를 끄고 element로 선택된 값을 변경함.
                setActive(false);
                setSelected(element);
            }}
            > 
            {/* li에 들어갈 리스트들 */}
            {element}
            </StyledOptionItem>
        ))}
    </StyledOptionList> : <></>}
    

    </StyledSelectbox>
    );

}

export const StyledSelectbox = styled.div`
    position : relative;
    border-radius: 8px;
    background: transparent;

    cursor: pointer;
`;

export const StyledSelectedLabel = styled.button`

border : 0px;
padding: 2px;

// 글자 크기 설정
font-size: 20px;
background: transparent;
font-family: tway, sans-serif, Arial;

// 커서가 올라오면 pointer모양으로 변경
cursor: pointer;
`;
const StyledOptionItem = styled.li`
  box-sizing: border-box;
  transition: 0.3s;
  font-size : 18px;
  background: #ffffff;
  margin-bottom : 10px;

  text-align : center;
  font-family: tway, sans-serif, Arial;

  &:hover {
    background: #e2e2e2;
  }
`;


  
const StyledOptionList = styled.ul`

    background-color : #ffffff;
    box-sizing: border-box; // 테두리에 맞게 ul 크기 조절
    position: absolute; // absolute를 이용해 위치를 원하는 곳에 둘것.
    left : 100px;
    top : 5px;
    /* list-style-type: none; // ul을 커스텀할 거라면 꼭 해줘야하는 list-style-type:none */
    width: 50%; // 크기는 드롭다운 본체의 너비와 동일하게함.
    border-radius: 8px; // 동글동글하게 아래부분을 만들어야해서 border-radius를 줌.
    transition: 0.2s ease-in-out; // 0.2초를 걸려서 부드럽게 ul이 보이고 사라진다.
    overflow-y: scroll; // scroll을 통해 리스트 내용들을 보겠다.

    &::-webkit-scrollbar { // scrollbar 자체의 설정
        // 너비를 작게 설정
        width: 6px; 
    }
    &::-webkit-scrollbar-track { // scrollbar의 배경부분 설정
        // 부모와 동일하게 함(나중에 절전모드, 밤모드 추가되면 수정하기 번거로우니까... 미리 보이는 노동은 최소화)
        background: transparent;
    }
    &::-webkit-scrollbar-thumb { // scrollbar의 bar 부분 설정
        // 동글동글한 회색 바를 만든다.
        border-radius: 1rem;
        background: transparent;
    }
    &::-webkit-scrollbar-button { // scrollbar의 상하단 위/아래 이동 버튼
        // 크기를 안줘서 안보이게 함.
        width: 0;
        height: 0;
    }
    
  `;



