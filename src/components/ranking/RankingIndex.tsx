import React from "react";
import styled from "styled-components";

type TextProps = {
    text : string
}


export default function RankingIndex({text} : TextProps){
    let today = new Date();   

    let year = today.getFullYear(); // 년도
    let month = today.getMonth() + 1;  // 월
    let date = today.getDate();  // 날짜

    return(
        <Positioner>
            <DateFrame>
            {year} . {month} . {date}
            </DateFrame>
            <Stat>
                {text === 'view' ? '조회수' : '평점'}
            </Stat>
        </Positioner>
    )
}

const Positioner = styled.div`
margin: 0 auto;

width: 750px;
height: 50px;

background : #4646c9;

color : #ffffff;

display : flex;
justify-content: space-between;
`

const DateFrame = styled.div`
line-height : 50px;

margin-left  :30px;

`

const Stat = styled.div`
line-height : 50px;
margin-right  :40px;

`
