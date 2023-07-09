import React from "react";

import { styled } from "styled-components";

type TextProps = {
    text : string
}

export default function RankingTitle({text} : TextProps){

    return(
        <>
            <Position>
                {text}
            </Position>
        </>
    )
}

const Position = styled.div`
    display : flex;
    justify-content: center;`